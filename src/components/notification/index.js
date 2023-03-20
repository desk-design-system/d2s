import AlertComponent from "./index.vue";
import { createComponent } from "./helpers";

export const useNotification = (globalProps = {}) => {
  return {
    open(options) {
      let message = null;
      if (typeof options === "string") message = options;

      const defaultProps = {
        message,
      };

      const propsData = Object.assign({}, defaultProps, globalProps, options);
      const instance = createComponent(
        AlertComponent,
        propsData,
        document.body
      );
      return {
        dismiss: instance.ctx.dismiss,
      };
    },
    error(title,message, timeout = 3000,placement = "topRight") {
      return this.open(
        Object.assign(
          {},
          {
            title: title,
            message: message,
            type: "Error",
            timeout: timeout,
            placement: placement
          }
        )
      );
    },
    success(title, message, timeout = 3000, placement = "topRight") {
      return this.open(
        Object.assign(
          {},
          {
            message: message,
            title: title,
            type: "Success",
            timeout: timeout,
            placement: placement
          }
        )
      );
    },
    info(title,message, timeout = 3000, placement = "topRight") {
      return this.open(
        Object.assign(
          {},
          {
            title: title,
            message: message,
            type: "Info",
            timeout: timeout,
            placement: placement
          }
        )
      );
    },
    warning(title,message, timeout = 3000,placement = "topRight") {
      return this.open(
        Object.assign(
          {},
          {
            title: title,
            message: message,
            type: "Warning",
            timeout: timeout,
            placement: placement
          }
        )
      );
    },
  };
};
