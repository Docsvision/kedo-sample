﻿import { $DigitalSignature, AfterSignatureDialogShowEventArgs, BeforeSignatureDialogShowEventArgs } from "@docsvision/webclient/BackOffice/$DigitalSignature";
import { $EmployeeController, $StaffDirectoryItemsController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { MessageBox } from "@docsvision/webclient/Helpers/MessageBox/MessageBox";
import { Label } from "@docsvision/webclient/Platform/Label";
import { TextBox } from "@docsvision/webclient/Platform/TextBox";
import { $ApplicationSettings } from "@docsvision/webclient/StandardServices";
import { Layout } from "@docsvision/webclient/System/Layout";
import { resources } from "@docsvision/webclient/System/Resources";



export async function signature(sender: Layout) {
    const { digitalSignature } = sender.layout.getService<$DigitalSignature>()

    const userId = sender.layout.getService($ApplicationSettings).employee.id
    const groups = await sender.layout.getService($StaffDirectoryItemsController).getEmployeeGroups(userId)
    const isKEDOUser = groups.find(el => el.id === '6dc6944c-7dca-4861-b3cd-80a192df45cc');

    digitalSignature.beforeSignatureDialogShown.watch((data: BeforeSignatureDialogShowEventArgs) => {
        if (!isKEDOUser) { return; }
        data.dialogProps.hideLabelSelection = true;
        data.dialogProps.hideSignatureMethodsSetup = true;
        data.dialogProps.showHidden = true;
    })

    digitalSignature.afterSignatureDialogShown.watch(async (data: AfterSignatureDialogShowEventArgs) => {
        if (!isKEDOUser) { return; }
        const methods = await data.management.getSignatureMethods();
        const defaultMethod = methods && methods.find(m => m?.isUserDefault);
        if(!defaultMethod) {
            data.management.close();
            MessageBox.ShowInfo(resources.DefaultCertificateError);
        } else {
            data.management.selectSignatureMethod(defaultMethod);
            data.management.accept();
        }
    })
}

export async function insertGreeting(sender: Layout) {
    const textBox3=sender.layout.controls.get<TextBox>("employeeName")
    const getEmployee= await sender.layout.getService($EmployeeController).getEmployee(textBox3.params.value)
    const gooddaylabel2=sender.layout.controls.get<Label>("gooddaylabel2")
    gooddaylabel2.params.text=getEmployee.firstName
}

