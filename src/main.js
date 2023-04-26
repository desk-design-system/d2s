import { createApp } from 'vue';
import App from './App.vue';
import './assets/index.css';
import {useNotification} from "./components/notification"
import {defineRule, configure} from "vee-validate"
import {localize} from "@vee-validate/i18n"

import AllRules from "@vee-validate/rules"

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
configure({
  generateMessage: localize("en", {
    messages: {
      required: "The {field} field is required",
      alpha: "Only alphabetic values allowed",
      alpha_num: "Only alphabetic and numeric values allowed",
      alpha_spaces: "Only alphabetic values allowed",
      confirmed: "This {field} confirmation does not match",
      email: "This {field} must be a valid email",
      integer: "This {field} must be an integer",
      max: "This {field} not be greater than 0:{max} values",
      min: "This {field} must be at least 0:{min} values",
      numeric: "This {field} may only contain numeric values"
    }
  })
})
const app = createApp(App)
app.provide('$notification', useNotification())
app.config.globalProperties.$notification = useNotification()
app.mount('#app');
