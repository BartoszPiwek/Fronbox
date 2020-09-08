import { Component } from "../abstract/component";
import { html, body } from "../tools/element";

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

export class Browser extends Component {
  public scroll: TScroll;
  public dimension: TDimension;

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
}