import ddLoader from "./index.vue";
import { action } from "@storybook/addon-actions";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Loader",
  component: ddLoader,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ddLoader },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<ddLoader v-bind="args"/>`,
});

export const Gray = Template.bind({});
export const Green = Template.bind({});
export const Red = Template.bind({});
export const Blue = Template.bind({});
export const Purple = Template.bind({});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Gray.args = {
  color: "gray",
  size: "sm",
};
Green.args = {
    color: "green",
    size: "sm",
  };
Red.args = {
    color: "red",
    size: "sm",
  };
Blue.args = {
    color: "blue",
    size: "sm",
  };
Purple.args = {
    color: "purple",
    size: "sm",
  };