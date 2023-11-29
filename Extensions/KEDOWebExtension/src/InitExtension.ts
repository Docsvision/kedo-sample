import { IApp } from "@docsvision/webclient/App";
import { $DigitalSignature, AfterSignatureDialogShowEventArgs, BeforeSignatureDialogShowEventArgs } from "@docsvision/webclient/BackOffice/$DigitalSignature";
import { $StaffDirectoryItemsController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { MessageBox } from "@docsvision/webclient/Helpers/MessageBox/MessageBox";
import { $StandardControllers } from "@docsvision/webclient/Legacy/StandardControllers";
import { $ApplicationSettings, $StandardServices } from "@docsvision/webclient/StandardServices";
import { resources } from "@docsvision/webclient/System/Resources";


export function initExtension(app: IApp & $StandardControllers & $StandardServices) {
    const digitalSignature = app.getService($DigitalSignature);

    digitalSignature.beforeSignatureDialogShown.watch((data: BeforeSignatureDialogShowEventArgs) => {
        if (!data.cardInfo || data.cardInfo.kindId !== "028f603f-e8ba-4427-93e6-f31953a00c7f") { return; }
        data.dialogProps.showHidden = true;
    })

    digitalSignature.afterSignatureDialogShown.watch(async (data: AfterSignatureDialogShowEventArgs) => {
        if (!data.cardInfo || data.cardInfo.kindId !== "028f603f-e8ba-4427-93e6-f31953a00c7f") { return; }
        const userId = app.getService($ApplicationSettings).employee.id;
        const groups = await app.getService($StaffDirectoryItemsController).getEmployeeGroups(userId);
        const isKEDOUser = groups.find(el => el.id === '6dc6944c-7dca-4861-b3cd-80a192df45cc');
        if (!isKEDOUser) {
            data.management.setDialogVisible(true);
            return;
        }
        const methods = await data.management.getSignatureMethods();
        const defaultMethod = methods && methods.find(m => m?.isUserDefault);
        if (!defaultMethod) {
            data.management.close();
            MessageBox.ShowInfo(resources.DefaultCertificateError);
        } else {
            data.management.selectSignatureMethod(defaultMethod);
            data.management.accept();
        }
    })
}