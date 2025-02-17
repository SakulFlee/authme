import { localeEN } from "@utils/language/en"

export const localeRU: typeof localeEN = {
	common: {
		confirm: "Подтвердить",
		continue: "Продолжить",
		cancel: "Выйти",
		close: "Закрыть",
		copy: "Скопировать",
		copied: "Скопировано",
		moreOptions: "Больше опций",
		name: "Название",
		description: "Описание",
		edit: "Изменить",
		delete: "Удалить",
	},

	menu: {
		codes: "Коды",
		import: "Импорт",
		export: "Экспорт",
		edit: "Изменить",
		settings: "Настройки",
		show: "Показать Authme",
		exit: "Выйти из Authme",
	},

	landing: {
		welcome: "Добро пожаловать!",
		gettingStarted: "Давайте начнем",
		gettingStartedText: "Выберите как вы хотите использовать Authme.",
		passwordAuth: "Парольная аутентификация",
		passwordAuthText: "Вы будете вводить пароль каждый раз при запуске Authme.",
		noAuth: "Без аутентификации",
		noAuthText: "Если вы не хотите вводить пароль каждый раз при запуске Authme.",
		hardwareAuth: "Аутентификация",
		hardwareAuthText: "Подтверждайте важные действия при помощи Windows Hello, Touch ID или любого WebAuthn-совместимого ключа.",
		createPass: "Создать пароль",
		createPassText: "Создайте устойчивый пароль, чтобы разблокировать ваши коды.",
		password: "Пароль",
		confirmPassword: "Подтвердите пароль",
		chooseDifferent: "Выбрать другой способ аутентификации",
		chooseDifferentText: "Вернитесь на предыдущую страницу и выберите другой способ аутентификации.",
		goBack: "Вернитесь назад",
		dialog: {
			passwordsNotMatch: "Пароль не совпадает. \n\nПопробуйте снова!",
			passwordMinLength: "Минимальная длина пароля 8 символов. \n\nПопробуйте снова!",
			passwordMaxLength: "Максимальная длина пароля 64 символа. \n\nПопробуйте снова!",
			commonPassword: "Этот пароль в ТОП-1000 самых распространённых паролей. Пожалуйста, выберите более безопасный пароль!",
		},
	},

	confirm: {
		welcomeBack: "Привет снова!",
		confirmPassword: "Подтвердите пароль",
		confirmPasswordText: "Пожалуйста введите пароль для продолжения.",
		password: "Пароль",
		forgotPassword: "Забыли пароль?",
		forgotPasswordText: "Ваши коды защищены паролем. Если вы забудете ваш пароль, вы не сможете получить доступ к вашим кодам.",
		dialog: {
			wrongPassword: "Неверный пароль! \n\nПопробуйте снова!",
		},
	},

	codes: {
		importCodes: "Импортировать ваши коды двухфакторной аутентификации",
		importCodesText: "Импортируйте существующие коды 2FA на странице Импорт.",
		importCodesButton: "Импортировать коды",
		noSearchResultsFound: "Результаты поиска не найдены",
		noSearchResultsFoundText: "Не найдено результатов поиска по запросу",
		dialog: {
			noSaveFileFound: "Файл сохранения не найден. \n\nПерейдите на страницу кодов или импорта и импортируйте свои коды!",
			codesImported: "Коды импортированы. \n\nВы можете изменить свои коды на странице Изменения.",
		},
	},

	import: {
		supportedTypes: "Поддерживаемые типы двухфакторной аутентификации",
		totpQRCode: "TOTP",
		totpQRCodeText: "TOTP QR-код - самый распространённый тип, если вы настраивайте двухфакторную аутентификацию. Состоит из 6 цифр, которые меняются каждые 30 секунд.",
		instructions: "Инструкции",
		googleAuthQRCode: "Google Authenticator",
		googleAuthQRCodeText: "Если вы используете Google Authenticator вы можете экспортировать все свои коды и импортировать их в Authme.",
		chooseImportMethod: "Выберите метод импорта",
		importFromImage: "Импорт из изображения",
		importFromImageText: "Выберите изображение, содержащее совместимый QR-код.",
		chooseImageButton: "Выбрать изображение",
		enterSecretManually: "Ввести ключ",
		enterSecretManuallyText: "Введите TOTP-ключ и имя.",
		enterSecretManuallyButton: "Ввести ключ",
		screenCapture: "Запись экрана",
		screenCaptureText: "Запишите совместимый QR-код с вашего экрана.",
		screenCaptureButton: "Записать экран",
		webcam: "Веб-камера",
		webcamText: "Используйте вашу веб-камеру, чтобы сосканировать совместимый QR-код.",
		webcamButton: "Использовать веб-камеру",
		// authme
		authme: "Authme",
		authmeText: "Импортировать ваши коды из Authme.",
		authmeFile: "Файл Authme",
		authmeFileText: "Импортируйте все коды из существующего файла импорта Authme, который вы экспортировали из Authme.",
		authmeFileButton: "Выбрать файл",
		// 2FAS
		twoFasAuth: "2FAS Authenticator",
		twoFasAuthText: "Импортировать все коды из файла резервной копии приложения 2FAS Authenticator.",
		twoFasFile: "2FAS файл резервной копии (без пароля)",
		twoFasFileText: "Импортируйте все коды из существующего файла резеврной копии 2FAS без пароля.",
		twoFasFileButton: "Выбрать файл",
		// aegis
		aegisAuth: "Aegis Authenticator",
		aegisAuthText: "Импортировать все коды из файла хранилища Aegis.",
		aegisFile: "Aegis файл хранилища (без пароля)",
		aegisFileText: "Импортируйте все коды из существующего файла хранилища Aegis без пароля.",
		aegisFileButton: "Выбрать файл",
		// html dialogs
		captureScreenTitle: "Импортировать запись экрана",
		captureScreenWaiting: "Ожижание QR-кода...",
		manualEntry: "Настроить ключ",
		manualEntryText: "Пожалуйста введите название и ключ двухфакторной аутентификации.",
		manualEntryName: "название (Обязательно)",
		manualEntrySecret: "Ключ (Обязательно)",
		manualEntryDescription: "Описание",
		// tutorial
		googleAuthTutorial: ["Экспортируйте коды 2FA из приложения Google Authenticator: Нажмите на гамбургер-меню в левом верхнем углу экрана: Передача аккаунтов > Экспорт аккаунтов", "Сохраните миграционный QR-код(ы) с помощью скриншота или сделайте снимок другим телефоном, если вы на Android. Перенесите эти снимки на компьютер", "В Authme перейдите на страницу Импорт: Боковая панель > Импорт", "Нажмите кнопку Выбрать изображения и выберите изображение (изображения), которое вы перенесли с телефона."],
		totpTutorial: ["Перейдите на сайт, где вы хотите установить 2FA", "Сделайте скриншот (сочетание клавиш Windows + Shift + S в Windows, Cmd + Shift + 3 в macOS) QR-кода и сохраните изображение", "В Authme перейдите на страницу Импорт: Боковая панель > Импорт", "Нажмите кнопку Выбрать изображения и выберите картинку"],
		authmeTutorial: ["В Authme перейдите на страницу Экспорт и выберите Экспорт файла Authme", "Вы можете импортировать этот файл в Authme на странице Импорт"],
		aegisTutorial: ["Нажмите на гамбургер-меню в правом верхнем углу экрана: Настройки > Импорт и экспорт > Экспорт", "Выберите формат Aegis JSON, снимите флажок 'Шифрование' и экспортируйте хранилище", "Перенесите файл на компьютер и импортируйте его в Authme"],
		twoFasTutorial: ["Нажмите на настройки на панели навигации: 2FAS Backup > Экспорт в файл", "Установите флажок экспорта файла без пароля и нажмите экспорт", "Перенесите файл на компьютер и импортируйте его в Authme"],
	},

	export: {
		exportCodes: "Экспортировать коды",
		exportAuthmeFile: "Экспортировать файл Authme",
		exportAuthmeFileText: "Идеально подходит для импорта в Authme или для других приложений Authme.",
		exportHTMlFile: "Экспорт HTML-файла",
		exportHTMlFileText: "Идеально подходит для сканирования QR-кодов или для обеспечения безопасности.",
		exportFileButton: "Экспортировать файл",
	},

	edit: {
		editCodes: "Изменить коды",
		dialog: {
			saveChanges: "Вы хотите сохранить изменения?",
			deleteCode: "Вы уверены, что хотите удалить этот код?",
		},
	},

	settings: {
		general: "Общие",
		launchOnStartup: "Запуск при старте системы",
		launchOnStartupText: "Запускать Authme автоматически при запуске системы в системном трее.",
		minimizeToTray: "Свернуть в трей",
		minimizeToTrayText: "При закрытии приложения Authme не выходит из системы. Вы можете открыть Authme из системного трея.",
		optionalAnalytics: "Необязательные аналитические данные",
		optionalAnalyticsText: "Отправляемая информация полностью анонимна. Отправляемые данные включают в себя версию Authme и информацию о вашем компьютере.",
		windowCapture: "Запись окна",
		windowCaptureText: "По умолчанию Authme не может быть захвачен внешними программами. Если вы включите эту функцию, она будет действовать до тех пор, пока вы не перезапустите Authme.",
		clearData: "Удалить данные",
		clearDataText: "Удалить пароль, коды двухфакторной аутентификации и все остальные настройки. Будьте осторожны, это действие нельзя отменить!",
		clearDataButton: "Удалить данные",
		codes: "Коды",
		codesDescription: "Описание кодов",
		codesDescriptionText: "Появится описание кодов 2FA. Вы можете скопировать его после нажатия.",
		blurCodes: "Размыть коды",
		blurCodesText: "Размытие сохраняет ваши код. You can still copy the codes or hover over the codes to show them.",
		codesLayout: "Макет кодов",
		codesLayoutText: "Вы можете выбрать удобный для вас макет. Сетка отображает больше элементов и адаптируется к размеру экрана.",
		sortCodes: "Сортировать коды",
		sortCodesText: "Вы можете выбрать способ сортировки кодов. По умолчанию коды сортируются по порядку импорта.",
		shortcuts: "Краткое описание",
		shortcutsEditButton: "Изменить",
		shortcutsResetButton: "Перезагрузить",
		shortcutsDeleteButton: "Удалить",
		about: "О нас",
		feedback: "Обратная связь",
		feedbackText: "Спасибо за обратную связь! Пожалуйста, сообщите о проблемах или пожеланиях по функциям на GitHub или по электронной почте (authme@levminer.com).",
		logs: "Логи",
		logsText: "Вы можете посмотреть логи для дебаггинга.",
		showLogsButton: "Показать логи",
		aboutAuthme: "Об Authme",
		aboutAuthmeText: "Информация о вашей сборке Authme и вашем компьютере.",
	},
}
