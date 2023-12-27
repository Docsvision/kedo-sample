import { IApp } from "@docsvision/webclient/App";
import { $DigitalSignature, AfterSignatureDialogShowEventArgs, BeforeSignatureDialogShowEventArgs } from "@docsvision/webclient/BackOffice/$DigitalSignature";
import { MessageBox } from "@docsvision/webclient/Helpers/MessageBox/MessageBox";
import { $StandardControllers } from "@docsvision/webclient/Legacy/StandardControllers";
import { $StandardServices } from "@docsvision/webclient/StandardServices";
import { resources } from "@docsvision/webclient/System/Resources";
import { KEDO_SIGN_CARD_KIND_ID } from "./Constants";
import { checkUserKedoStatus } from "./Helpers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";


export function initExtension(app: IApp & $StandardControllers & $StandardServices) {
    const digitalSignature = app.getService($DigitalSignature);

    digitalSignature.beforeSignatureDialogShown.watch((data: BeforeSignatureDialogShowEventArgs) => {
        if (!data.cardInfo || data.cardInfo.kindId !== KEDO_SIGN_CARD_KIND_ID) { return; }
        data.dialogProps.showHidden = true;
    })

    digitalSignature.afterSignatureDialogShown.watch(async (data: AfterSignatureDialogShowEventArgs) => {
        if (!data.cardInfo || data.cardInfo.kindId !== KEDO_SIGN_CARD_KIND_ID) { return; }
        const isKEDOUser = await checkUserKedoStatus();
        if (!isKEDOUser) {
            data.management.setDialogVisible(true);
            return;
        }
        const methods = await data.management.getSignatureMethods();
        const defaultMethod = methods && methods.find(m => m?.isUserDefault);
        if (!defaultMethod) {
            data.management.close();
            MessageBox.ShowInfo(resources.DefaultCertificateError);
        } else if (defaultMethod.certificateInfo?.source == GenModels.SignatureMethodSources.Unknown) {
            data.management.close();
        } else {
            data.management.selectSignatureMethod(defaultMethod);
            data.management.accept();
        }
    })
}