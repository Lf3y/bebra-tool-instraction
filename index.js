document.getElementById("downloadBtn").addEventListener("mouseenter", function() {
    const dripContainer = document.getElementById("bloodDrip");

    // Запускаем интервал, который будет вызывать эффект каждую секунду
    const intervalId = setInterval(function() {
        for (let i = 0; i < 1; i++) {
            let drop = document.createElement("div");
            drop.classList.add("drip");
            drop.style.left = `${Math.random() * (90 - 10) + 10}%`; // Слева от 10% до 90% от ширины кнопки
            dripContainer.appendChild(drop);
            setTimeout(() => drop.remove(), 1000); // Удаляем каплю через 2 секунды
        }
    }, 100); // Интервал в 1 секунду

    // Останавливаем интервал, когда курсор покидает кнопку
    document.getElementById("downloadBtn").addEventListener("mouseleave", function() {
        clearInterval(intervalId);
    });
});

const translations = {
            "ru": {
                "update-title": "Крупное обновление <strong style='color:#ff3333;'>Версия 2.0</strong> 08.03.2025",
                "update-list": 
                [
                    "Полностью убрано использование дополнительного ПО.",
                    "Переделан функционал <strong style='color:#ff3333;'>Просмотреть данж</strong>.",
                    "Новый дизайн.",
                    "Добавлено две локализации."
                ],
                "info-title": "Основная информация",
                "purchase-title": "🔥 О покупке",
                "purchase-text": "После приобретения <strong>BEBRATOOL</strong> вы получите <span style='color:#ff3333;''>лицензионный ключ</span>, необходимый для активации программы. Чтобы запустить программу, скачайте архив, распакуйте его и найдите папку <strong>dist</strong>. Внутри находится исполняемый файл <strong>.exe</strong>. Для корректной работы <span style='color:#ff3333;''>запустите его с правами администратора</span>.",
                "features-title": "⚔️ Функционал",
                "features-list":
                [
                    "<strong>Отключение античита</strong> – позволяет обойти защиту игры для чтения памяти.",
                    "<strong>Просмотр содержимого подземелья</strong> – в авалонском данже отображает всех боссов и редкость сундуков.",
                    "<strong>Завершение процесса BEService</strong> – корректное завершение работы программы."
                ],
                "instruction-title": "📜 Инструкция по использованию",
                "step-1": "1. Войдите в авалонский данж через обычный клиент <span style='color:#ff3333;'>Albion Online</span>.",
                "step-2": "2. Запустите <strong>BEBRATOOL</strong> нажмите кнопку <span style='color:#ff3333;'>Отключить античит</span> и настройте задержку для обхода античита (<a href='#delay-info'>как определить задержку?</a>).",
                "step-3": "3. Дождитесь загрузки персонажа, затем нажмите кнопку <strong>Проверить подземелье</strong>.",
                "step-4": "4. После анализа памяти программы отобразится информация о содержимом данжа.",
                "step-5": "5. По завершении программа автоматически закроет <span style='color:#ff3333;'>Albion Online</span> и процесс <strong>BEService</strong>.",
                "step-6": "3. Нажмите <strong style=\"color:#ff3333;\">правой кнопкой мыши</strong> на клиенте <strong style=\"color:#ff3333;\">Albion Online</strong> и выберите <span style=\"color:#ff3333;\">\"Расположение файлов\"</span>. Затем откройте папку <strong style=\"color:#ff3333;\">game</strong> и найдите два исполняемых файла: <strong style=\"color:#ff3333;\">Albion-Online.exe</strong> и <strong style=\"color:#ff3333;\">Albion-Online_BE.exe</strong>. Для удобства <span style=\"color:#ff3333;\">создайте ярлыки</span> этих файлов и переместите их в папку чита. Далее нажмите <strong style=\"color:#ff3333;\">\"Обзор...\"</strong> и выберите указанные исполняемые файлы или их ярлыки.",
                "download-title": "⬇️Скачать программу⬇️",
                "downloadBtn": "Скачать",
                "delay-title": "🤔 Как определить задержку?",
                "delay-text": "При отключении античита важно правильно настроить задержку, иначе система будет работать некорректно. Настройка задержки выполняется только один раз. После этого значение сохраняется в конфигурационном файле и будет автоматически использоваться при последующих запусках. Возможны три случая:",
                "small-delay-title": "❌ Задержка слишком маленькая",
                "small-delay-text": "Если время ожидания перед остановкой BattleEye слишком короткое, обманка античита не успевает загрузиться. В окне BattleEye вы увидите всего одну строку <span style='color:#ff3333;''>(см. изображение)</span>. В таком случае необходимо <strong style='color:#ff3333;''>увеличить задержку</strong>",
                "big-delay-title": "❌ Задержка слишком большая",
                "big-delay-text": "Если задержка слишком велика, игра успевает запустить вторую копию Albion Online или в окне BattleEye появляется больше двух строк <span style='color:#ff3333;''>(см. изображение)</span>. Здесь нужно <strong style='color:#ff3333;''>уменьшить задержку</strong>",
                "perfect-delay-title": "✅ Идеальная задержка",
                "perfect-delay-text": "Правильная настройка задержки приводит к появлению ровно двух строк в окне BattleEye  <span style='color:#ff3333;'>(см. изображение)</span>. В этом случае античит успешно отключён, и вы можете пользоваться всеми возможностями программы.",
                "footer-copyright": "&copy; 2025 <strong>BEBRATOOL</strong>. Все права защищены."
            },
            "en": {
                "update-title": "Major Update <strong style='color:#ff3333;'>Version 2.0</strong> 08.03.2025",
                "update-list": 
                [
                    "Completely removed the need for additional software.",
                    "Reworked the <strong style='color:#ff3333;'>View Dungeon</strong> functionality.",
                    "New design.",
                    "Added two localizations."
                ],
                "info-title": "Main information",
                "purchase-title": "🔥 About purchase",
                "purchase-text": "After purchasing <strong>BEBRATOOL</strong>, you will receive a <span style='color:#ff3333;'>license key</span> required to activate the program. To launch the program, download the archive, extract it, and find the <strong>dist</strong> folder. Inside, you will find the executable file <strong>.exe</strong>. For proper operation, <span style='color:#ff3333;'>run it with administrator privileges</span>.",
                "features-title": "⚔️ Functional",
                "features-list":
                [
                "<strong>Anti-cheat disabling</strong> – allows bypassing the game's memory protection.",
                "<strong>Dungeon content preview</strong> – shows all bosses and chest rarity in Avalon dungeons.",
                "<strong>Closing BEService process</strong> – proper termination of the program."
                ],
                "instruction-title": "📜 Usage Instructions",
                "step-1": "1. Enter the Avalon dungeon through the regular <span style='color:#ff3333;'>Albion Online</span> client.",
                "step-2": "2. Launch <strong>BEBRATOOL</strong>press the button <span style='color:#ff3333;'>Turn off anti-cheat</span> and set the delay to bypass the anti-cheat (<a href='#delay-info'>how to determine the delay?</a>).",
                "step-3": "3. Wait for the character to load, then press the <strong>Check Dungeon</strong> button.",
                "step-4": "4. After memory analysis, the program will display information about the dungeon contents.",
                "step-5": "5. Upon completion, the program will automatically close <span style='color:#ff3333;'>Albion Online</span> and the <strong>BEService</strong> process.",
                "step-6": "3. Right-click on the <strong style=\"color:#ff3333;\">Albion Online</strong> client and select <span style=\"color:#ff3333;\">\"File Location\"</span>. Then, open the <strong style=\"color:#ff3333;\">game</strong> folder and find two executable files: <strong style=\"color:#ff3333;\">Albion-Online.exe</strong> and <strong style=\"color:#ff3333;\">Albion-Online_BE.exe</strong>. For convenience, <span style=\"color:#ff3333;\">create shortcuts</span> for these files and move them to the cheat folder. Then, click <strong style=\"color:#ff3333;\">\"Browse...\"</strong> and select the specified executable files or their shortcuts.",
                "download-title": "⬇️Download programm⬇️",
                "downloadBtn": "Download",
                "delay-title": "🤔 How to determine the delay?",
                "delay-text": "When disabling the anti-cheat, it is important to properly configure the delay; otherwise, the system will not work correctly. The delay is configured only once. After that, the value is saved in the configuration file and will be automatically used in subsequent launches. There are three possible scenarios:",
                "small-delay-title": "❌ Delay is too small",
                "small-delay-text": "If the waiting time before stopping BattleEye is too short, the cheat cannot load in time. You will see only one line in the BattleEye window <span style='color:#ff3333;'> (see image)</span>. In this case, you need to <strong style='color:#ff3333;'>increase the delay</strong>",
                "big-delay-title": "❌ Delay is too large",
                "big-delay-text": "If the delay is too large, the game manages to launch a second copy of Albion Online, or more than two lines appear in the BattleEye window <span style='color:#ff3333;'> (see image)</span>. Here, you need to <strong style='color:#ff3333;'>decrease the delay</strong>",
                "perfect-delay-title": "✅ Perfect delay",
                "perfect-delay-text": "Properly configuring the delay results in exactly two lines in the BattleEye window <span style='color:#ff3333;'> (see image)</span>. In this case, the anti-cheat is successfully disabled, and you can use all the features of the program.",
                "footer-copyright": "&copy; 2025 <strong>BEBRATOOL</strong>. All rights reserved."
            }
        };

        document.getElementById("languageToggle").addEventListener("click", function() {
            const lang = this.textContent === "EN" ? "en" : "ru";
            this.textContent = lang === "ru" ? "EN" : "RU";
            Object.keys(translations[lang]).forEach(id => {
                const elem = document.getElementById(id);
                if (elem) {
                    if (Array.isArray(translations[lang][id])) {
                        elem.innerHTML = translations[lang][id].map(item => `<li>${item}</li>`).join('');
                    } else {
                        elem.innerHTML = translations[lang][id];
                    }
                }
            });
        });