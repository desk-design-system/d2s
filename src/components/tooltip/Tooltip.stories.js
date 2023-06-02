import DdTooltip from "./index.vue";
import { action } from "@storybook/addon-actions";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Tooltip",
  component: DdTooltip,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdTooltip },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {},
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<ddTooltip toolTipText="i'm Tooltip" toolTipPosition="bottom-end"> Mouse on me </ddTooltip>`,
});

export const Basic = Template.bind({});

// export const CheckLeft = Template.bind( {} )
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Basic.args = {};
