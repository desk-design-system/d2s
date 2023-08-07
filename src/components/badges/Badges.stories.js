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
    template: `<dd-badge type="basic" title="Badge" />`,
  }),
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["warning", "danger", "success", "info", "basic", "purple"],
      description:
        "Change type value as per the requirement warning / danger / success / info",
      table: {
        defaultValue: {
          summary: "warning",
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

export const Warning = {
  render: (args) => ({
    components: {
      ddBadge,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-badge type="warning" title="Badge" />`,
  }),
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["warning", "danger", "success", "info", "basic", "purple"],
      description:
        "Change type value as per the requirement warning / danger / success / info",
      table: {
        defaultValue: {
          summary: "warning",
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

export const Success = {
  render: (args) => ({
    components: {
      ddBadge,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-badge type="success" title="Badge" />`,
  }),
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["warning", "danger", "success", "info", "basic", "purple"],
      description:
        "Change type value as per the requirement warning / danger / success / info",
      table: {
        defaultValue: {
          summary: "warning",
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

export const Danger = {
  render: (args) => ({
    components: {
      ddBadge,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-badge type="danger" title="Badge" />`,
  }),
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["warning", "danger", "success", "info", "basic", "purple"],
      description:
        "Change type value as per the requirement warning / danger / success / info",
      table: {
        defaultValue: {
          summary: "warning",
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

export const Info = {
  render: (args) => ({
    components: {
      ddBadge,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-badge type="info" title="Badge" />`,
  }),
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["warning", "danger", "success", "info", "basic", "purple"],
      description:
        "Change type value as per the requirement warning / danger / success / info",
      table: {
        defaultValue: {
          summary: "warning",
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

export const Purple = {
  render: (args) => ({
    components: {
      ddBadge,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-badge type="purple" title="Badge" />`,
  }),
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["warning", "danger", "success", "info", "basic", "purple"],
      description:
        "Change type value as per the requirement warning / danger / success / info",
      table: {
        defaultValue: {
          summary: "warning",
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
      code: ` <dd-badge type="basic" title="Badge" />`,
    },
  },
};

Warning.parameters = {
  docs: {
    source: {
      code: ` <dd-badge type="warning" title="Badge" />`,
    },
  },
};

Success.parameters = {
  docs: {
    source: {
      code: ` <dd-badge type="success" title="Badge" />`,
    },
  },
};

Danger.parameters = {
  docs: {
    source: {
      code: ` <dd-badge type="danger" title="Badge" />`,
    },
  },
};

Purple.parameters = {
  docs: {
    source: {
      code: ` <dd-badge type="purple" title="Badge" />`,
    },
  },
};
