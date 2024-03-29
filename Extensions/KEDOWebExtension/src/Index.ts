﻿import * as EventHandlers from "./EventHandlers";
import { extensionManager } from "@docsvision/webclient/System/ExtensionManager";
import { ILocalizationsMap } from "@docsvision/webclient/System/ILocalizationsMap";
import { StandardRoutes } from "@docsvision/webclient/System/StandardRoutes";
import { app } from "@docsvision/webclient/App";
import { HideNavBarDashboardRouteHandler } from "./Helpers";
import { initExtension } from "./InitExtension";


// Главная входная точка всего расширения
// Данный файл должен импортировать прямо или косвенно все остальные файлы, 
// чтобы rollup смог собрать их все в один бандл.

// Регистрация расширения позволяет корректно установить все
// обработчики событий, сервисы и прочие сущности web-приложения.
extensionManager.registerExtension({
    name: "КЭДО",
    version: "1.0",
    globalEventHandlers: [ EventHandlers ],
    initialize,
    getLocalizations
})

function initialize() {
    app.router.addHandler(StandardRoutes.AllRoutes, new HideNavBarDashboardRouteHandler());
    initExtension(app);
}

function getLocalizations(): ILocalizationsMap {
    let cultureMap = {};
    cultureMap["ru"] = {
        "DefaultCertificateError": "Не настроен сертификат по умолчанию, либо рабочее место на настроено на использование подписи. Обратитесь к администратору."
    };
    cultureMap["en"] = {
        "DefaultCertificateError": "The default certificate is not configured, or signature is configured. Contact your administrator.",
    };
    return cultureMap;
}