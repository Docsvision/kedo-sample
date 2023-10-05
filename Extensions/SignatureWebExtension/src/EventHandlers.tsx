import { $DigitalSignature, AfterSignatureDialogShowEventArgs, BeforeSignatureDialogShowEventArgs } from "@docsvision/webclient/BackOffice/$DigitalSignature";
import { $StaffDirectoryItemsController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { MessageBox } from "@docsvision/webclient/Helpers/MessageBox/MessageBox";
import { $ApplicationSettings } from "@docsvision/webclient/StandardServices";
import { Layout } from "@docsvision/webclient/System/Layout";
import { resources } from "@docsvision/webclient/System/Resources";



export async function signature(sender: Layout) {
    const { digitalSignature } = sender.layout.getService<$DigitalSignature>()

    const userId = sender.layout.getService($ApplicationSettings).employee.id
    const groups = await sender.layout.getService($StaffDirectoryItemsController).getEmployeeGroups(userId)

    digitalSignature.beforeSignatureDialogShown.watch((data: BeforeSignatureDialogShowEventArgs) => {
        if (groups.find(el => el.id === '6dc6944c-7dca-4861-b3cd-80a192df45cc')) {
            data.dialogProps.hideLabelSelection = true;
            data.dialogProps.hideSignatureMethodsSetup = true;
            data.dialogProps.showHidden = true;;
        }
    })

    digitalSignature.afterSignatureDialogShown.watch(async (data: AfterSignatureDialogShowEventArgs) => {
        const methods = await data.management.getSignatureMethods();
        if((!methods || methods.length === 0 || !methods.find(m => m?.isUserDefault))) {
            data.management.close();
            MessageBox.ShowInfo(resources.DefaultCertificateError);
        } else {
            data.management.setDialogVisible(true);
        }
    })
}

