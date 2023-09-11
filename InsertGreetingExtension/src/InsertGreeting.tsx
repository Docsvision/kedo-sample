import { $EmployeeController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { Label } from "@docsvision/webclient/Platform/Label";
import { TextBox } from "@docsvision/webclient/Platform/TextBox";
import { Layout } from "@docsvision/webclient/System/Layout";


export async function insertGreeting(sender: Layout) {
    const textBox3=sender.layout.controls.get<TextBox>("textBox3")
    const getEmployee= await sender.layout.getService($EmployeeController).getEmployee(textBox3.params.value)
    const gooddaylabel2=sender.layout.controls.get<Label>("gooddaylabel2")
    gooddaylabel2.params.text=getEmployee.firstName
}

