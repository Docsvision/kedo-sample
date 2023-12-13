import { app } from "@docsvision/webclient/App";
import { $StaffDirectoryItemsController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { Constants } from "@docsvision/webclient/Legacy/Constants";
import { Helpers } from "@docsvision/webclient/Legacy/Utils";
import { $ApplicationSettings } from "@docsvision/webclient/StandardServices";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
import { StandardRoutes } from "@docsvision/webclient/System/StandardRoutes";
import { KEDO_GROUP_ID } from "./Constants";

export class HideNavBarDashboardRouteHandler implements IRouteHandler<any> {
    public name = "HideNavBarDashboardRouteHandler";

    async mountRoute(data: any, routeType: RouteType): Promise<RouteHandleResult> {
        const webFrameNavigationBar = Helpers.FindControlOnLayout(Constants.WebFrameNavigationBar);
        const isKEDOUser = await checkUserKedoStatus();
        if (routeType === StandardRoutes.Dashboard && isKEDOUser) {
            webFrameNavigationBar.params.visibility = false;
        } else {
            webFrameNavigationBar.params.visibility = true;
        }
    }
}

export async function checkUserKedoStatus(): Promise<Boolean> {
    const userId = app.getService($ApplicationSettings).employee.id;
    const groups = await app.getService($StaffDirectoryItemsController).getEmployeeGroups(userId);
    return !!groups.find(el => el.id === KEDO_GROUP_ID);
}