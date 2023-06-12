import '../src/assets/index.css';
import { app } from "@storybook/vue3";
import {useNotification} from "../src/components/notification"
import {useMessageBox} from "../src/components/MessageBox"
app.provide('$notification', useNotification())
app.provide("$modal", useMessageBox());
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}