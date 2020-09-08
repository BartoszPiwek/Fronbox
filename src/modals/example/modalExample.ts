import { AbstractModalElement } from "../../services/ModalService/AbstractModalElement";

interface IExampleModal {
  title: string;
  content: string;
}

export class ExampleModal extends AbstractModalElement {
  public id = 'example';

  constructor() {
    super();
  }

  public onParse(): IExampleModal {
    const { title, content } = this.data;

    return {
      title,
      content
    }
  }

  public onInit() {
    console.log('onInit');
  }

  public onDestroy() {
    console.log('onDestroy');
  }
}