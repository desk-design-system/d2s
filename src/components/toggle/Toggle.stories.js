import DdToggle from "./index.vue";
import { action } from "@storybook/addon-actions";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Switch",
  component: DdToggle,
};

export const Primary = {
  render: (args) => ({
    components: { DdToggle },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      const onClickMethod = () => action("clicked");
      const switchState = ref(false);
      return { switchState, args, onClickMethod };
    },
    template: `<dd-toggle v-model="switchState" size="base" />`,
  }),
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "base"],
      description: "Accepted value sm / base",
      table: {
        defaultValue: {
          summary: "base",
        },
      },
    },
    showUocn: {
      description: "Trigger to show icon",
      table: {
        defaultValue: {
          summary: "False",
        },
      },
    },
  },
};

export const Icon = {
  render: (args) => ({
    components: { DdToggle },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      const onClickMethod = () => action("clicked");
      const switchState = ref(false);
      return { switchState, args, onClickMethod };
    },
    template: `<dd-toggle v-model="switchState" size="base" showIcon />`,
  }),
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "base"],
      description: "Accepted value sm / base",
      table: {
        defaultValue: {
          summary: "base",
        },
      },
    },
    showUocn: {
      description: "Trigger to show icon",
      table: {
        defaultValue: {
          summary: "False",
        },
      },
    },
  },
};

Primary.parameters = {
  docs: {
    source: {
      code: `<dd-toggle v-model="switchState" size="base" />`,
    },
  },
};

Icon.parameters = {
  docs: {
    source: {
      code: `<dd-toggle v-model="switchState" size="base" showIcon />`,
    },
  },
};
