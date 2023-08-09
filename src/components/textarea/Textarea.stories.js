import DdTextarea from "./index.vue";
import { action } from "@storybook/addon-actions";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/TextArea",
  component: DdTextarea,
};



export const Default = {
  render: (args) => ({
    components: { DdTextarea },
    setup() {
      const onClickMethod = () => action("clicked");
      const selected = ref("");
      return { selected, args, onClickMethod };
    },
    template: `<dd-textarea v-model="selected" />`,
  }),
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
    rows: {
      description: "Define number of rows for textarea",
      table: {
        defaultValue: {
          summary: "4",
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

Default.parameters = {
  docs: {
    source: {
      code: `<dd-textarea v-model="selected" />`,
    },
  },
};