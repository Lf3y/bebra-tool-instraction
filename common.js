// Common JavaScript functions for BEBRATOOL website

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
        mobileMenuButton.addEventListener('click', function(event) {
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
    
    // Initialize blood cursor effects
    initBloodCursor();
    
    // Function to initialize blood cursor effects
    function initBloodCursor() {
        const body = document.body;
        let lastX = 0;
        let lastY = 0;
        let dropInterval;
        
        // Create blood cursor element if it doesn't exist
        if (!document.querySelector('.blood-cursor')) {
            const bloodCursor = document.createElement('div');
            bloodCursor.className = 'blood-cursor';
            body.appendChild(bloodCursor);
        }
        
        const bloodCursor = document.querySelector('.blood-cursor');
        
        // Update blood cursor position on mouse move
        document.addEventListener('mousemove', function(e) {
            // Position blood cursor at mouse position
            if (bloodCursor) {
                bloodCursor.style.left = e.clientX + 'px';
                bloodCursor.style.top = e.clientY + 'px';
            }
            
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
            
            // Change cursor size
            if (bloodCursor) {
                bloodCursor.style.width = '12px';
                bloodCursor.style.height = '12px';
            }
        });
        
        // Stop dripping on mouse up
        document.addEventListener('mouseup', function() {
            clearInterval(dropInterval);
            
            // Restore cursor size
            if (bloodCursor) {
                bloodCursor.style.width = '8px';
                bloodCursor.style.height = '8px';
            }
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
            background: radial-gradient(circle, rgba(139, 0, 0, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            z-index: 9999;
            pointer-events: none;
            animation: bloodSplash 0.6s forwards;
        `;
        
        document.body.appendChild(splash);
        
        // Add animation for blood splash
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes bloodSplash {
                0% { transform: translate(-50%, -50%) scale(0); opacity: 0.7; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        // Remove after animation completes
        setTimeout(() => {
            if (splash.parentNode) {
                splash.parentNode.removeChild(splash);
            }
            if (style.parentNode) {
                style.parentNode.removeChild(style);
            }
        }, 600);
    }
    
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
            
            // Call page-specific language toggle function if it exists
            if (typeof toggleLanguage === 'function') {
                toggleLanguage(currentLang === 'EN' ? 'ru' : 'en');
            }
        });
    }
}); 

