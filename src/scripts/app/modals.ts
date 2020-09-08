import { ModalService } from "../../services/ModalService/ModalService";
import { getElements } from "../tools/DOM";
import { ExampleModal } from "../../modals/example/modalExample";

export const modalsInit = () => {
  const triggers = getElements('[data-modal]')

  if (!triggers.length) {
    return
  }

  const modalService = new ModalService({
    items: {
      example: new ExampleModal(),
    }
  });

  triggers.forEach(element => {
    element.addEventListener('click', () => {
      const { modal, modalData } = element.dataset;

      modalService.open(modal, modalData);
    });
  })
}