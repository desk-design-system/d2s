import "../src/assets/index.css";
import { setup } from "@storybook/vue3";
import { useNotification } from "../src/components/notification";
import { useMessageBox } from "../src/components/MessageBox";

setup((app) => {
  app.provide("$notification", useNotification());
  app.provide("$modal", useMessageBox());
});

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: {
        disable: false,
      },
    },
  },
};

export default preview;
