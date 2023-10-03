// import MyButton from './Button.vue';
import { ref } from "vue";
import DdTimePicker from "./index.vue";
import { action } from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/TimePicker",
  component: DdTimePicker,
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

export const Default = {
  render: (args) => ({
    components: {
      DdTimePicker,
    },
    setup() {
      const value = ref("");
      return { args, value, };
    },
    template: `<dd-time-picker v-model='value' />`,
  }),
  argTypes: {
    modelValue: {
        type: "string",
        description:
          `v-model. 
          Hours should be less than equal to 12 else they will be converted to 12 automatically and same goes for Minutes they can go above 59 `,
        table: {
          defaultValue: {
            summary: false,
          },
        },
      },
  },
};


