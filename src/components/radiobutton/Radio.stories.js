import DdRadio from "./index.vue";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/RadioGroup",
  component: DdRadio,
};

export const Default = {
  render: (args) => ({
    components: {
      DdRadio,
    },
    setup() {
      const selected = ref("");
      const value = ref([
        {
          name: "Option 1",
          value: 1,
        },
        {
          name: "Option 2",
          value: 2,
        },
        {
          name: "Option 3",
          value: 3,
        },
        {
          name: "Option 4",
          value: 4,
        },
      ]);
      return { value, selected, args };
    },
    template: `<dd-radio v-model="selected"  :options="value"  />`,
  }),
  argTypes: {
    options: {
      description: "Pass data array in options",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    list: {
      description: "Trigger to show Radio group in list style",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

export const list = {
  render: (args) => ({
    components: {
      DdRadio,
    },
    setup() {
      const selected = ref("");
      const value = ref([
        {
          name: "Option 1",
          value: 1,
        },
        {
          name: "Option 2",
          value: 2,
        },
        {
          name: "Option 3",
          value: 3,
        },
        {
          name: "Option 4",
          value: 4,
        },
      ]);
      return { value, selected, args };
    },
    template: `<dd-radio v-model="selected" :options="value" list />`,
  }),
  argTypes: {
    options: {
      description: "Pass data array in options",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    list: {
      description: "Trigger to show Radio group in list style",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

Default.parameters = {
  docs: {
    source: {
      code: `<dd-radio v-model="selected" :options="value" />`,
    },
  },
};

list.parameters = {
  docs: {
    source: {
      code: `<dd-radio v-model="selected" :options="value" list />`,
    },
  },
};