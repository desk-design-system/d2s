import * as DDSystem from "./components.js";
export * as DDSystem from "./components.js";
import { useMessageBox } from "./MessageBox";
import AllRules from "@vee-validate/rules";
import { defineRule, configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";

const install = (app) => {
  app.provide("$modal", useMessageBox());
  app.config.globalProperties.$modal = useMessageBox();
  Object.keys(DDSystem).forEach((name) => {
    app.component(name, DDSystem[name]);
  });

  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
  });
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
        numeric: "This {field} may only contain numeric values",
      },
    }),
  });
};

export default install;
