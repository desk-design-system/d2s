import '../src/assets/index.css';
import { app } from "@storybook/vue3";
import {useNotification} from "../src/components/notification"
app.provide('$notification', useNotification())
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}