import { FolderCardsDashboardWidgetParams } from "@docsvision/webclient/Platform/FolderCardsDashboardWidget";
import { Panel } from "@docsvision/webclient/Platform/Panel";
import { CustomTablesImpl, ICustomTablesState } from "./SampleCustomTablesImpl";
import { rw } from "@docsvision/webclient/System/Readwrite";

export class CustomTablesParams extends FolderCardsDashboardWidgetParams {
  /** Показания счетчика */
  @rw counter?: number;
  /** Управление видимостью счетчика, показывающего количество документов / заданий / заявок в подключенной папке. По умолчанию счетчик скрыт */
  @rw counterHide?: boolean;
  /** Наименование дополнительной кнопки над таблицей */
  @rw buttonText?: string;
  /** Ссылка, по которой будет осуществлен переход после нажатия кнопки */
  @rw buttonUrl?: string;
  /** Управление видимостью дополнительной кнопки над таблицей. По умолчанию кнопка скрыта */
  @rw buttonHide?: boolean;
  /** Наименование ссылки, расположенной под таблицей и ведущей на страницу папки, к которой подключен контрол. */
  @rw bottomLinkLabel?: string = "Ещё";
  /** Управление видимостью таблицы. По умолчанию таблица не скрыта */
  @rw tableHide?: boolean;
  /** Дополнительный класс */
  @rw customCssClasses?: string;
  /** Показывать Ленту вместо Грида */
  @rw showListByDefault?: boolean = true;
}

export class SampleCustomTables extends Panel<CustomTablesParams, ICustomTablesState>{
  createParams() {
    return new CustomTablesParams();
  }

  protected createImpl() {
    return new CustomTablesImpl(this.props, this.state);
  }
}