import { extensionManager } from "@docsvision/webclient/System/ExtensionManager";
import { PersonalAccountFolderDashboardWidget } from "./customTables/PersonalAccountFolderDashboardWidget";



extensionManager.registerExtension({
    name: "Personal account dashboard",
    version: "1.0",
    controls: [
        { controlTypeName: "PersonalAccountFolderDashboardWidget", constructor: PersonalAccountFolderDashboardWidget }
    ]
})