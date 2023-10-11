import * as EventHandlers from "./EventHandlers";
import { extensionManager } from "@docsvision/webclient/System/ExtensionManager";
import { ILocalizationsMap } from "@docsvision/webclient/System/ILocalizationsMap";


// Главная входная точка всего расширения
// Данный файл должен импортировать прямо или косвенно все остальные файлы, 
// чтобы rollup смог собрать их все в один бандл.

// Регистрация расширения позволяет корректно установить все
// обработчики событий, сервисы и прочие сущности web-приложения.
extensionManager.registerExtension({
    name: "КЕДО",
    version: "1.0",
    globalEventHandlers: [ EventHandlers ],
    getLocalizations
})

function getLocalizations(): ILocalizationsMap {
    let cultureMap = {};
    cultureMap["ru"] = {
        "DefaultCertificateError": "Не настроен сертификат по умолчанию. Обратитесь к администратору."
    };
    cultureMap["en"] = {
        "DefaultCertificateError": "The default certificate is not configured. Contact your administrator.",
    };
    return cultureMap;
}