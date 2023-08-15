import ddAlert from "./index.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Alert",
  component: ddAlert,
};

export const Warning = {
  render: (args) => ({
    components: {
      ddAlert,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-alert  type="warning" title="warning alert" v-bind="args" />`,
  }),
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["warning", "danger", "success", "info"],
      description:
        "Change type value as per the requirement warning / danger / success / info",
      table: {
        defaultValue: {
          summary: "warning",
        },
      },
    },
    title: {
      description:
        "You can simply pass the heading of your alert in title slot",
      table: {
        defaultValue: {
          summary: "Slot",
        },
      },
    },
    closable: {
      description:
        "To make your alert close able simple pass true value to closable prop",
      table: {
        defaultValue: {
          summary: "False",
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
    onClick: { action: "clicked" },
  },
};

export const Success = {
  render: (args) => ({
    components: {
      ddAlert,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-alert  type="success" title="success alert" v-bind="args"/>`,
  }),
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["warning", "danger", "success", "info"],
      description:
        "Change type value as per the requirement warning / danger / success / info",
      table: {
        defaultValue: {
          summary: "warning",
        },
      },
    },
    title: {
      description:
        "You can simply pass the heading of your alert in title slot",
      table: {
        defaultValue: {
          summary: "Slot",
        },
      },
    },
    closable: {
      description:
        "To make your alert close able simple pass true value to closable prop",
      table: {
        defaultValue: {
          summary: "False",
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
    onClick: { action: "clicked" },
  },
};

export const Danger = {
  render: (args) => ({
    components: {
      ddAlert,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-alert  type="danger" title="danger alert" v-bind="args"/>`,
  }),
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["warning", "danger", "success", "info"],
      description:
        "Change type value as per the requirement warning / danger / success / info",
      table: {
        defaultValue: {
          summary: "warning",
        },
      },
    },
    title: {
      description:
        "You can simply pass the heading of your alert in title slot",
      table: {
        defaultValue: {
          summary: "Slot",
        },
      },
    },
    closable: {
      description:
        "To make your alert close able simple pass true value to closable prop",
      table: {
        defaultValue: {
          summary: "False",
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
    onClick: { action: "clicked" },
  },
};

export const Info = {
  render: (args) => ({
    components: {
      ddAlert,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-alert  type="info" title="info alert" v-bind="args"/>`,
  }),
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["warning", "danger", "success", "info"],
      description:
        "Change type value as per the requirement warning / danger / success / info",
      table: {
        defaultValue: {
          summary: "warning",
        },
      },
    },
    title: {
      description:
        "You can simply pass the heading of your alert in title slot",
      table: {
        defaultValue: {
          summary: "Slot",
        },
      },
    },
    closable: {
      description:
        "To make your alert close able simple pass true value to closable prop",
      table: {
        defaultValue: {
          summary: "False",
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
    onClick: { action: "clicked" },
  },
};

Warning.parameters = {
  docs: {
    source: {
      code: ` 
        <dd-alert  type="warning" title="warning alert" />`,
    },
  },
};

Success.parameters = {
  docs: {
    source: {
      code: ` 
        <dd-alert  type="success" title="success alert" />`,
    },
  },
};
Danger.parameters = {
  docs: {
    source: {
      code: ` 
        <dd-alert  type="danger" title="danger alert" />`,
    },
  },
};
Info.parameters = {
  docs: {
    source: {
      code: ` 
        <dd-alert  type="info" title="info alert" />`,
    },
  },
};
