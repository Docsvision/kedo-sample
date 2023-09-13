import { extensionManager } from "@docsvision/webclient/System/ExtensionManager";
import { SampleCustomTables } from "./customTables/SampleCustomTables";



extensionManager.registerExtension({
    name: "Web extension CustomTables dashboard",
    version: "5.5.17",
    controls: [
        { controlTypeName: "SampleCustomTables", constructor: SampleCustomTables }
    ]
})