import DdCheckbox from "./index.vue";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Checkbox",
  component: DdCheckbox,
  tags: ['autodocs'],
};

export const Default = {
  render: (args) => ({
    components: {
      DdCheckbox,
    },
    setup() {
      const selected = ref("");
      return { selected, args };
    },
    template: `<dd-checkbox v-model="selected" :label=args.label :checked=args.checked :value=args.value :disabled=args.disabled /> `,
  }),
  argTypes: {
    label: {
      description: "Change label value as per the requirement",
      type: { name: "string", required: true },
      table: {
        defaultValue: {
          summary: "String",
        },
      },
    },
  },
};