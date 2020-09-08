import { Component } from "../../scripts/abstract/component";
import { getElement } from "../../scripts/tools/DOM";
import { scrollPosition } from "../../scripts/tools/scrollPosition";

interface ISticky {
  /** Sticky attribute `data-sticky` value */
  id?: string;
  /** Sticky element */
  element?: HTMLElement;
  /** Callback function when component change state */
  onChange?: (value: boolean) => void;
}

export class Sticky extends Component {
  private element: HTMLElement;
  private ghost: HTMLElement;
  private offsetTop: number;

  public id: string;
  public isActive: boolean;

  /** Create sticky behavior */
  constructor(param: ISticky) {
    super(param);
  }

  public onInit() {
    if (!this.element) {
      this.element = getElement(`[data-sticky="${this.id}"]`);
    }

    this.ghost = getElement(`[data-sticky-ghost]`, this.element);

    this.onResize();
    this.onScroll();
  }

  public onResize() {
    this.offsetTop = this.element.offsetTop;

    const height = this.element.offsetHeight;
    this.ghost.style.height = `${height}px`;
  }

  public onScroll() {
    if (scrollPosition() > this.offsetTop) {
      this.setActive(true);
    } else {
      this.setActive(false);
    }
  }

  public setActive(value: boolean) {
    if (value === this.isActive) {
      return;
    }

    if (value) {
      this.element.classList.add(`isSticky`);
    } else {
      this.element.classList.remove(`isSticky`);
    }

    if (this.onChange) {
      this.onChange(value);
    }

    this.isActive = value;
  }

  public onChange?(value: boolean): void;
}