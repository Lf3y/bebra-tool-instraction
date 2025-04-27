// Blood dripping effect for the download button
document.addEventListener('DOMContentLoaded', function() {
    // Handle preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1500);
    }

    // Mobile menu handling
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const closeMenuButton = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            // Add blood splash effect
            createBloodSplash(event);
        });
    }
    
    if (closeMenuButton && mobileMenu) {
        closeMenuButton.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && 
            mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            e.target !== mobileMenuButton) {
            mobileMenu.classList.remove('active');
        }
    });
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Initialize blood cursor effects
    initBloodCursor();
    
    // Set index for each list item to stagger animations
    document.querySelectorAll('li').forEach((li, index) => {
        li.style.setProperty('--item-index', index);
    });

    // Initialize parallax effect for feature and delay cards
    initParallaxCards();
    
    // Add pressing effect for cards
    initCardPressing();
    
    // Add blood ripple effect to blocks
    initBloodRipple();
    
    // Add blood pills decoration to headings
    addBloodPillsToHeadings();
    
    // Add blood border glow to various elements
    addBloodBorderGlow();
    
    // Initialize video players with enhanced functionality
    initVideoPlayers();
    
    // Blood drip effect for download button
    const downloadBtn = document.getElementById('downloadBtn');
    const bloodDrip = document.getElementById('bloodDrip');
    
    if (downloadBtn && bloodDrip) {
        downloadBtn.addEventListener('mouseover', function() {
            bloodDrip.style.animation = 'none';
            setTimeout(() => {
                bloodDrip.style.animation = 'drip 2s ease-out';
            }, 10);
        });
    }

    // Random blood spots on hover for blocks
    const blocks = document.querySelectorAll('.block');
    
    blocks.forEach(block => {
        block.addEventListener('mouseover', function() {
            // Only add blood if there isn't already a blood spot
            const existingBlood = this.querySelector('.blood-spot');
            if (!existingBlood) {
                createBloodSpot(this);
            }
        });
    });
    
    // Function to initialize video players with enhanced controls
    function initVideoPlayers() {
        const videoContainers = document.querySelectorAll('.video-container');
        
        videoContainers.forEach(container => {
            const video = container.querySelector('video');
            if (!video) return;
            
            // Create a play button overlay if it doesn't exist
            let playButton = container.querySelector('.play-button');
            if (!playButton) {
                playButton = document.createElement('div');
                playButton.className = 'play-button';
                playButton.innerHTML = `
                    <svg viewBox="0 0 24 24" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#8a0303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 8L16 12L10 16V8Z" stroke="#8a0303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#8a0303"/>
                    </svg>
                `;
                container.appendChild(playButton);
            }
            
            // Add blood ripple effect on click
            container.addEventListener('click', function(e) {
                if (video.paused) {
                    // Add blood ripple at click position
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    createVideoBloodRipple(this, x, y);
                    
                    // Play the video after a short delay for the effect
                    setTimeout(() => {
                        video.play();
                        playButton.style.display = 'none';
                    }, 150);
                } else {
                    video.pause();
                    playButton.style.display = 'flex';
                }
            });
            
            // Show play button when video ends or is paused
            video.addEventListener('ended', function() {
                playButton.style.display = 'flex';
            });
            
            video.addEventListener('pause', function() {
                playButton.style.display = 'flex';
            });
            
            // Add hover effect to video container
            container.addEventListener('mouseenter', function() {
                this.classList.add('video-hover');
            });
            
            container.addEventListener('mouseleave', function() {
                this.classList.remove('video-hover');
            });
        });
    }
    
    // Function to create blood ripple effect when clicking video
    function createVideoBloodRipple(container, x, y) {
        const ripple = document.createElement('div');
        ripple.className = 'blood-ripple';
        ripple.style.cssText = `
            position: absolute;
            top: ${y}px;
            left: ${x}px;
            transform: translate(-50%, -50%) scale(0);
        `;
        
        container.appendChild(ripple);
        
        // Force reflow
        ripple.offsetWidth;
        
        ripple.style.transform = 'translate(-50%, -50%) scale(1)';
        ripple.style.opacity = '0';
        
        // Remove the ripple after animation completes
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }
    
    // Function to initialize card pressing effect
    function initCardPressing() {
        const allCards = [
            ...document.querySelectorAll('.card'),
            ...document.querySelectorAll('.feature-card'),
            ...document.querySelectorAll('.delay-card')
        ];
        
        allCards.forEach(card => {
            // Add mousemove event for interactive highlighting
            card.addEventListener('mousemove', function(e) {
                // Get position relative to card
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Set the position variables as CSS properties
                this.style.setProperty('--x', `${x}px`);
                this.style.setProperty('--y', `${y}px`);
                
                // Calculate rotation values based on mouse position
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateY = ((x - centerX) / centerX) * 5;
                const rotateX = ((centerY - y) / centerY) * 5;
                
                // Apply rotation properties
                this.style.setProperty('--rotateX', rotateX);
                this.style.setProperty('--rotateY', rotateY);
                
                // Add pressed class if mouse is down
                if (e.buttons === 1) {
                    if (this.classList.contains('feature-card')) {
                        this.classList.add('feature-card-pressed');
                    } else if (this.classList.contains('delay-card')) {
                        this.classList.add('delay-card-pressed');
                    } else {
                        this.classList.add('card-pressed');
                    }
                } else {
                    if (this.classList.contains('feature-card')) {
                        this.classList.remove('feature-card-pressed');
                    } else if (this.classList.contains('delay-card')) {
                        this.classList.remove('delay-card-pressed');
                    } else {
                        this.classList.remove('card-pressed');
                    }
                }
            });
            
            // Handle mouse down event
            card.addEventListener('mousedown', function(e) {
                if (this.classList.contains('feature-card')) {
                    this.classList.add('feature-card-pressed');
                } else if (this.classList.contains('delay-card')) {
                    this.classList.add('delay-card-pressed');
                } else {
                    this.classList.add('card-pressed');
                }
                
                // Create blood splatter specifically for cards
                createCardBloodSplatter(this, e);
            });
            
            // Handle mouse up event
            card.addEventListener('mouseup', function() {
                if (this.classList.contains('feature-card')) {
                    this.classList.remove('feature-card-pressed');
                } else if (this.classList.contains('delay-card')) {
                    this.classList.remove('delay-card-pressed');
                } else {
                    this.classList.remove('card-pressed');
                }
            });
            
            // Reset card when mouse leaves
            card.addEventListener('mouseleave', function() {
                this.style.setProperty('--rotateX', 0);
                this.style.setProperty('--rotateY', 0);
                
                if (this.classList.contains('feature-card')) {
                    this.classList.remove('feature-card-pressed');
                } else if (this.classList.contains('delay-card')) {
                    this.classList.remove('delay-card-pressed');
                } else {
                    this.classList.remove('card-pressed');
                }
            });
        });
    }
    
    // Function to create blood splatter specifically for cards
    function createCardBloodSplatter(card, e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const splatter = document.createElement('div');
        splatter.style.cssText = `
            position: absolute;
            top: ${y}px;
            left: ${x}px;
            width: 30px;
            height: 30px;
            background-color: #8a0303;
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: cardSplatter 1s forwards;
            z-index: 1;
            pointer-events: none;
            opacity: 0.7;
            filter: blur(2px);
        `;
        
        card.appendChild(splatter);
        
        // Remove after animation completes
        setTimeout(() => {
            if (splatter.parentNode) {
                splatter.parentNode.removeChild(splatter);
            }
        }, 1000);
    }
    
    // Add animation for card splatter
    const cardSplatterStyle = document.createElement('style');
    cardSplatterStyle.innerHTML = `
        @keyframes cardSplatter {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 0.7; }
            100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
        }
    `;
    document.head.appendChild(cardSplatterStyle);
    
    // Blood ripple effect for interactive elements
    function initBloodRipple() {
        const interactiveElements = [
            ...document.querySelectorAll('.card'),
            ...document.querySelectorAll('.feature-card'),
            ...document.querySelectorAll('.delay-card'),
            ...document.querySelectorAll('.block'),
            ...document.querySelectorAll('.btn')
        ];
        
        interactiveElements.forEach(element => {
            // Create the ripple element
            const ripple = document.createElement('div');
            ripple.classList.add('blood-ripple');
            element.appendChild(ripple);
            
            // Add mousemove event to track cursor position
            element.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Set position variables
                ripple.style.setProperty('--x', `${x}px`);
                ripple.style.setProperty('--y', `${y}px`);
            });
            
            // Show ripple on mouseenter
            element.addEventListener('mouseenter', function() {
                ripple.style.opacity = '1';
            });
            
            // Hide ripple on mouseleave
            element.addEventListener('mouseleave', function() {
                ripple.style.opacity = '0';
            });
            
            // Intensify ripple on click
            element.addEventListener('mousedown', function() {
                ripple.style.background = 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(139, 0, 0, 0.2) 0%, transparent 40%)';
                
                // Return to normal after a short delay
                setTimeout(() => {
                    ripple.style.background = 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(139, 0, 0, 0.2) 0%, transparent 40%)';
                }, 300);
            });
        });
    }
    
    // Add blood pills decoration to headings
    function addBloodPillsToHeadings() {
        const headings = document.querySelectorAll('h2:not(.title-decoration h2), h3');
        
        headings.forEach(heading => {
            const pillContainer = document.createElement('div');
            pillContainer.classList.add('pill-decoration');
            
            for (let i = 0; i < 3; i++) {
                const pill = document.createElement('div');
                pill.classList.add('blood-pill');
                pillContainer.appendChild(pill);
            }
            
            heading.appendChild(pillContainer);
        });
    }
    
    // Add blood border glow to various elements
    function addBloodBorderGlow() {
        const elements = [
            ...document.querySelectorAll('.video-container'),
            ...document.querySelectorAll('.delay-img')
        ];
        
        elements.forEach(element => {
            element.classList.add('blood-border-glow');
        });
    }
    
    // Function to initialize parallax effect for cards
    function initParallaxCards() {
        const featureCards = document.querySelectorAll('.feature-card[data-depth]');
        const delayCards = document.querySelectorAll('.delay-card[data-depth]');
        
        // Combine all cards with parallax effect
        const allCards = [...featureCards, ...delayCards];
        
        // Add mousemove event listener to each card
        allCards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                handleParallax(this, e);
            });
            
            card.addEventListener('mouseleave', function() {
                resetParallax(this);
            });
        });
    }
    
    // Handle parallax effect
    function handleParallax(element, event) {
        const depth = parseFloat(element.getAttribute('data-depth')) || 0.2;
        const width = element.offsetWidth;
        const height = element.offsetHeight;
        const rect = element.getBoundingClientRect();
        
        // Calculate mouse position relative to card center
        const xVal = (event.clientX - rect.left - width / 2) / (width / 2);
        const yVal = (event.clientY - rect.top - height / 2) / (height / 2);
        
        // Apply transform based on mouse position and depth
        element.style.transform = `
            rotateY(${xVal * 5 * depth}deg) 
            rotateX(${yVal * -5 * depth}deg) 
            translateZ(10px) 
            scale3d(1.05, 1.05, 1.05)
        `;
        
        // Add shadow based on tilt
        element.style.boxShadow = `
            ${-xVal * 10 * depth}px 
            ${-yVal * 10 * depth}px 
            30px rgba(139, 0, 0, 0.4)
        `;
        
        // Add light reflection effect
        const icon = element.querySelector('.feature-icon') || element.querySelector('.delay-icon');
        if (icon) {
            icon.style.transform = `
                translateX(${xVal * 15 * depth}px) 
                translateY(${yVal * 15 * depth}px)
                scale(1.1)
            `;
        }
    }
    
    // Reset parallax effect on mouse leave
    function resetParallax(element) {
        element.style.transform = '';
        element.style.boxShadow = '';
        
        const icon = element.querySelector('.feature-icon') || element.querySelector('.delay-icon');
        if (icon) {
            icon.style.transform = '';
        }
    }
    
    function createBloodSpot(element) {
        const bloodSpot = document.createElement('div');
        bloodSpot.classList.add('blood-spot');
        
        // Random position within the element
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 20 + 10;
        
        bloodSpot.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background-color: #8a0303;
            border-radius: 50%;
            opacity: 0;
            top: ${posY}%;
            left: ${posX}%;
            z-index: -1;
            box-shadow: 0 0 15px #8a0303;
            filter: blur(2px);
            animation: fadeInOut 4s ease-in-out forwards;
        `;
        
        element.appendChild(bloodSpot);
        
        // Remove after animation completes
        setTimeout(() => {
            if (bloodSpot && bloodSpot.parentNode) {
                bloodSpot.parentNode.removeChild(bloodSpot);
            }
        }, 4000);
    }
    
    // Add a style for the fadeInOut animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: scale(0.1); }
            20% { opacity: 0.7; transform: scale(1); }
            80% { opacity: 0.7; transform: scale(1); }
            100% { opacity: 0; transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);

    // Slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    // Show first slide
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }

    // Handle next slide
    window.nextSlide = function() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        
        // Add blood drip effect on slide change
        addSlideBloodEffect();
    };

    // Handle previous slide
    window.prevSlide = function() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        
        // Add blood drip effect on slide change
        addSlideBloodEffect();
    };
    
    // Function to add blood drip effect on slide change
    function addSlideBloodEffect() {
        const slider = document.querySelector('.slider');
        
        if (slider) {
            const bloodDrip = document.createElement('div');
            bloodDrip.classList.add('slide-blood-drip');
            
            // Random position
            const posX = Math.random() * 90 + 5;
            
            bloodDrip.style.cssText = `
                position: absolute;
                width: 2px;
                height: 0;
                background-color: #b30000;
                top: 0;
                left: ${posX}%;
                z-index: 5;
                animation: slideBloodDrip 2s ease-out forwards;
            `;
            
            slider.appendChild(bloodDrip);
            
            // Remove after animation completes
            setTimeout(() => {
                if (bloodDrip && bloodDrip.parentNode) {
                    bloodDrip.parentNode.removeChild(bloodDrip);
                }
            }, 2000);
        }
    }
    
    // Add animation for slide blood drip
    const slideBloodStyle = document.createElement('style');
    slideBloodStyle.innerHTML = `
        @keyframes slideBloodDrip {
            0% { height: 0; }
            100% { height: 100%; }
        }
    `;
    document.head.appendChild(slideBloodStyle);

    // Language toggle functionality
    const languageToggle = document.getElementById('languageToggle');
    
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            const currentLang = this.textContent;
            this.textContent = currentLang === 'EN' ? 'RU' : 'EN';
            
            // Add blood splash effect
            const splash = document.createElement('div');
            splash.classList.add('blood-splash');
            
            splash.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: rgba(139, 0, 0, 0.2);
                z-index: 999;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.5s ease;
            `;
            
            document.body.appendChild(splash);
            
            setTimeout(() => {
                splash.style.opacity = '1';
                setTimeout(() => {
                    splash.style.opacity = '0';
                    setTimeout(() => {
                        if (splash && splash.parentNode) {
                            splash.parentNode.removeChild(splash);
                        }
                    }, 500);
                }, 200);
            }, 10);
            
            // Toggle language strings
            toggleLanguage(currentLang === 'EN' ? 'ru' : 'en');
        });
    }
    
    // Toggle between languages
    function toggleLanguage(lang) {
        const translations = {
            'info-title': {
                'en': 'Main Information',
                'ru': 'Основная информация'
            },
            'purchase-title': {
                'en': '🔥 About Purchase',
                'ru': '🔥 О покупке'
            },
            'purchase-text': {
                'en': 'After purchasing <strong>BEBRATOOL</strong> you will receive a <span class="blood-text">license key</span> required to activate the program. To run the program, download the archive, unpack it and find the <strong>dist</strong> folder. Inside is the executable <strong>.exe</strong> file. For correct operation, <span class="blood-text">run it with administrator rights</span>.',
                'ru': 'После приобретения <strong>BEBRATOOL</strong> вы получите <span class="blood-text">лицензионный ключ</span>, необходимый для активации программы. Чтобы запустить программу, скачайте архив, распакуйте его и найдите папку <strong>dist</strong>. Внутри находится исполняемый файл <strong>.exe</strong>. Для корректной работы <span class="blood-text">запустите его с правами администратора</span>.'
            },
            'features-title': {
                'en': 'Features',
                'ru': 'Функционал'
            },
            'demonstration-video-text': {
                'en': '🎥 Demonstration',
                'ru': '🎥 Демонстрация работы'
            },
            'instruction-title': {
                'en': '📜 Usage Instructions',
                'ru': '📜 Инструкция по использованию'
            },
            'step-1': {
                'en': '1. Enter the Avalonian dungeon through the regular <span class="blood-text">Albion Online</span> client.',
                'ru': '1. Войдите в авалонский данж через обычный клиент <span class="blood-text">Albion Online</span>.'
            },
            'step-2': {
                'en': '2. Launch <strong>BEBRATOOL</strong>, press the <span class="blood-text">Disable anti-cheat</span> button and set the delay for bypassing the anti-cheat (<a href="#delay-info">how to determine the delay?</a>).',
                'ru': '2. Запустите <strong>BEBRATOOL</strong> нажмите кнопку <span class="blood-text">Отключить античит</span> и настройте задержку для обхода античита (<a href="#delay-info">как определить задержку?</a>).'
            },
            'step-6': {
                'en': '3. <strong style="color:#ff3333;">Right-click</strong> on the <strong style="color:#ff3333;">Albion Online</strong> client and select <span class="blood-text">"Browse Location"</span>. Then open the <strong style="color:#ff3333;">game</strong> folder and find two executable files: <strong style="color:#ff3333;">Albion-Online.exe</strong> and <strong style="color:#ff3333;">Albion-Online_BE.exe</strong>. For convenience, <span class="blood-text">create shortcuts</span> of these files and move them to the cheat folder. Then click <strong style="color:#ff3333;">"Browse..."</strong> and select the specified executable files or their shortcuts.',
                'ru': '3. Нажмите <strong style="color:#ff3333;">правой кнопкой мыши</strong> на клиенте <strong style="color:#ff3333;">Albion Online</strong> и выберите <span class="blood-text">"Расположение файлов"</span>. Затем откройте папку <strong style="color:#ff3333;">game</strong> и найдите два исполняемых файла:  <strong style="color:#ff3333;">Albion-Online.exe</strong> и <strong style="color:#ff3333;">Albion-Online_BE.exe</strong>. Для удобства <span class="blood-text">создайте ярлыки</span> этих файлов и переместите их в папку чита. Далее нажмите <strong style="color:#ff3333;">"Обзор..."</strong> и выберите указанные исполняемые файлы или их ярлыки.'
            },
            'pathes-video-text': {
                'en': '🎥 How to find paths',
                'ru': '🎥 Как найти пути'
            },
            'step-3': {
                'en': '4. Wait for your character to load, then click the <strong>Check dungeon</strong> button.',
                'ru': '4. Дождитесь загрузки персонажа, затем нажмите кнопку <strong>Проверить подземелье</strong>.'
            },
            'step-4': {
                'en': '5. After analyzing the program memory, information about the dungeon contents will be displayed.',
                'ru': '5. После анализа памяти программы отобразится информация о содержимом данжа.'
            },
            'step-5': {
                'en': '6. Upon completion, the program will automatically close <span class="blood-text">Albion Online</span> and the <strong>BEService</strong> process.',
                'ru': '6. По завершении программа автоматически закроет <span class="blood-text">Albion Online</span> и процесс <strong>BEService</strong>.'
            },
            'download-title': {
                'en': 'Download program',
                'ru': 'Скачать программу'
            },
            'downloadBtn': {
                'en': 'Download BEBRATOOL',
                'ru': 'Скачать BEBRATOOL'
            },
            'delay-title': {
                'en': 'How to determine the delay?',
                'ru': 'Как определить задержку?'
            },
            'delay-text': {
                'en': 'When disabling anti-cheat, it is important to set the delay correctly, otherwise the system will not work properly. The delay is set only once. After that, the value is saved in the configuration file and will be used automatically on subsequent launches. There are three cases:',
                'ru': 'При отключении античита важно правильно настроить задержку, иначе система будет работать некорректно. Настройка задержки выполняется только один раз. После этого значение сохраняется в конфигурационном файле и будет автоматически использоваться при последующих запусках. Возможны три случая:'
            },
            'small-delay-title': {
                'en': 'Delay too small',
                'ru': 'Задержка слишком маленькая'
            },
            'small-delay-text': {
                'en': 'If the wait time before stopping BattleEye is too short, the anti-cheat deceiver does not have time to load. In the BattleEye window, you will see only one line <span class="blood-text">(see image)</span>. In this case, you need to <strong style="color:#ff3333;">increase the delay</strong>.',
                'ru': 'Если время ожидания перед остановкой BattleEye слишком короткое, обманка античита не успевает загрузиться. В окне BattleEye вы увидите всего одну строку <span class="blood-text">(см. изображение)</span>. В таком случае необходимо <strong style="color:#ff3333;">увеличить задержку</strong>.'
            },
            'big-delay-title': {
                'en': 'Delay too large',
                'ru': 'Задержка слишком большая'
            },
            'big-delay-text': {
                'en': 'If the delay is too large, the game manages to launch a second copy of Albion Online or more than two lines appear in the BattleEye window <span class="blood-text">(see image)</span>. Here you need to <strong style="color:#ff3333;">reduce the delay</strong>.',
                'ru': 'Если задержка слишком велика, игра успевает запустить вторую копию Albion Online или в окне BattleEye появляется больше двух строк <span class="blood-text">(см. изображение)</span>. Здесь нужно <strong style="color:#ff3333;">уменьшить задержку</strong>.'
            },
            'perfect-delay-title': {
                'en': 'Perfect delay',
                'ru': 'Идеальная задержка'
            },
            'perfect-delay-text': {
                'en': 'The correct delay setting results in exactly two lines appearing in the BattleEye window <span class="blood-text">(see image)</span>. In this case, the anti-cheat is successfully disabled, and you can use all features of the program.',
                'ru': 'Правильная настройка задержки приводит к появлению ровно двух строк в окне BattleEye <span class="blood-text">(см. изображение)</span>. В этом случае античит успешно отключён, и вы можете пользоваться всеми возможностями программы.'
            },
            'footer-copyright': {
                'en': '&copy; 2025 <strong>BEBRATOOL</strong>. All rights reserved.',
                'ru': '&copy; 2025 <strong>BEBRATOOL</strong>. Все права защищены.'
            }
        };

        // Update all text elements
        for (const key in translations) {
            const element = document.getElementById(key);
            if (element) {
                if (element.tagName === 'A') {
                    element.textContent = translations[key][lang];
                } else {
                    element.innerHTML = translations[key][lang];
                }
            }
        }
    }

    // Fix blood cursor size and intensity
    const existingCursor = document.querySelector('.blood-cursor');
    if (existingCursor) {
        existingCursor.remove();
    }
    
    // Create more subtle blood cursor
    const bloodCursor = document.createElement('div');
    bloodCursor.classList.add('blood-cursor');
    bloodCursor.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background-color: rgba(138, 3, 3, 0.6);
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: 9999;
        opacity: 0.6;
        transition: width 0.2s, height 0.2s;
        box-shadow: 0 0 5px rgba(138, 3, 3, 0.5);
        mix-blend-mode: screen;
    `;
    document.body.appendChild(bloodCursor);
    
    // Make blood trail less intense
    document.addEventListener('mousemove', function(e) {
        bloodCursor.style.left = e.clientX + 'px';
        bloodCursor.style.top = e.clientY + 'px';
        
        // Create less frequent and less intense blood trail
        if (Math.random() > 0.95) { // Less frequent
            const trail = document.createElement('div');
            trail.classList.add('blood-trail');
            
            const size = Math.random() * 3 + 2; // Smaller size
            
            trail.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background-color: rgba(138, 3, 3, 0.3);
                border-radius: 50%;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                pointer-events: none;
                z-index: 9998;
                opacity: 0.3;
                animation: fadeTrail 1.5s forwards;
            `;
            
            document.body.appendChild(trail);
            
            setTimeout(() => {
                if (trail && trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
            }, 1500);
        }
    });
    
    // Change cursor size on mouse down/up - but less dramatic
    document.addEventListener('mousedown', function(event) {
        bloodCursor.style.width = '12px';
        bloodCursor.style.height = '12px';
        
        // Create more subtle blood splash
        createBloodSplash(event, true);
    });
    
    document.addEventListener('mouseup', function() {
        bloodCursor.style.width = '8px';
        bloodCursor.style.height = '8px';
    });
    
    // Function to create blood splash on mouse down
    function createBloodSplash(e, subtle = false) {
        const splash = document.createElement('div');
        splash.className = 'blood-ripple';
        
        const size = subtle ? 50 : 80;
        
        splash.style.cssText = `
            position: absolute;
            top: ${e.clientY}px;
            left: ${e.clientX}px;
            width: ${size}px;
            height: ${size}px;
            transform: translate(-50%, -50%) scale(0);
            z-index: 9999;
        `;
        
        document.body.appendChild(splash);
        
        // Force reflow
        splash.offsetWidth;
        
        splash.style.transform = 'translate(-50%, -50%) scale(1)';
        splash.style.opacity = '0';
        
        // Remove after animation completes
        setTimeout(() => {
            if (splash.parentNode) {
                splash.parentNode.removeChild(splash);
            }
        }, 600);
    }
    
    // Fix ripple effect to be more subtle
    const ripples = document.querySelectorAll('.blood-ripple');
    ripples.forEach(ripple => {
        ripple.style.background = 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(139, 0, 0, 0.2) 0%, transparent 40%)';
    });
    
    // Fix card animation issue and ensure all cards are visible
    const delayCards = document.querySelectorAll('.delay-card');
    const allFeatureCards = document.querySelectorAll('.feature-card');

    // Ensure all cards are visible
    [...delayCards, ...allFeatureCards].forEach(card => {
        card.style.opacity = '1';
        
        // Reset transform if any
        if (card.style.transform) {
            card.style.transform = '';
        }
    });

    // Animate heading on scroll
    const headings = document.querySelectorAll('h2, h3');
    
    // Function to check if element is entering the viewport
    function checkHeadings() {
        headings.forEach(heading => {
            if (isElementInViewport(heading) && !heading.classList.contains('animated')) {
                heading.classList.add('animated');
                heading.style.animation = 'textFlicker 2s';
                
                // Create blood drop for headings when they come into view
                const bloodDrop = document.createElement('div');
                bloodDrop.style.cssText = `
                    position: absolute;
                    width: 5px;
                    height: 20px;
                    background-color: #8a0303;
                    left: 0;
                    top: -20px;
                    border-radius: 5px;
                    animation: dropFall 1s forwards ease-in;
                `;
                
                heading.style.position = 'relative';
                heading.appendChild(bloodDrop);
                
                setTimeout(() => {
                    if (bloodDrop && bloodDrop.parentNode) {
                        bloodDrop.parentNode.removeChild(bloodDrop);
                    }
                }, 1000);
            }
        });
    }
    
    // Animation for blood drop on headings
    const dropStyle = document.createElement('style');
    dropStyle.innerHTML = `
        @keyframes dropFall {
            0% { top: -20px; }
            100% { top: 100%; opacity: 0; }
        }
    `;
    document.head.appendChild(dropStyle);
    
    // Check headings when scrolling
    window.addEventListener('scroll', checkHeadings);
    
    // Initial check
    checkHeadings();

    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add animation for feature cards on scroll
    function animateOnScroll() {
        allFeatureCards.forEach((card, index) => {
            if (isElementInViewport(card) && !card.classList.contains('animated-in')) {
                card.classList.add('animated-in');
                card.style.animation = `cardEntry 0.6s ${index * 0.1}s forwards ease-out`;
            }
        });
    }
    
    // Add animation for cards when they come into view
    const cardEntryStyle = document.createElement('style');
    cardEntryStyle.innerHTML = `
        @keyframes cardEntry {
            0% { 
                opacity: 0; 
                transform: translateY(50px) scale(0.9);
            }
            100% { 
                opacity: 1; 
                transform: translateY(0) scale(1);
            }
        }
        
        .animated-in {
            opacity: 1;
        }
    `;
    document.head.appendChild(cardEntryStyle);
    
    // Check for elements on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial check
    setTimeout(animateOnScroll, 500);

    // Function to initialize blood cursor effects
    function initBloodCursor() {
        const body = document.body;
        let lastX = 0;
        let lastY = 0;
        let dropInterval;
        
        // Create blood cursor element
        const bloodCursor = document.createElement('div');
        bloodCursor.className = 'blood-cursor';
        body.appendChild(bloodCursor);
        
        // Update blood cursor position on mouse move
        document.addEventListener('mousemove', function(e) {
            // Position blood cursor at mouse position
            bloodCursor.style.left = e.clientX + 'px';
            bloodCursor.style.top = e.clientY + 'px';
            
            // Calculate movement distance
            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Determine if we should generate blood drops based on movement speed
            if (distance > 25) {
                // Create blood drop
                createBloodTrail(e.clientX, e.clientY);
                
                // Update last position
                lastX = e.clientX;
                lastY = e.clientY;
            }
        });
        
        // Create occasional blood drips on mouse down
        document.addEventListener('mousedown', function(e) {
            // Stop any existing interval
            clearInterval(dropInterval);
            
            // Create initial splatter
            createBloodSplash(e);
            
            // Set up dripping effect
            let drips = 0;
            dropInterval = setInterval(() => {
                if (drips < 3) {
                    createBloodTrail(e.clientX, e.clientY + (drips * 15), true);
                    drips++;
                } else {
                    clearInterval(dropInterval);
                }
            }, 150);
        });
        
        // Stop dripping on mouse up
        document.addEventListener('mouseup', function() {
            clearInterval(dropInterval);
        });
    }
    
    // Function to create blood trail behind cursor
    function createBloodTrail(x, y, isDrip = false) {
        const trail = document.createElement('div');
        trail.className = 'blood-trail';
        
        // Random sizing for variety
        const size = isDrip ? Math.random() * 5 + 10 : Math.random() * 3 + 2;
        
        trail.style.cssText = `
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            opacity: ${isDrip ? 0.9 : 0.7};
        `;
        
        document.body.appendChild(trail);
        
        // Add falling animation for drips
        if (isDrip) {
            setTimeout(() => {
                trail.style.transform = `translateY(${Math.random() * 50 + 30}px)`;
                trail.style.opacity = '0';
            }, 50);
        }
        
        // Remove after animation completes
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, isDrip ? 2000 : 1000);
    }
});

// Prevent default behavior for video clicks to add 3D effect
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        video.addEventListener('click', function(e) {
            if (!this.paused) {
                this.pause();
            } else {
                this.play();
            }
            e.preventDefault();
        });
        
        // Add 3D effect on hover
        video.parentElement.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = ((x / rect.width) - 0.5) * 10;
            const yPercent = ((y / rect.height) - 0.5) * 10;
            
            this.style.transform = `perspective(1000px) rotateY(${xPercent}deg) rotateX(${-yPercent}deg) scale3d(1.03, 1.03, 1.03)`;
        });
        
        // Reset on mouse leave
        video.parentElement.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}); 