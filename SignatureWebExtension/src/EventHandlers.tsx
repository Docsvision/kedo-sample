import { $DigitalSignature, BeforeSignatureDialogShowEventArgs } from "@docsvision/webclient/BackOffice/$DigitalSignature";
import { $StaffDirectoryItemsController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { $ApplicationSettings } from "@docsvision/webclient/StandardServices";
import { Layout } from "@docsvision/webclient/System/Layout";



export async function signature(sender: Layout) {

    const { digitalSignature } = sender.layout.getService<$DigitalSignature>()

    const userId = sender.layout.getService($ApplicationSettings).employee.id
    const groups = await sender.layout.getService($StaffDirectoryItemsController).getEmployeeGroups(userId)

    digitalSignature.beforeSignatureDialogShown.watch((data: BeforeSignatureDialogShowEventArgs) => {


        if (groups.find(el => el.id === '6dc6944c-7dca-4861-b3cd-80a192df45cc')) {
            data.dialogProps.hideLabelSelection = true
            data.dialogProps.hideSignatureMethodsSetup = true
        }
    })
}

