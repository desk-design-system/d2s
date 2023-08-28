import DdRating from "./index.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Rating",
  component: DdRating,
  tags: ["autodocs"],
};

export const XS = {
  render: (args) => ({
    components: {
      DdRating,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-rating productRating="3" size="xs" v-bind="args" />`,
  }),
  argTypes: {
    productRating: {
      control: {
        type: "select",
      },
      options: [1, 2, 3, 4, 5],
      description: "Change rating values",
      table: {
        defaultValue: {
          summary: 3,
        },
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: ["xs", "sm", "base"],
      description: "Change star rating width",
    },
  },
};

export const SM = {
  render: (args) => ({
    components: {
      DdRating,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-rating productRating="3" size="sm" v-bind="args" />`,
  }),
  argTypes: {
    productRating: {
      control: {
        type: "select",
      },
      options: [1, 2, 3, 4, 5],
      description: "Change rating values",
      table: {
        defaultValue: {
          summary: 3,
        },
      },
    },
    starWidth: {
      control: {
        type: "select",
      },
      options: ["20", "24", "28"],
      description: "Change star rating width",
    },
    starHeight: {
      control: {
        type: "select",
      },
      options: ["20", "24", "28"],
      description: "Change star rating height",
    },
  },
};

export const BASE = {
  render: (args) => ({
    components: {
      DdRating,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-rating productRating="3" size="base" v-bind="args" />`,
  }),
  argTypes: {
    productRating: {
      control: {
        type: "select",
      },
      options: [1, 2, 3, 4, 5],
      description: "Change rating values",
      table: {
        defaultValue: {
          summary: 3,
        },
      },
    },
    starWidth: {
      control: {
        type: "select",
      },
      options: ["20", "24", "28"],
      description: "Change star rating width",
    },
    starHeight: {
      control: {
        type: "select",
      },
      options: ["20", "24", "28"],
      description: "Change star rating height",
    },
  },
};

XS.parameters = {
  docs: {
    source: {
      code: `<dd-rating productRating="3" size="xs" />`,
    },
  },
};

SM.parameters = {
  docs: {
    source: {
      code: `<dd-rating productRating="3" size="sm" />`,
    },
  },
};

BASE.parameters = {
  docs: {
    source: {
      code: `<dd-rating productRating="3" size="base" />`,
    },
  },
};
