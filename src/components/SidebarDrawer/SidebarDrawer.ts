import { getElement } from '../../scripts/tools/DOM';
import { Component } from '../../scripts/abstract/component';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

interface ISidebarDrawer {
  /** SidebarDrawer attribute `data-burger` value */
  id: string;
  /** Callback function when component change state */
  onChange?: (value: boolean) => void;
}

export class SidebarDrawer extends Component implements ISidebarDrawer {
  private clickEvent: EventListenerOrEventListenerObject;
  private element: HTMLButtonElement;
  private overlay: HTMLElement;

  public id: string;
  public isActive: boolean;

  /** Create toggleable burger button */
  constructor(param: ISidebarDrawer) {
    super(param);
  }

  protected onInit() {
    this.element = getElement(`[data-sidebar-drawer="${this.id}"]`) as HTMLButtonElement;
    this.overlay = getElement(`[data-sidebar-drawer-overlay]`, this.element);

    if (!this.element) {
      return;
    }

    this.clickEvent = (e) => {
      this._setActive(!this.isActive, true);
    }

    this.overlay.addEventListener('click', this.clickEvent);
  }

  protected onDestroy() {
    this.overlay.removeEventListener('click', this.clickEvent);
  }

  private _setActive(value: boolean, propagate: boolean = false) {
    if (value === this.isActive) {
      return;
    }

    if (value) {
      this.element.classList.add('isActive');
      disablePageScroll();
    } else {
      this.element.classList.remove('isActive')
      enablePageScroll();
    }

    if (propagate && this.onChange) {
      this.onChange(value);
    }

    this.isActive = value;
  }

  public setActive(value: boolean) {
    this._setActive(value);
  }

  public onChange?(value: boolean): void;
}
