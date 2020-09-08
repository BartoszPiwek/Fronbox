import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { Component } from '../../scripts/abstract/component';
import { body } from '../../scripts/tools/element';
import { getFileContent } from '../../utilities/getFileContent';
import { getElementID } from '../../scripts/tools/DOM';
import { IModalElement, AbstractModalElement } from './AbstractModalElement';

export interface IModalService {
  items: {
    [key: string]: AbstractModalElement;
  }
}

export type TModalTemplate = {
  [key: string]: string
}

export interface IModalActive extends IModalElement {
  data?: any;
}

export class ModalService extends Component {
  private cache: {
    [key: string]: string;
  };
  private items: IModalElement[];
  private element: HTMLElement;
  private content: HTMLElement;

  private isInit: boolean;
  private isWorking: boolean;

  private currentModal: IModalActive;

  constructor(params: IModalService) {
    super(params)
  }

  protected afterInit() {
    this.cache = {};
  }

  private async init() {
    const template = await getFileContent(`/modals/template.html`)
    body.insertAdjacentHTML('beforeend', template);

    this.element = getElementID('modal');
    this.content = getElementID('modal-content');

    const overlay = getElementID('modal-service-overlay');
    if (overlay) {
      overlay.addEventListener('click', () => {
        this.close();
      })
    }

    const closeButton = getElementID('modal-service-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        this.close();
      });
    }

    this.isInit = true;

    // Transition fix
    return new Promise(r => setTimeout(r, 100));
  }

  public async open(ID: string, _data?: string) {
    if (this.isWorking) {
      return;
    }
    this.isWorking = true;

    let data: TModalTemplate;
    if (_data) {
      data = JSON.parse(_data);
    }

    disablePageScroll();

    !this.isInit && await this.init();

    this.element.classList.add('isLoading', 'isVisible');

    if (this.currentModal) {
      if (this.currentModal.id === ID) {
        return;
      }

      this.close(false);
    }

    if (!this.cache[ID]) {
      this.cache[ID] = await getFileContent(`/modals/${ID}.html`);
    }

    this.currentModal = this.items[ID];

    this.currentModal.template = this.cache[ID];
    this.currentModal.data = data;

    // Parse data with template
    if (this.currentModal.onParse) {
      const parseData: TModalTemplate = this.currentModal.onParse();

      this.currentModal.template = `${this.parseTemplate(this.currentModal.template, parseData)}`;
    }

    if (this.currentModal.onInit) {
      this.currentModal.onInit();
    }

    this.content.insertAdjacentHTML('beforeend', `<div>${this.currentModal.template}`);

    this.element.classList.add('isOpen');
    this.element.classList.remove('isLoading');

    this.isWorking = false;
  }

  public parseTemplate(html: string, data: TModalTemplate): string {
    let output: string = html;

    if (!data) {
      return html;
    }

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const element = data[key];

        output = output.replace('${' + key + '}', element);
      }
    }

    return output;
  }

  public close(triggerScroll = true) {
    if (this.isWorking) {
      return;
    }

    this.isWorking = true;

    this.element.classList.remove('isVisible');

    if (this.currentModal.onDestroy) {
      this.currentModal.onDestroy();
    }

    setTimeout(() => {
      this.content.firstElementChild.remove();

      this.currentModal = null;

      this.element.classList.remove('isOpen', 'isLoading');

      if (triggerScroll) {
        enablePageScroll();
        this.isWorking = false;
      }
    }, 600);
  }
}
