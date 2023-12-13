import { CustomTablesParams } from "./SampleCustomTables";
import { IPanelState } from "@docsvision/webclient/Platform/PanelImpl";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import React from "react";
import { resources } from "@docsvision/webclient/System/Resources";
import { LocationContainerControl } from "@docsvision/webclient/System/LocationContainerControl";
import { LoadingIcon } from "@docsvision/webclient/Helpers/LoadingIcon/LoadingIcon";
import { hideIf, showIf } from "@docsvision/webclient/System/CssUtils";
import { FolderRouteHelpers } from "@docsvision/webclient/Platform/FolderRouteHelpers";
import { FolderCardsDashboardWidgetImpl, FolderCardsDashboardWidgetServices } from "@docsvision/webclient/Platform/FolderCardsDashboardWidgetImpl";
import { IGridOptions } from "@docsvision/webclient/Platform/$GridOptions";
import { cloneServices } from "@docsvision/webclient/System/ServiceUtils";
import { EventHelper } from "@docsvision/webclient/Legacy/Utils";
import { CustomTablesDataLoader } from "./SampleCustomTablesDataLoader";

export interface ICustomTablesState extends CustomTablesParams, IPanelState {
  gridModel: GenModels.CardListViewModel;
  loader: RequestHelper;
  gridContainer: HTMLElement;
  locationName: string;
  opacity: number;
  gridOptions: IGridOptions;
  gridLayoutServices: FolderCardsDashboardWidgetServices;
}

/** @internal */
export class CustomTablesImpl extends FolderCardsDashboardWidgetImpl<CustomTablesParams, ICustomTablesState> {
  private LOCATION_NAME = `${this.props.name}_${this.props.folderId}_${this.props.viewId}_${this.props.searchId}`;
  componentDidMount() {
      this.loadGridModel()
  }
  async loadGridModel() {
    const gridLayoutServices = cloneServices(this.state.services);

    this.dataLoader = new CustomTablesDataLoader(gridLayoutServices, this.state);
    this.state.gridModel = await this.dataLoader.loadLayoutModel(null);
    this.state.counter = this.state.gridModel.gridModel.modelSize;

    this.prepareServices(gridLayoutServices);

    this.forceUpdate(EventHelper.WindowResize);

    EventHelper.WindowResize();
  }

  componentWillUnmount() {
    if (this.state.locationName) {
      this.state.services.layoutManager.destroy(this.state.locationName);
    }
  }

  renderControl() {
    return (
      <div className="custom-tables">
        <div className="custom-tables__header">
          <div className="custom-tables__header-left">
            <div className="custom-tables__header-left-icon"></div>
            <div className="custom-tables__header-left-text">{this.state.header || resources.Dashboard_Recent}</div>
          </div>
          <div className="custom-tables__header-right">
            {!this.state.counterHide && <div className="custom-tables__header-right-counter">{this.state.counter || "0"}</div>}
            {!this.state.buttonHide && (
              <div className="custom-tables__header-right-button">
                <a className="custom-tables__header-right-button-link" href={this.state.buttonUrl}>{this.state.buttonText}</a>
              </div>
            )}
          </div>
        </div>
        {!this.state.tableHide && (
          <>
            <div className="custom-tables__table">
              {this.state.gridModel && (
                <LocationContainerControl
                  locationName={this.LOCATION_NAME}
                  layoutModel={this.state.gridModel.gridLayout}
                  services={this.state.gridLayoutServices}
                  name={this.LOCATION_NAME}
                  async={false}
                />
              )}
            </div>
            <div className={"custom-tables__loading" + showIf(this.state.loader.loading)}>
              <LoadingIcon state={this.state.loader.state} />
              <span className="custom-tables__loading-label">{resources.LoadingText}</span>
            </div>
            <div className={"custom-tables_hide-loader" + hideIf(this.state.loader.loading)}></div>
          </>
        )}
        {this.state.bottomLinkLabel && (
          <a className="custom-tables__bottom-link" href={FolderRouteHelpers.makeFolderUrl(this.state.folderId)}>
            {this.state.bottomLinkLabel}
          </a>
        )}
      </div>
    );
  }
}
