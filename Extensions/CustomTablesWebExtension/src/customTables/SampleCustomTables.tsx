import { FolderCardsDashboardWidgetParams } from "@docsvision/webclient/Platform/FolderCardsDashboardWidget";
import { Panel } from "@docsvision/webclient/Platform/Panel";
import { CustomTablesImpl, ICustomTablesState } from "./SampleCustomTablesImpl";

export class CustomTablesParams extends FolderCardsDashboardWidgetParams {
  /** Показания счетчика */
  counter?: number;
  /** Управление видимостью счетчика, показывающего количество документов / заданий / заявок в подключенной папке. По умолчанию счетчик скрыт */
  counterHide?: boolean;
  /** Наименование дополнительной кнопки над таблицей */
  buttonText?: string;
  /** Ссылка, по которой будет осуществлен переход после нажатия кнопки */
  buttonUrl?: string;
  /** Управление видимостью дополнительной кнопки над таблицей. По умолчанию кнопка скрыта */
  buttonHide?: boolean;
  /** Наименование ссылки, расположенной под таблицей и ведущей на страницу папки, к которой подключен контрол. */
  bottomLinkLabel?: string = "Ещё";
  /** Управление видимостью таблицы. По умолчанию таблица не скрыта */
  tableHide?: boolean;
  /** Дополнительный класс */
  customCssClasses?: string;
}

export class SampleCustomTables extends Panel<CustomTablesParams, ICustomTablesState>{
  createParams() {
    return new CustomTablesParams();
  }

  protected createImpl() {
    return new CustomTablesImpl(this.props, this.state);
  }
}