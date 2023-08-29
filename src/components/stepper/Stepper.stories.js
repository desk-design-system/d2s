import { ref } from "vue";
import DdStepper from "./index.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Stepper",
  component: DdStepper,
  tags: ["autodocs"],
};


export const Default = {
  render: (args) => ({
    components: { DdStepper },
  setup() {
    const value = ref(["Job details", "Application form", "Preview"]);
    const activeStep = ref(0);
    return { args, value, activeStep };
  },
    template: `<dd-stepper :steps="value" :active=args.active />`,
  }),
  argTypes: {
    steps: {
      description: `Pass the array of step titles sample = ["Job details", "Application form", "Preview"]`,
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

Default.parameters = {
  docs: {
    source: {
      code: ` <dd-stepper :steps="value" :active="activeStep" />`,
    },
  },
};