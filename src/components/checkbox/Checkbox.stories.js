import DdCheckbox from "./index.vue";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Checkbox",
  component: DdCheckbox,
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
    template: `<dd-checkbox v-model="selected" label="CheckBox Label" /> `,
  }),
  argTypes: {
    label: {
      description: "Change label value as per the requirement",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
  },
};

Default.parameters = {
  docs: {
    source: {
      code: `<dd-checkbox v-model="selected" label="CheckBox Label" />`,
    },
  },
};
