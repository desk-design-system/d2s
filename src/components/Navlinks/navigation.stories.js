import DdNavigation from "./index.vue";

export default {
  title: "Atoms/Nav links",
  component: DdNavigation,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: {
      description: "add text here",
      table: {
        defaultValue: {
          summary: String,
        },
      },
    },
    active: {
      description: "You can active props pn handle it on click at your end",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    prefixIcon: {
      description: "Set prefix icon",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    suffixIcon: {
      description: "Set prefix icon",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    prefix: {
      description: "provide content at start of side navs",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    suffix: {
      description: "provide content at end of side navs",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    prefixSlot: {
      description:
        "add custom content in prefix space and it also provide active prop in scoped slot",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    suffixSlot: {
      description:
        "add custom content in suffix space and it also provide active prop in scoped slot",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    onIconClick: {
      description: "emit event for prefix svg icon",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
  },
};

const Template = (args) => ({
  components: { DdNavigation },

  setup() {
    return { args };
  },

  template: '<dd-navigation  v-bind="args" />',
});

export const Default = Template.bind({});
export const Active = Template.bind({});

Default.args = {
  prefix: true,
  suffix: true,
  label: "Add the label of nav link",
  content: "Side Navigation with Slots",
  icon: "Circle",
};

Active.args = {
  prefix: true,
  suffix: true,
  label: "Add the label of nav link",
  content: "Side Navigation with Slots",
  icon: "Circle",
  active: true,
};
