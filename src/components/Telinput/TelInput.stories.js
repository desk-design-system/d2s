import DdTelInput from "./index.vue";
import { action } from "@storybook/addon-actions";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/TelInput",
  component: DdTelInput,
};

export const Default = {
  render: (args) => ({
    components: { DdTelInput },
    setup() {
      const onClickMethod = () => action("clicked");
      const selected = ref("");
      return { selected, args, onClickMethod };
    },
    template: `<dd-tel-input v-model="selected" />`,
  }),
  argTypes: {
    config: {
      description: "You can pass the props and events in Config object",
      table: {
        defaultValue: {
          summary: "() => {}",
        },
      },
    },
  },
};


Default.parameters = {
  docs: {
    source: {
      code: `<dd-tel-input v-model="selected" />`,
    },
  },
};