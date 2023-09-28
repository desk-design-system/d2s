// import MyButton from './Button.vue';
import { ref } from "vue";
import DdInputNumber from "./index.vue";
import { action } from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/InputNumber",
  component: DdInputNumber,
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

export const Default = {
  render: (args) => ({
    components: {
      DdInputNumber,
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const value = ref("");
      const controls = ref(false)
      return { args, value, controls, onClickMethod };
    },
    template: `<dd-input-number v-model='value' :controls="args.controls" />`,
  }),
  argTypes: {
    modelValue: {
        type: "string",
        description:
          "v-model",
        table: {
          defaultValue: {
            summary: false,
          },
        },
      },
    controls: {
      type: "boolean",
      description:
        "By default button type is color less so change the props default / primary / tertiary / danger",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    
  },
};

export const Controls = {
  render: (args) => ({
    components: {
      DdInputNumber,
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const value = ref("");
      const controls = ref(false)
      return { args, value, controls, onClickMethod };
    },
    template: `<dd-input-number v-model='args.value' :controls="args.controls" />`,
  }),
  argTypes: {
    modelValue: {
        type: "string",
        description:
          "v-model",
        table: {
          defaultValue: {
            summary: false,
          },
        },
      },
    controls: {
      type: "boolean",
      description:
        "By default button type is color less so change the props default / primary / tertiary / danger",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    
  },
};

Controls.args={
  value:'',
  controls:true
}

