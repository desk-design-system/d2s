import DdNavigation from "./index.vue";

export default {
  title: "Atoms/Nav links",
  component: DdNavigation,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  
};


export const Default = {
  render: (args) => ({
    components: {
      DdNavigation,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-navigation label="Side Navigation with Slots" v-bind="args" />`,
  }),
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

export const PrefixIcon = {
  render: (args) => ({
    components: {
      DdNavigation,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<div class="dd-w-[15rem]"> <dd-navigation label="Side Navigation with Slots" prefix prefixIcon="Circle" v-bind="args" /> </div>`,
  }),
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


export const suffixIcon = {
  render: (args) => ({
    components: {
      DdNavigation,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<div class="dd-w-[15rem]"> <dd-navigation label="Side Navigation with Slots" suffix suffixIcon="Circle" v-bind="args" /> </div>`,
  }),
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

export const Active = {
  render: (args) => ({
    components: {
      DdNavigation,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<div class="dd-w-[15rem]"> <dd-navigation label="Side Navigation with Slots" active v-bind="args" /> </div>`,
  }),
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


export const Disabled = {
  render: (args) => ({
    components: {
      DdNavigation,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<div class="dd-w-[15rem]"> <dd-navigation label="Side Navigation with Slots" disabled v-bind="args" /> </div>`,
  }),
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


export const Featured = {
  render: (args) => ({
    components: {
      DdNavigation,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<div class="dd-w-[15rem]"> <dd-navigation label="Side Navigation with Slots" prefix  prefixIcon="Circle" suffix suffixIcon="Circle" active v-bind="args" /> </div>`,
  }),
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


Default.parameters = {
  docs: {
    source: {
      code: ` <dd-navigation label="Side Navigation with Slots" />`,
    },
  },
};
PrefixIcon.parameters = {
  docs: {
    source: {
      code: ` <dd-navigation label="Side Navigation with Slots" prefix prefixIcon="Circle" />`,
    },
  },
};
suffixIcon.parameters = {
  docs: {
    source: {
      code: ` <dd-navigation label="Side Navigation with Slots" suffix suffixIcon="Circle" />`,
    },
  },
};
Active.parameters = {
  docs: {
    source: {
      code: ` <dd-navigation label="Side Navigation with Slots" active />`,
    },
  },
};
Disabled.parameters = {
  docs: {
    source: {
      code: ` <dd-navigation label="Side Navigation with Slots" disabled />`,
    },
  },
};

Featured.parameters = {
  docs: {
    source: {
      code: `<dd-navigation label="Side Navigation with Slots" prefix  prefixIcon="Circle" suffix suffixIcon="Circle" active />`,
    },
  },
};