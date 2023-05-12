import DdTextarea from "./index.vue";
import { action } from "@storybook/addon-actions";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/TextArea",
  component: DdTextarea,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: {
      description: "Change label value as per the requirement",
      table: {
        defaultValue: {
          summary: "label",
        },
      },
    },
    placeholder: {
      description: "Change placeholder value as per the requirement",
      table: {
        defaultValue: {
          summary: "Select option",
        },
      },
    },
    rules: {
      control: { type: "select" },
      options: ["alpha", "max:6", "alpha_dash"],
      description:
        "You can simple add the validation by selecting any of the above pre defined rule",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdTextarea },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const onClickMethod = () => action("clicked");
    const selected = ref("");
    return { selected, args, onClickMethod };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-textarea  v-bind="args" v-model="selected" />',
});

export const Basic = Template.bind({});
// export const Validation = Template.bind( {} )

// export const CheckLeft = Template.bind( {} )
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Basic.args = {
  Label: "Basic Input",
};
