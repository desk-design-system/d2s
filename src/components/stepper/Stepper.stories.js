import { ref } from "vue";
import DdStepper from "./index.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Stepper",
  component: DdStepper,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    steps: {
      description: "Pass the array of step titles",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    active: {
      description: "Active step number starting from 0.",
      table: {
        defaultValue: {
          summary: 0,
        },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdStepper },
  setup() {
    const value = ref(["Job details", "Application form", "Preview"]);
    const activeStep = ref(0);
    return { args, value, activeStep };
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<dd-stepper  v-bind="args" :steps="value" :active="activeStep" />  ',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  active: 0,
};
