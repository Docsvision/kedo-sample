import { Constants } from "@docsvision/webclient/Legacy/Constants";
import { Helpers } from "@docsvision/webclient/Legacy/Utils";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
import { StandardRoutes } from "@docsvision/webclient/System/StandardRoutes";

export class HideNavBarDashboardRouteHandler implements IRouteHandler<any> {
    public name = "HideNavBarDashboardRouteHandler";

    async mountRoute(data: any, routeType: RouteType): Promise<RouteHandleResult> {
        const webFrameNavigationBar = Helpers.FindControlOnLayout(Constants.WebFrameNavigationBar);

        if (routeType === StandardRoutes.Dashboard) {
            webFrameNavigationBar.params.visibility = false;
        } else {
            webFrameNavigationBar.params.visibility = true;
        }
    }
}