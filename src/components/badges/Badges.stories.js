// import MyButton from './Button.vue';
import ddBadge from "./index.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Badge",
  component: ddBadge,
};

export const Basic = {
  render: (args) => ({
    components: {
      ddBadge,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-badge title="Badge" />`,
  }),
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: [
        "white",
        "green",
        "gray",
        "blue",
        "red",
        "yellow",
        "green",
        "lime",
        "info",
        "purple",
        "slat",
        "neutral",
        "zinc",
        "stone",
        "red",
        "orange",
        "amber",
        "lime",
        "teal",
        "emerald",
        "cyan",
        "sky",
        "indigo",
        "fuchsia",
        "pink",
        "rose",
      ],
      description:
        "Change type value as per the requirement yellow / red / teal / blue",
      table: {
        defaultValue: {
          summary: "yellow",
        },
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: ["xs", "base"],
      description: "Change size value as per the requirement xs / base ",
      table: {
        defaultValue: {
          summary: "base",
        },
      },
    },
    title: {
      description: "Change title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    close: {
      description: "Trigger when alert is closed.",
      table: {
        defaultValue: {
          summary: "Function",
        },
      },
    },
    prefix: {
      description: "Use slot name prefix to customize content ",
      table: {
        defaultValue: {
          summary: "slot",
        },
      },
    },
    suffix: {
      description: "Use slot name suffix to customize content  ",
      table: {
        defaultValue: {
          summary: "slot",
        },
      },
    },
    rounded: {
      description: "Make your tag rounded shhape",
      table: {
        defaultValue: {
          summary: "False",
        },
      },
    },
    onClick: { action: "clicked" },
  },
};

export const COLORED = {
  render: (args) => ({
    components: {
      ddBadge,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-badge type="teal" title="Badge" />`,
  }),
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["yellow", "red", "teal", "blue", "gray", "purple"],
      description:
        "Change type value as per the requirement yellow / red / teal / blue",
      table: {
        defaultValue: {
          summary: "yellow",
        },
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: ["medium", "large"],
      description: "Change size value as per the requirement medium / large ",
      table: {
        defaultValue: {
          summary: "medium",
        },
      },
    },
    title: {
      description: "Change title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    close: {
      description: "Trigger when alert is closed.",
      table: {
        defaultValue: {
          summary: "Function",
        },
      },
    },
    prefix: {
      description: "Use slot name prefix to customize content ",
      table: {
        defaultValue: {
          summary: "slot",
        },
      },
    },
    suffix: {
      description: "Use slot name suffix to customize content  ",
      table: {
        defaultValue: {
          summary: "slot",
        },
      },
    },
    rounded: {
      description: "Make your tag rounded shhape",
      table: {
        defaultValue: {
          summary: "False",
        },
      },
    },
    onClick: { action: "clicked" },
  },
};

export const Closable = {
  render: (args) => ({
    components: {
      ddBadge,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-badge title="Badge" closable
    dot type="purple" />`,
  }),
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["yellow", "red", "teal", "blue", "gray", "purple"],
      description:
        "Change type value as per the requirement yellow / red / teal / blue",
      table: {
        defaultValue: {
          summary: "yellow",
        },
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: ["medium", "large"],
      description: "Change size value as per the requirement medium / large ",
      table: {
        defaultValue: {
          summary: "medium",
        },
      },
    },
    title: {
      description: "Change title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    close: {
      description: "Trigger when alert is closed.",
      table: {
        defaultValue: {
          summary: "Function",
        },
      },
    },
    prefix: {
      description: "Use slot name prefix to customize content ",
      table: {
        defaultValue: {
          summary: "slot",
        },
      },
    },
    suffix: {
      description: "Use slot name suffix to customize content  ",
      table: {
        defaultValue: {
          summary: "slot",
        },
      },
    },
    rounded: {
      description: "Make your tag rounded shhape",
      table: {
        defaultValue: {
          summary: "False",
        },
      },
    },
    onClick: { action: "clicked" },
  },
};

Basic.parameters = {
  docs: {
    source: {
      code: ` <dd-badge title="Badge" />`,
    },
  },
};

COLORED.parameters = {
  docs: {
    source: {
      code: ` <dd-badge type="teal" title="Badge" />`,
    },
  },
};

Closable.parameters = {
  docs: {
    source: {
      code: ` <dd-badge title="Badge" closable
      dot type="purple" />`,
    },
  },
};
