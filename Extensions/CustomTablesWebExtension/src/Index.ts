import { extensionManager } from "@docsvision/webclient/System/ExtensionManager";
import { SampleCustomTables } from "./customTables/SampleCustomTables";



extensionManager.registerExtension({
    name: "Web extension CustomTables dashboard",
    version: "1.0",
    controls: [
        { controlTypeName: "SampleCustomTables", constructor: SampleCustomTables }
    ]
})