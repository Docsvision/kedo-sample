import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { FolderCardsDashboardWidgetDataLoader } from "@docsvision/webclient/Platform/FolderCardsDashboardWidgetDataLoader";
import { FolderDataContext, FolderDataContextParams } from "@docsvision/webclient/Platform/FolderDataContext";

export class PersonalAccountFolderDashboardWidgetDataLoader extends FolderCardsDashboardWidgetDataLoader {

    public async loadLayoutModel(requestData: GenModels.CardListRequestModel, isMobile: boolean = false): Promise<GenModels.CardListViewModel> {
      const preparedRequest = this.prepareRequest();
      const model = await this.services.gridController.getCardList(preparedRequest);
      const dataContextControl = this.findControl(model.gridLayout.layoutModel, FolderDataContext.ControlTypeName);
      if (dataContextControl) {
        model.gridModel = (dataContextControl.properties as FolderDataContextParams).gridViewModel
      }
      return model;
    }
  
    findControl(parent: GenModels.ControlModel, controlName: string): GenModels.ControlModel {
      if (parent.controlTypeName === controlName) {
        return parent;
      } else if (parent.children) {
        for (const child of parent.children) {
          const found = this.findControl(child, controlName);
          if (found) {
            return found;
          }
        }
      }
      return null;
    }
  }