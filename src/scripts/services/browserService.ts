import { Component } from "../abstract/component";
import { html, body } from "../tools/element";
import { easeInOutQuad } from "../tools/transition";

type TScroll = {
  top: number;
  bottom: number;
  center: number;
  speed: number;
  direction: string;
}

type TDimension = {
  width: number;
  height: number;
  documentHeight: number;
}

type TScrollTo = {
  element: HTMLElement;
  time?: number;
  offset?: number;
  onDone?: () => void;
  onInterrupt?: () => void;
}

export class BrowserService extends Component {
  public scroll: TScroll;
  public dimension: TDimension;

  public get scrollPosition(): number {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  constructor() {
    super()
  }

  protected onInit() {
    this.onResize();
  }

  protected onResize() {
    this.dimension = {
      width: window.innerWidth,
      height: window.innerHeight,
      documentHeight: Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )
    }
  }

  protected onScroll() {
    const { height } = this.dimension;

    /* Check last center */
    let lastTop = 0;
    if (this.scroll) {
      lastTop = this.scroll.top;
    }

    /* Prepare variables */
    let direction: string;
    let top = window.pageYOffset || html.scrollTop;

    /* Check scroll direction */
    if (top < lastTop) {
      direction = "up";
    } else {
      direction = "down";
    }

    this.scroll = {
      top,
      bottom: top + height,
      center: top + (height / 2),
      speed: Math.abs(lastTop - top),
      direction
    };
  }

  public scrollTo(params: TScrollTo) {
    let scrollEvent: EventListenerOrEventListenerObject;
    let active: boolean = true;

    const { offset = 0, element, time = 2000, onDone, onInterrupt } = params;

    const change = element.getBoundingClientRect().top - offset;

    let currentTime = 0;

    document.addEventListener('wheel', scrollEvent = () => {
      document.removeEventListener('wheel', scrollEvent);
      active = false;
    });

    const animateScroll = () => {
      currentTime += 20;

      const val = easeInOutQuad(currentTime, this.scrollPosition, change, time);
      window.scrollTo({ top: val });

      if (active && currentTime < time) {
        setTimeout(animateScroll, 20);
      } else {
        if (onDone) {
          onDone();
        }
      }
    };
    animateScroll();
  }
}