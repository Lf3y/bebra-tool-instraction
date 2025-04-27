// Объект с переводами
const translations = {
    'ru': {
        // Общая навигация
        'nav.home': 'Главная',
        'nav.info': 'Информация',
        'nav.delay': 'Задержка',
        'nav.docs': 'Документация',
        'nav.faq': 'FAQ',
        'nav.team': 'Команда',
        
        // Общие элементы
        'hero.scroll': 'Прокрутите вниз',
        'footer.rights': 'Все права защищены.',
        
        // Landing page
        'landing.download': 'Скачать',
        'landing.hero.subtitle': 'Лучший анализатор авалонских данжей. Разведывайте и раскрывайте все секреты данжа прежде, чем рисковать своим снаряжением.',
        'landing.hero.features': 'Функционал',
        'landing.hero.docs': 'Документация',
        
        'landing.features.title': 'Ключевые возможности',
        'landing.features.item1.title': 'Обход античита',
        'landing.features.item1.description': 'Безопасный обход защиты игры для доступа к информации о данже без обнаружения.',
        'landing.features.item2.title': 'Исследование данжа',
        'landing.features.item2.description': 'Отображает всех боссов и редкость сундуков в авалонских данжах перед взаимодействием.',
        'landing.features.item3.title': 'Корректное завершение процессов',
        'landing.features.item3.description': 'Правильно завершает процесс BEService для безопасного выхода без следов в системе.',
        
        'landing.about.title': 'О BEBRATOOL',
        'landing.about.description': 'BEBRATOOL — специализированная утилита для игроков Albion Online, созданная, чтобы дать вам преимущество в авалонских данжах. Анализируя память игры, она раскрывает ценную информацию о предстоящих боссах и сокровищах, позволяя принимать обоснованные решения о том, какие пути выбрать или стоит ли продолжать углубляться в данж.',
        'landing.about.version': 'Текущая версия: <strong>2.1</strong>',
        'landing.about.readDocs': 'Прочитать документацию',
        'landing.about.videoTitle': 'Смотрите в действии',
        
        'landing.download.title': 'Скачайте сейчас',
        'landing.download.subtitle': 'Получите последнюю версию BEBRATOOL',
        'landing.download.button': 'Скачать BEBRATOOL',
        
        // Documentation page
        'hero.title': 'Документация',
        'hero.subtitle': 'Полное руководство по использованию BEBRATOOL. Настройте и используйте все возможности программы.',
        
        'updates.title': 'Последние обновления',
        'updates.update1.title': 'Обновление <strong style="color:#ff3333;">Версия 2.1</strong> 25.02.2025',
        'updates.update1.item1': 'Исправлены ошибки с загрузкой.',
        'updates.update1.item2': 'Оптимизирована работа приложения.',
        'updates.update1.item3': 'Исправлен чекер.',
        'updates.update2.title': 'Крупное обновление <strong style="color:#ff3333;">Версия 2.0</strong> 08.03.2025',
        'updates.update2.item1': 'Полностью убрано использование дополнительного ПО.',
        'updates.update2.item2': 'Переделан функционал <strong style="color:#ff3333;">Просмотреть данж</strong>.',
        'updates.update2.item3': 'Новый дизайн.',
        'updates.update2.item4': 'Добавлено две локализации.',
        
        'purchase.title': 'Основная информация',
        'purchase.subtitle': 'О покупке',
        'purchase.description': 'После приобретения <strong>BEBRATOOL</strong> вы получите <span style="color: var(--primary-red);">лицензионный ключ</span>, необходимый для активации программы. Чтобы запустить программу, скачайте архив, распакуйте его и найдите папку <strong>dist</strong>. Внутри находится исполняемый файл <strong>.exe</strong>. Для корректной работы <span style="color: var(--primary-red);">запустите его с правами администратора</span>.',
        'purchase.filename': 'BebraTool.exe',
        
        'features.title': 'Функционал',
        'features.item1.title': 'Отключение античита',
        'features.item1.description': 'Позволяет обойти защиту игры для чтения памяти и доступа к важным данным.',
        'features.item2.title': 'Просмотр содержимого данжа',
        'features.item2.description': 'В авалонском данже отображает всех боссов и редкость сундуков.',
        'features.item3.title': 'Завершение процесса BEService',
        'features.item3.description': 'Корректное завершение работы программы и всех связанных процессов.',
        
        'demo.title': 'Демонстрация работы',
        
        'instructions.title': 'Инструкция по использованию',
        'instructions.step1': '1. Войдите в авалонский данж через обычный клиент <span style="color: var(--primary-red);">Albion Online</span>.',
        'instructions.step2': '2. Запустите <strong>BEBRATOOL</strong> нажмите кнопку <span style="color: var(--primary-red);">Отключить античит</span> и настройте задержку для обхода античита (<a href="#delay-info">как определить задержку?</a>).',
        'instructions.step3': '3. Нажмите <strong style="color: var(--primary-red);">правой кнопкой мыши</strong> на клиенте <strong style="color: var(--primary-red);">Albion Online</strong> и выберите <span style="color: var(--primary-red);">"Расположение файлов"</span>. Затем откройте папку <strong style="color: var(--primary-red);">game</strong> и найдите два исполняемых файла: <strong style="color: var(--primary-red);">Albion-Online.exe</strong> и <strong style="color: var(--primary-red);">Albion-Online_BE.exe</strong>. Для удобства <span style="color: var(--primary-red);">создайте ярлыки</span> этих файлов и переместите их в папку чита. Далее нажмите <strong style="color: var(--primary-red);">"Обзор..."</strong> и выберите указанные исполняемые файлы или их ярлыки.',
        'instructions.video': 'Как найти пути',
        'instructions.step4': '4. Дождитесь загрузки персонажа, затем нажмите кнопку <strong>Проверить подземелье</strong>.',
        'instructions.step5': '5. После анализа памяти программы отобразится информация о содержимом данжа.',
        'instructions.step6': '6. По завершении программа автоматически закроет <span style="color: var(--primary-red);">Albion Online</span> и процесс <strong>BEService</strong>.',
        
        'download.title': 'Скачать программу',
        'download.subtitle': 'Получите последнюю версию BEBRATOOL прямо сейчас',
        'download.button': 'Скачать BEBRATOOL',
        
        'delay.title': 'Как определить задержку?',
        'delay.description': 'При отключении античита важно правильно настроить задержку, иначе система будет работать некорректно. Настройка задержки выполняется только один раз. После этого значение сохраняется в конфигурационном файле и будет автоматически использоваться при последующих запусках. Возможны три случая:',
        'delay.small.title': 'Задержка слишком маленькая',
        'delay.small.description': 'Если время ожидания перед остановкой BattleEye слишком короткое, обманка античита не успевает загрузиться. В окне BattleEye вы увидите всего одну строку <span style="color: var(--primary-red);">(см. изображение)</span>. В таком случае необходимо <strong style="color: var(--primary-red);">увеличить задержку</strong>.',
        'delay.big.title': 'Задержка слишком большая',
        'delay.big.description': 'Если задержка слишком велика, игра успевает запустить вторую копию Albion Online или в окне BattleEye появляется больше двух строк <span style="color: var(--primary-red);">(см. изображение)</span>. Здесь нужно <strong style="color: var(--primary-red);">уменьшить задержку</strong>.',
        'delay.perfect.title': 'Идеальная задержка',
        'delay.perfect.description': 'Правильная настройка задержки приводит к появлению ровно двух строк в окне BattleEye <span style="color: var(--primary-red);">(см. изображение)</span>. В этом случае античит успешно отключён, и вы можете пользоваться всеми возможностями программы.',
        
        // FAQ page
        'faq.hero.title': 'Часто задаваемые вопросы',
        'faq.hero.subtitle': 'Ответы на популярные вопросы о работе BEBRATOOL и его функциях.',
        'faq.title': 'FAQ',
        
        'faq.q1': 'Безопасно ли использовать BEBRATOOL?',
        'faq.a1': 'BEBRATOOL разработан с учетом всех мер безопасности. Программа не изменяет файлы игры, а работает только с памятью. По завершении работы все процессы корректно закрываются, не оставляя следов в системе. Важно помнить, что использование любых сторонних программ теоретически может привести к блокировке аккаунта, поэтому мы рекомендуем использовать BEBRATOOL только на альтернативных аккаунтах.',
        
        'faq.q2': 'Как использовать BEBRATOOL?',
        'faq.a2.p1': 'Подробная инструкция по использованию доступна на странице <a href="index.html">документации</a>. Основные шаги:',
        'faq.a2.l1': 'Войдите в авалонский данж через обычный клиент игры',
        'faq.a2.l2': 'Запустите BEBRATOOL и настройте задержку',
        'faq.a2.l3': 'Укажите пути к исполняемым файлам игры',
        'faq.a2.l4': 'Нажмите "Проверить подземелье"',
        
        'faq.q3': 'Что делать, если возникла ошибка?',
        'faq.a3.p1': 'Самые распространенные ошибки связаны с неправильной настройкой задержки. Подробно о настройке задержки можно прочитать в <a href="index.html#delay-info">соответствующем разделе</a>. Если ошибка не связана с задержкой, попробуйте следующие шаги:',
        'faq.a3.l1': 'Перезапустите программу',
        'faq.a3.l2': 'Убедитесь, что игра запущена от имени администратора',
        'faq.a3.l3': 'Проверьте, правильно ли указаны пути к исполняемым файлам',
        'faq.a3.l4': 'Временно отключите антивирус (он может блокировать работу программы)',
        
        'faq.q4': 'Как часто выходят обновления?',
        'faq.a4': 'Обновления BEBRATOOL выходят в среднем раз в месяц или чаще, если происходят изменения в клиенте игры. Последняя версия (2.1) вышла 25.02.2025. Мы стремимся поддерживать нашу программу в актуальном состоянии, чтобы обеспечить стабильную работу с каждым патчем Albion Online.',
        
        'faq.q5': 'Поддерживаются ли другие операционные системы?',
        'faq.a5': 'На данный момент BEBRATOOL поддерживает только Windows 7/8/10/11. Версий для macOS и Linux пока нет, но мы рассматриваем возможность их разработки в будущем. Подписывайтесь на наши обновления, чтобы не пропустить выход версий для других операционных систем.',
        
        'faq.q6': 'Как активировать лицензионный ключ?',
        'faq.a6.p1': 'После покупки вы получите лицензионный ключ на указанный вами адрес электронной почты. Чтобы активировать ключ:',
        'faq.a6.l1': 'Запустите BEBRATOOL',
        'faq.a6.l2': 'Нажмите на кнопку "Активировать" в главном меню',
        'faq.a6.l3': 'Введите полученный ключ в поле для активации',
        'faq.a6.l4': 'Нажмите "Подтвердить"',
        'faq.a6.p2': 'После успешной активации вы получите доступ ко всем функциям программы.',
        
        'faq.q7': 'Что показывает BEBRATOOL?',
        'faq.a7.p1': 'BEBRATOOL предоставляет следующую информацию о данже:',
        'faq.a7.l1': 'Количество и типы боссов на каждом этаже',
        'faq.a7.l2': 'Расположение всех сундуков и их редкость',
        'faq.a7.l3': 'Расположение скрытых проходов и тайников',
        'faq.a7.l4': 'Наличие редких мобов и событий',
        'faq.a7.l5': 'Кратчайший путь к боссам и ценным сундукам',
        
        'faq.contact.title': 'Связаться с нами',
        'faq.contact.name': 'Ваше имя',
        'faq.contact.email': 'Email',
        'faq.contact.subject': 'Тема',
        'faq.contact.option1': 'Техническая поддержка',
        'faq.contact.option2': 'Вопросы по лицензии',
        'faq.contact.option3': 'Предложить функцию',
        'faq.contact.option4': 'Сообщить об ошибке',
        'faq.contact.option5': 'Другое',
        'faq.contact.message': 'Сообщение',
        'faq.contact.submit': 'Отправить',
        
        // Team page
        'team.hero.title': 'Наша Команда',
        'team.hero.subtitle': 'Познакомьтесь с командой разработчиков BEBRATOOL.',
        'team.section.title': 'Разработчики',
        'team.member1.role': 'Главный разработчик',
        'team.member1.bio': 'Але.',
        'team.member2.role': 'Гей',
        'team.member2.bio': 'Хрю хрю.',
        'team.join.title': 'Присоединяйтесь к команде',
        'team.join.description': 'Мы всегда ищем талантливых разработчиков и дизайнеров для расширения нашей команды.',
        'team.join.button': 'Связаться с нами'
    },
    'en': {
        // Common navigation
        'nav.home': 'Home',
        'nav.info': 'Information',
        'nav.delay': 'Delay',
        'nav.docs': 'Documentation',
        'nav.faq': 'FAQ',
        'nav.team': 'Team',
        
        // Common elements
        'hero.scroll': 'Scroll Down',
        'footer.rights': 'All rights reserved.',
        
        // Landing page
        'landing.download': 'Download',
        'landing.hero.subtitle': 'The ultimate Avalonian dungeon analyzer. Scout ahead and reveal all secrets before risking your gear.',
        'landing.hero.features': 'Explore Features',
        'landing.hero.docs': 'Documentation',
        
        'landing.features.title': 'Key Features',
        'landing.features.item1.title': 'Anti-Cheat Bypass',
        'landing.features.item1.description': 'Safely bypass game protection to access dungeon information without detection.',
        'landing.features.item2.title': 'Dungeon Exploration',
        'landing.features.item2.description': 'Reveals all bosses and chest rarity within Avalonian dungeons before engaging.',
        'landing.features.item3.title': 'Clean Process Termination',
        'landing.features.item3.description': 'Properly ends the BEService process for safe exit without system traces.',
        
        'landing.about.title': 'About BEBRATOOL',
        'landing.about.description': 'BEBRATOOL is a specialized utility for Albion Online players, designed to give you an edge in Avalonian dungeons. By analyzing the game\'s memory, it reveals valuable information about upcoming bosses and treasures, allowing you to make informed decisions about which paths to take or whether to continue deeper into the dungeon.',
        'landing.about.version': 'Current Version: <strong>2.1</strong>',
        'landing.about.readDocs': 'Read Documentation',
        'landing.about.videoTitle': 'See It In Action',
        
        'landing.download.title': 'Download Now',
        'landing.download.subtitle': 'Get the latest version of BEBRATOOL',
        'landing.download.button': 'Download BEBRATOOL',
        
        // Documentation page
        'hero.title': 'Documentation',
        'hero.subtitle': 'Complete guide to using BEBRATOOL. Set up and use all the features of the program.',
        
        'updates.title': 'Latest Updates',
        'updates.update1.title': 'Update <strong style="color:#ff3333;">Version 2.1</strong> 25.02.2025',
        'updates.update1.item1': 'Fixed loading errors.',
        'updates.update1.item2': 'Optimized application performance.',
        'updates.update1.item3': 'Fixed checker.',
        'updates.update2.title': 'Major Update <strong style="color:#ff3333;">Version 2.0</strong> 08.03.2025',
        'updates.update2.item1': 'Completely removed the use of additional software.',
        'updates.update2.item2': 'Redesigned <strong style="color:#ff3333;">View Dungeon</strong> functionality.',
        'updates.update2.item3': 'New design.',
        'updates.update2.item4': 'Added two localizations.',
        
        'purchase.title': 'Basic Information',
        'purchase.subtitle': 'About Purchase',
        'purchase.description': 'After purchasing <strong>BEBRATOOL</strong> you will receive a <span style="color: var(--primary-red);">license key</span> required to activate the program. To run the program, download the archive, unpack it and find the <strong>dist</strong> folder. Inside is an executable <strong>.exe</strong> file. For correct operation, <span style="color: var(--primary-red);">run it with administrator rights</span>.',
        'purchase.filename': 'BebraTool.exe',
        
        'features.title': 'Features',
        'features.item1.title': 'Anti-cheat Disabling',
        'features.item1.description': 'Allows bypassing game protection to read memory and access important data.',
        'features.item2.title': 'Dungeon Content Viewing',
        'features.item2.description': 'Displays all bosses and chest rarity in Avalonian dungeon.',
        'features.item3.title': 'BEService Process Termination',
        'features.item3.description': 'Properly shuts down the program and all related processes.',
        
        'demo.title': 'Demonstration',
        
        'instructions.title': 'Usage Instructions',
        'instructions.step1': '1. Enter the Avalonian dungeon through the regular <span style="color: var(--primary-red);">Albion Online</span> client.',
        'instructions.step2': '2. Launch <strong>BEBRATOOL</strong>, click the <span style="color: var(--primary-red);">Disable Anti-cheat</span> button and set the delay for bypassing anti-cheat (<a href="#delay-info">how to determine the delay?</a>).',
        'instructions.step3': '3. Right-click on the <strong style="color: var(--primary-red);">Albion Online</strong> client and select <span style="color: var(--primary-red);">"Open File Location"</span>. Then open the <strong style="color: var(--primary-red);">game</strong> folder and find two executable files: <strong style="color: var(--primary-red);">Albion-Online.exe</strong> and <strong style="color: var(--primary-red);">Albion-Online_BE.exe</strong>. For convenience, <span style="color: var(--primary-red);">create shortcuts</span> of these files and move them to the cheat folder. Then click <strong style="color: var(--primary-red);">"Browse..."</strong> and select the specified executable files or their shortcuts.',
        'instructions.video': 'How to find paths',
        'instructions.step4': '4. Wait for the character to load, then click the <strong>Check Dungeon</strong> button.',
        'instructions.step5': '5. After analyzing the program memory, information about the dungeon contents will be displayed.',
        'instructions.step6': '6. Upon completion, the program will automatically close <span style="color: var(--primary-red);">Albion Online</span> and the <strong>BEService</strong> process.',
        
        'download.title': 'Download the Program',
        'download.subtitle': 'Get the latest version of BEBRATOOL right now',
        'download.button': 'Download BEBRATOOL',
        
        'delay.title': 'How to Determine the Delay?',
        'delay.description': 'When disabling anti-cheat, it is important to set the delay correctly, otherwise the system will not work properly. Delay setup is done only once. After that, the value is saved in the configuration file and will be automatically used in subsequent launches. There are three possible cases:',
        'delay.small.title': 'Delay Too Small',
        'delay.small.description': 'If the wait time before stopping BattleEye is too short, the anti-cheat spoofing does not have time to load. In the BattleEye window, you will see only one line <span style="color: var(--primary-red);">(see image)</span>. In this case, you need to <strong style="color: var(--primary-red);">increase the delay</strong>.',
        'delay.big.title': 'Delay Too Large',
        'delay.big.description': 'If the delay is too large, the game has time to launch a second copy of Albion Online or more than two lines appear in the BattleEye window <span style="color: var(--primary-red);">(see image)</span>. Here you need to <strong style="color: var(--primary-red);">decrease the delay</strong>.',
        'delay.perfect.title': 'Perfect Delay',
        'delay.perfect.description': 'The correct delay setting results in exactly two lines appearing in the BattleEye window <span style="color: var(--primary-red);">(see image)</span>. In this case, the anti-cheat is successfully disabled, and you can use all the features of the program.',
        
        // FAQ page
        'faq.hero.title': 'Frequently Asked Questions',
        'faq.hero.subtitle': 'Answers to common questions about BEBRATOOL and its features.',
        'faq.title': 'FAQ',
        
        'faq.q1': 'Is it safe to use BEBRATOOL?',
        'faq.a1': 'BEBRATOOL is designed with all security measures in mind. The program does not modify game files and only works with memory. Upon completion, all processes are properly closed, leaving no traces in the system. It is important to remember that using any third-party programs can theoretically lead to account suspension, so we recommend using BEBRATOOL only on alternative accounts.',
        
        'faq.q2': 'How do I use BEBRATOOL?',
        'faq.a2.p1': 'Detailed instructions for use are available on the <a href="index.html">documentation</a> page. The main steps are:',
        'faq.a2.l1': 'Enter the Avalonian dungeon through the regular game client',
        'faq.a2.l2': 'Launch BEBRATOOL and configure the delay',
        'faq.a2.l3': 'Specify the paths to the game executable files',
        'faq.a2.l4': 'Click "Check Dungeon"',
        
        'faq.q3': 'What should I do if an error occurs?',
        'faq.a3.p1': 'The most common errors are related to incorrect delay settings. You can read about delay configuration in the <a href="index.html#delay-info">relevant section</a>. If the error is not related to the delay, try the following steps:',
        'faq.a3.l1': 'Restart the program',
        'faq.a3.l2': 'Make sure the game is running as administrator',
        'faq.a3.l3': 'Check if the paths to executable files are correctly specified',
        'faq.a3.l4': 'Temporarily disable your antivirus (it may block the program\'s operation)',
        
        'faq.q4': 'How often are updates released?',
        'faq.a4': 'BEBRATOOL updates are released on average once a month or more frequently if there are changes in the game client. The latest version (2.1) was released on February 25, 2025. We strive to keep our program up-to-date to ensure stable operation with each Albion Online patch.',
        
        'faq.q5': 'Are other operating systems supported?',
        'faq.a5': 'Currently, BEBRATOOL only supports Windows 7/8/10/11. Versions for macOS and Linux are not available yet, but we are considering developing them in the future. Subscribe to our updates to stay informed about versions for other operating systems.',
        
        'faq.q6': 'How do I activate the license key?',
        'faq.a6.p1': 'After purchase, you will receive a license key to the email address you provided. To activate the key:',
        'faq.a6.l1': 'Launch BEBRATOOL',
        'faq.a6.l2': 'Click the "Activate" button in the main menu',
        'faq.a6.l3': 'Enter the received key in the activation field',
        'faq.a6.l4': 'Click "Confirm"',
        'faq.a6.p2': 'After successful activation, you will gain access to all features of the program.',
        
        'faq.q7': 'What information does BEBRATOOL show?',
        'faq.a7.p1': 'BEBRATOOL provides the following information about the dungeon:',
        'faq.a7.l1': 'Number and types of bosses on each floor',
        'faq.a7.l2': 'Location of all chests and their rarity',
        'faq.a7.l3': 'Location of hidden passages and caches',
        'faq.a7.l4': 'Presence of rare mobs and events',
        'faq.a7.l5': 'Shortest path to bosses and valuable chests',
        
        'faq.contact.title': 'Contact Us',
        'faq.contact.name': 'Your Name',
        'faq.contact.email': 'Email',
        'faq.contact.subject': 'Subject',
        'faq.contact.option1': 'Technical Support',
        'faq.contact.option2': 'License Questions',
        'faq.contact.option3': 'Suggest a Feature',
        'faq.contact.option4': 'Report a Bug',
        'faq.contact.option5': 'Other',
        'faq.contact.message': 'Message',
        'faq.contact.submit': 'Submit',
        
        // Team page
        'team.hero.title': 'Our Team',
        'team.hero.subtitle': 'Meet the team behind BEBRATOOL development.',
        'team.section.title': 'Developers',
        'team.member1.role': 'Lead Developer',
        'team.member1.bio': 'Ale.',
        'team.member2.role': 'Gay',
        'team.member2.bio': 'Oink oink.',
        'team.join.title': 'Join Our Team',
        'team.join.description': 'We are always looking for talented developers and designers to expand our team.',
        'team.join.button': 'Contact Us'
    }
};

