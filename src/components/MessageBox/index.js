import MessageComponent from "./index.vue";
import { createComponent } from "../notification/helpers";

export const useMessageBox = (globalProps = {}) => {
  return {
    async open(options) {
      let message = null;
      if (typeof options === "string") message = options;
      const defaultProps = {
        message,
      };

      const promise = new Promise((resolve, reject) => {
        const propsData = Object.assign({}, defaultProps, globalProps, options);
        propsData.resolve = resolve;
        propsData.reject = reject;
        createComponent(MessageComponent, propsData, document.body);
      });
      return promise;
    },
    error(
      options,
      title,
      message,
      saveTitle,
      closeTitle,
      closed,
      solved,
      modalWidth
    ) {
      return this.open(
        Object.assign(
          {},
          {
            title: title ?? options.title,
            message: message ? message : options.message,
            saveTitle: saveTitle ?? options.saveTitle,
            closeTitle: closeTitle ?? options.closeTitle,
            type: "Error" ?? options.type,
            closed: closed ?? options.closed,
            solved: solved ?? options.solved,
            modalWidth: modalWidth ?? options.modalWidth,
          }
        )
      );
    },
    success(
      options,
      title,
      message,
      saveTitle,
      closeTitle,
      closed,
      solved,
      modalWidth
    ) {
      return this.open(
        Object.assign(
          {},
          {
            title: title ?? options.title,
            message: message ? message : options.message,
            saveTitle: saveTitle ?? options.saveTitle,
            closeTitle: closeTitle ?? options.closeTitle,
            type: "Success" ?? options.type,
            closed: closed ?? options.closed,
            solved: solved ?? options.solved,
            modalWidth: modalWidth ?? options.modalWidth,
          }
        )
      );
    },
  };
};
