import ddAlert from "./index.vue";
import DdButton from "../buttons/index.vue"

export default {
  title: "Atoms/Alert",
  component: ddAlert,
  tags: ['autodocs'],
};

export const Default = {
  render: (args) => ({
    components: {
      ddAlert,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-alert :title="args.title" :type="args.type" :description="args.description" :closable="args.closable" /> `,
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
      description: "Title for the Alert.",
      type: { name: "string", required: true },
      defaultValue: "",
    },
    description: {
      description:
        "You can add the descript in Alter",
      table: {
        defaultValue: {
          summary: "String",
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
      description: "Title for the Alert.",
      type: { name: "string", required: true },
      defaultValue: "",
    },
    description: {
      description:
        "You can add the descript in Alter",
      table: {
        defaultValue: {
          summary: "String",
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
      description: "Title for the Alert.",
      type: { name: "string", required: true },
      defaultValue: "",
    },
    description: {
      description:
        "You can add the descript in Alter",
      table: {
        defaultValue: {
          summary: "String",
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
      description: "Title for the Alert.",
      type: { name: "string", required: true },
      defaultValue: "",
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

export const AlertWithSlot = {
  render: (args) => ({
    components: {
      ddAlert,
      DdButton,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-alert  type="warning" title="warning alert" description="Your password must be at least 8 characters.
    Your password must include at least one pro wrestling finishing move." v-bind="args">
      <template #rightSlot>
        <dd-button title="button 1" type="secondary" />
        <dd-button title="button 2" type="secondary" />
      </template>
    </dd-alert>`,
  }),
  argTypes: {
    title: {
      description: "Title for the Alert.",
      type: { name: "string", required: true },
      defaultValue: "",
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

AlertWithSlot.parameters = {
  docs: {
    source: {
      code: ` 
      <dd-alert  type="warning" title="warning alert" description="Your password must be at least 8 characters.
      Your password must include at least one pro wrestling finishing move.">
        <template #rightSlot>
          <dd-button title="button 1" type="secondary" />
          <dd-button title="button 2" type="secondary" />
        </template>
      </dd-alert>`,
    },
  },
};
