import { $EmployeeController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { Label } from "@docsvision/webclient/Platform/Label";
import { TextBox } from "@docsvision/webclient/Platform/TextBox";
import { Layout } from "@docsvision/webclient/System/Layout";


export async function insertGreeting(sender: Layout) {
    const employeeNameTextBox=sender.layout.controls.get<TextBox>("employeeName")
    const getEmployee= await sender.layout.getService($EmployeeController).getEmployee(employeeNameTextBox.params.value)
    const employeeNameLabel=sender.layout.controls.get<Label>("employeeNameLabel")
    employeeNameLabel.params.text=getEmployee.firstName
}

