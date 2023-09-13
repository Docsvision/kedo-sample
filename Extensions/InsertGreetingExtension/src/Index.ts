import * as InsertGreeting from "./InsertGreeting";
import { extensionManager } from "@docsvision/webclient/System/ExtensionManager";



extensionManager.registerExtension({
    name: "Insert greeting extension",
    version: "5.5.17",
    globalEventHandlers: [InsertGreeting ]
})