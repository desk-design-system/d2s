import { ref } from "vue";
import DdSetting from "./index.vue";

export default {
  title: "Atoms/Settings",
  component: DdSetting,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    settings: {
      description: `take Array && sample = [
        {
          id: 1,
          title: "Module Configure",
          items: [
            {
              id: 1,
              title: "Ticket Management",
              active: false,
              disable: true,
            },
            {
              id: 2,
              title: "Items Management",
              active: false,
              disable: false,
            },
          ],
        }]`,
      table: {
        defaultValue: {
          summary: Array,
        },
      },
    },
    modelValue: {
      description: "v-model input",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    activeNav: {
      description:
        "used for manage active navs this prop take string and number",
      table: {
        defaultValue: {
          summary: String && Number,
        },
      },
    },
    placeholder: {
      description: "input placeholder",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    scrollProperty: {
      description: "set height or max-height or min-height",
      table: {
        defaultValue: {
          summary: String,
        },
      },
    },
    scrollValue: {
      description: "set height in px or rem or %",
      table: {
        defaultValue: {
          summary: String,
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
      description: "Set suffix icon",
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
    change: {
      description: "@change emit event",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    focus: {
      description: "@focus emit event",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    blur: {
      description: "@blur emit event",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    usekeyup: {
      description: "@usekeyup emit event",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    usekeydown: {
      description: "@usekeydown emit event",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    getNavValue: {
      description: "get nav link value",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    getNavTitle: {
      description: "get nav title value",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
  },
};

const Template = (args) => ({
  components: { DdSetting },

  setup() {
    const settings = ref([
      {
        id: 1,
        title: "Module Configure",
        items: [
          {
            id: 1,
            title: "Ticket Management",
            active: false,
            disable: true,
          },
          {
            id: 2,
            title: "Items Management",
            active: false,
            disable: false,
          },
        ],
      },
      {
        id: 2,
        title: "Profile",
        items: [
          {
            id: 1,
            title: "General",
            active: false,
            disable: false,
          },
          {
            id: 2,
            title: "Usage & Billing",
            active: false,
            disable: false,
          },
          {
            id: 3,
            title: "user",
            active: false,
            disable: false,
          },
          {
            id: 4,
            title: "upper",
            active: true,
          },
        ],
      },
      {
        id: 3,
        title: "Profile",
        items: [
          {
            id: 1,
            title: "General",
            active: false,
            disable: false,
          },
          {
            id: 2,
            title: "Usage & Billing",
            active: false,
            disable: false,
          },
          {
            id: 3,
            title: "user",
            active: false,
            disable: false,
          },
          {
            id: 4,
            title: "upper",
            active: false,
            disable: false,
          },
        ],
      },
      {
        id: 4,
        title: "Profile",
        items: [
          {
            id: 1,
            title: "General",
            active: false,
            disable: false,
          },
          {
            id: 2,
            title: "Usage & Billing",
            active: false,
            disable: false,
          },
          {
            id: 3,
            title: "user",
            active: false,
            disable: false,
          },
          {
            id: 4,
            title: "upper",
            active: false,
            disable: false,
          },
        ],
      },
    ]);
    return { settings, args };
  },

  template: '<dd-setting :settings="settings" />',
});

export const Default = Template.bind({});
