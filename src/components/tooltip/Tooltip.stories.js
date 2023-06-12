import ddTooltip from "./index.vue";
import { action } from "@storybook/addon-actions";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Tooltip",
  component: ddTooltip,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ddTooltip },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<div class="dd-flex dd-justify-center dd-my-3">
    <ddTooltip v-bind="args"> Mouse on me </ddTooltip>
  </div>
  `,
});

export const Top = Template.bind({});
export const Right = Template.bind({});
export const Bottom = Template.bind({});
export const Left = Template.bind({});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Top.args = {
  toolTipPosition: "top",
  toolTipText: "i'm Tooltip",
};
Right.args = {
  toolTipPosition: "right",
  toolTipText: "i'm Tooltip",
};
Bottom.args = {
  toolTipPosition: "bottom",
  toolTipText: "i'm Tooltip",
};
Left.args = {
  toolTipPosition: "left",
  toolTipText: "i'm Tooltip",
};