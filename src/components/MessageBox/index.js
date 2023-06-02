import MessageComponent from "./index.vue";
import { createComponent } from "../notification/helpers";

export const useMessageBox = (globalProps = {}) => {
  return {
    async open(options) {

      const promise = new Promise((resolve, reject) => {
        const propsData = Object.assign({}, globalProps, options);
        propsData.resolve = resolve;
        propsData.reject = reject;
        createComponent(MessageComponent, propsData, document.body);
      });
      return promise;
    },
    // error(title, message, saveTitle, closeTitle, closed, solved, modalWidth) {
    error(options) {
      return this.open(
        Object.assign(
          {},
          {
            title: options.title,
            message: options.message,
            saveTitle: options.saveTitle,
            closeTitle: options.closeTitle,
            type: options.type,
            closed: options.closed,
            solved: options.solved,
            modalWidth: options.odalWidth,
          }
        )
      );
    },
    success(options) {
      return this.open(
        Object.assign(
          {},
          {
            title: options.title,
            message: options.message,
            saveTitle: options.saveTitle,
            closeTitle: options.closeTitle,
            type: options.type,
            closed: options.closed,
            solved: options.solved,
            modalWidth: options.odalWidth,
          }
        )
      );
    },
    info(title, message, saveTitle, closeTitle, closed, solved, modalWidth, options) {
      return this.open(
        Object.assign(
          {},
          {
            title: title ?? options.title,
            message: message ?? options.message,
            saveTitle: saveTitle ?? options.saveTitle,
            closeTitle: closeTitle ?? options.closeTitle,
            type: type ?? options.type,
            closed: closed ?? options.closed,
            solved: solved ?? options.solved,
            modalWidth: modalWidth ?? options.modalWidth,
          }
        )
      );
    },
    warning(title, message, saveTitle, closeTitle, closed, solved, modalWidth, options) {
      return this.open(
        Object.assign(
          {},
          {
            title: title ?? options.title,
            message: message ?? options.message,
            saveTitle: saveTitle ?? options.saveTitle,
            closeTitle: closeTitle ?? options.closeTitle,
            type: "Warning" ?? options.type,
            closed: closed ?? options.closed,
            solved: solved ?? options.solved,
            modalWidth: modalWidth ?? options.modalWidth,
          }
        )
      );
    },
  };
};