// Сохранение выбранного языка в localStorage
function saveLanguage(lang) {
    localStorage.setItem('bebratool_language', lang);
}

// Получение сохраненного языка
function getSavedLanguage() {
    return localStorage.getItem('bebratool_language') || 'ru';
}

// Применение переводов на страницу
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Обновляем текущий язык в кнопке
    const currentLangElement = document.getElementById('currentLang');
    if (currentLangElement) {
        currentLangElement.textContent = lang.toUpperCase();
    }
    
    // Обновляем активный класс у опций языка
    document.querySelectorAll('.language-option').forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // Обновляем язык HTML-документа
    document.documentElement.lang = lang;
    
    // Обновляем заголовок страницы на основе языка
    if (lang === 'en') {
        if (document.title.includes('Документация')) {
            document.title = 'BEBRATOOL - Documentation';
        } else {
            document.title = 'BEBRATOOL - Advanced Dungeon Checker';
        }
    } else {
        if (document.title.includes('Documentation')) {
            document.title = 'BEBRATOOL - Документация';
        } else {
            document.title = 'BEBRATOOL - Продвинутый анализатор данжей';
        }
    }
}

// Инициализация функционала мультиязычности
document.addEventListener('DOMContentLoaded', () => {
    // Получаем сохраненный язык
    const currentLang = getSavedLanguage();
    
    // Применяем переводы
    applyTranslations(currentLang);
    
    // Кнопка переключения языка
    const languageBtn = document.getElementById('languageBtn');
    const languageOptions = document.getElementById('languageOptions');
    
    if (languageBtn && languageOptions) {
        languageBtn.addEventListener('click', () => {
            languageOptions.classList.toggle('active');
        });
    }
    
    // Закрытие меню языков при клике вне его
    document.addEventListener('click', (event) => {
        if (languageOptions && !event.target.closest('.language-switcher')) {
            languageOptions.classList.remove('active');
        }
    });
    
    // Обработчики для опций языка
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            saveLanguage(lang);
            applyTranslations(lang);
            if (languageOptions) {
                languageOptions.classList.remove('active');
            }
        });
    });
    
    // Мобильная кнопка переключения языка
    const mobileLangBtn = document.querySelector('.mobile-lang-btn');
    
    if (mobileLangBtn) {
        mobileLangBtn.addEventListener('click', () => {
            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            saveLanguage(newLang);
            applyTranslations(newLang);
        });
    }
}); 