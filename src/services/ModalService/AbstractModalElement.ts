import { TModalTemplate } from "./ModalService";

export interface IModalElement {
  id?: string;
  template?: string;

  onInit?: () => void;
  onDestroy?: () => void;
  onParse?: () => TModalTemplate;

  parse?: (data: any) => void;
}

export abstract class AbstractModalElement {
  public data: any;
  public template: string;

  protected onInit?(): void;
  protected onParse?(): void;
  protected onDestroy?(): void;
}