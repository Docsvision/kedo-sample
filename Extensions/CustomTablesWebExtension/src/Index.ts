import { extensionManager } from "@docsvision/webclient/System/ExtensionManager";
import { SampleCustomTables } from "./customTables/SampleCustomTables";



extensionManager.registerExtension({
    name: "CustomTables dashboard web-extension",
    version: "1.0",
    controls: [
        { controlTypeName: "SampleCustomTables", constructor: SampleCustomTables }
    ]
})