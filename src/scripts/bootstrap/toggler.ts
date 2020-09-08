import { getElements } from '../tools/DOM';
import { Component } from '../abstract/component';

interface IToggler {
  /** Get elements with attribute `data-toggler` === `id` value */
  id: string;
  /** Toggle class name, default `isActive` */
  classNameActive?: string;
  /** Callback function when component change state */
  onChange?: (value: boolean) => void;
}

export class Toggler extends Component implements IToggler {
  private clickEvent: EventListenerOrEventListenerObject;
  private elements: NodeListOf<HTMLButtonElement>;

  public id: string;
  public isActive: boolean;
  public classNameActive: string;

  /** Add click behavior to element */
  constructor(param: IToggler) {
    super(param);
  }

  protected afterInit() {
    this.classNameActive = 'isActive';
  }

  protected onInit() {
    this.elements = getElements(`[data-toggler="${this.id}"]`) as NodeListOf<HTMLButtonElement>;

    if (!this.elements.length) {
      return;
    }

    this.clickEvent = (e) => {
      this.setActive(!this.isActive);
    }

    this.elements.forEach(element => {
      element.addEventListener('click', this.clickEvent);
    });
  }

  protected onDestroy() {
    this.elements.forEach(element => {
      element.addEventListener('click', this.clickEvent);
    })
  }

  public setActive(value: boolean) {
    if (value === this.isActive) {
      return;
    }

    this.elements.forEach(element => {
      if (value) {
        element.classList.add(this.classNameActive);
      } else {
        element.classList.remove(this.classNameActive)
      }
    })

    if (this.onChange) {
      this.onChange(value);
    }

    this.isActive = value;
  }

  public onChange?(value: boolean): void;
}