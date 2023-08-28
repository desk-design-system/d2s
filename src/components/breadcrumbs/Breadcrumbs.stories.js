import DdBreadcrumb from "./index.vue";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Breadcrumbs",
  component: DdBreadcrumb,
  tags: ['autodocs'],
};

export const Default = {
  render: (args) => ({
    components: {
      DdBreadcrumb,
    },
    setup() {
      const value = ref([
        { name: "Home", to: { path: "/" }, link: "#" },
        { name: "Invoice", to: "", link: "google.com" },
        { name: "Section", to: "", link: "#" },
        { name: "Page", to: "", link: "#" },
        { name: "Inner Page", to: "", link: "#" },
      ]);
      return { value, args };
    },
    template: `<dd-breadcrumb  :items="value" v-bind="args" />`,
  }),
  argTypes: {
    shadow: {
      description:
        "You can give shadow to Breadcrumbs container simple pass the prop",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    full: {
      description:
        "You can make Breadcrumbs container width full simple pass the prop",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    items: {
      description: "Pass data array in Items",
      table: {
        defaultValue: {
          summary: "[]",
        },
      },
    },
    seprator: {
      control: { type: "select" },
      options: ["slash", "chevron"],
      description:
        "You can chnage the seprator icon simple pass the icon name ",
      table: {
        defaultValue: {
          summary: "slash",
        },
      },
    },
  },
};

export const FullWidth = {
  render: (args) => ({
    components: {
      DdBreadcrumb,
    },
    setup() {
      const value = ref([
        { name: "Home", to: { path: "/" }, link: "#" },
        { name: "Invoice", to: "", link: "google.com" },
        { name: "Section", to: "", link: "#" },
        { name: "Page", to: "", link: "#" },
        { name: "Inner Page", to: "", link: "#" },
      ]);
      return { value, args };
    },
    template: `<dd-breadcrumb  :items="value" full="true" shadow="true" v-bind="args" />`,
  }),
  argTypes: {
    shadow: {
      description:
        "You can give shadow to Breadcrumbs container simple pass the prop",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    full: {
      description:
        "You can make Breadcrumbs container width full simple pass the prop",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    items: {
      description: "Pass data array in Items",
      table: {
        defaultValue: {
          summary: "[]",
        },
      },
    },
    seprator: {
      control: { type: "select" },
      options: ["slash", "chevron"],
      description:
        "You can chnage the seprator icon simple pass the icon name ",
      table: {
        defaultValue: {
          summary: "slash",
        },
      },
    },
  },
};

export const Chevron = {
  render: (args) => ({
    components: {
      DdBreadcrumb,
    },
    setup() {
      const value = ref([
        { name: "Home", to: { path: "/" }, link: "#" },
        { name: "Invoice", to: "", link: "google.com" },
        { name: "Section", to: "", link: "#" },
        { name: "Page", to: "", link: "#" },
        { name: "Inner Page", to: "", link: "#" },
      ]);
      return { value, args };
    },
    template: `<dd-breadcrumb  :items="value" seprator='chevron' v-bind="args" />`,
  }),
  argTypes: {
    shadow: {
      description:
        "You can give shadow to Breadcrumbs container simple pass the prop",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    full: {
      description:
        "You can make Breadcrumbs container width full simple pass the prop",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    items: {
      description: "Pass data array in Items",
      table: {
        defaultValue: {
          summary: "[]",
        },
      },
    },
    seprator: {
      control: { type: "select" },
      options: ["slash", "chevron"],
      description:
        "You can chnage the seprator icon simple pass the icon name ",
      table: {
        defaultValue: {
          summary: "slash",
        },
      },
    },
  },
};

Default.parameters = {
  docs: {
    source: {
      code: ` <dd-breadcrumb  :items="value"  />`,
    },
  },
};

FullWidth.parameters = {
  docs: {
    source: {
      code: `<dd-breadcrumb  :items="value" full="true" shadow="true"  />`,
    },
  },
};

Chevron.parameters = {
  docs: {
    source: {
      code: `<dd-breadcrumb  :items="value" seprator='chevron'  />`,
    },
  },
};
