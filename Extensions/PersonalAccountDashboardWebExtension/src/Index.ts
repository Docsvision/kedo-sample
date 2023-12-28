import { extensionManager } from "@docsvision/webclient/System/ExtensionManager";
import { PersonalAccountFolderDashboardWidget } from "./PersonalAccountFolderDashboard/PersonalAccountFolderDashboardWidget";



extensionManager.registerExtension({
    name: "Personal account dashboard",
    version: "1.0",
    controls: [
        { controlTypeName: "PersonalAccountFolderDashboardWidget", constructor: PersonalAccountFolderDashboardWidget }
    ]
})