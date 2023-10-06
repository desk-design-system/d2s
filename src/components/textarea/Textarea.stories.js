import DdTextarea from "./index.vue";
import { action } from "@storybook/addon-actions";
import { computed } from "vue";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/TextArea",
  component: DdTextarea,
  tags: ["autodocs"],
};

export const Default = {
  render: (args) => ({
    components: { DdTextarea },
    setup() {
      const onClickMethod = () => action("clicked");
      const value = ref("");
      const label = computed(()=> args.label ?? 'Textarea')
      const placeholder = computed(()=> args.placeholder)
      const rows = computed(()=> args.rows)
      const isRequired = computed(()=> args.isRequired)
      const rules = computed(()=> args.rules)
      const disabled = computed(()=> args.disabled)
      const size = computed(()=> args.size)
      const hintText = computed(()=> args.hintText)
      const hintTextColor = computed(()=> args.hintTextColor)
      const counter = computed(()=> args.counter)
      return { value, args, label, placeholder, rows, isRequired, rules, disabled, size, hintText, hintTextColor, counter };
    },
    template: `<dd-textarea v-model="value" :label="label" :placeholder="placeholder" :rows="rows" :isRequired="isRequired" :rules="rules" :disabled="disabled" :size="size" :hint-text="hintText" :hint-text-color="hintTextColor" :counter="counter" />`,
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
    size:{
      control: { type: "select" },
      options: ["sm", "xl", "base", "lg", "xl"],
      description:
      "Prop to set the size of the textarea. Only these values are allowed.",
      table: {
        defaultValue: {
          summary: 'base',
        },
      },

    },
    hintTextColor:{
      control: { type: "select" },
      options: ["red", "default"],
      description:
      "Prop to set the size of the textarea. Only these values are allowed.",
      table: {
        defaultValue: {
          summary: 'default',
        },
      },

    }
  },
};
