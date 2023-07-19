import DdDivider from "./index.vue";
export default {
  title: "Atoms/Divider",
  component: DdDivider,
};

export const Default = {
  render: (args) => ({
    components: {
      DdDivider,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-divider  /> `,
  }),
  argTypes: {
    title: {
      description: "Change title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Content",
        },
      },
    },
    placement: {
      control: { type: "select" },
      options: ["center", "start"],
      description: "Accepted value start / center",
      table: {
        defaultValue: {
          summary: "center",
        },
      },
    },
  },
};

export const Title = {
  render: (args) => ({
    components: {
      DdDivider,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-divider title="Content" /> `,
  }),
  argTypes: {
    title: {
      description: "Change title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Content",
        },
      },
    },
    placement: {
      control: { type: "select" },
      options: ["center", "start"],
      description: "Accepted value start / center",
      table: {
        defaultValue: {
          summary: "center",
        },
      },
    },
  },
};

export const TitleLeft = {
  render: (args) => ({
    components: {
      DdDivider,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-divider title="Content" placement="start" /> `,
  }),
  argTypes: {
    title: {
      description: "Change title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Content",
        },
      },
    },
    placement: {
      control: { type: "select" },
      options: ["center", "start"],
      description: "Accepted value start / center",
      table: {
        defaultValue: {
          summary: "center",
        },
      },
    },
  },
};

Default.parameters = {
  docs: {
    source: {
      code: ` <dd-divider />`,
    },
  },
};

Title.parameters = {
  docs: {
    source: {
      code: `<dd-divider title="Content" />`,
    },
  },
};

TitleLeft.parameters = {
  docs: {
    source: {
      code: ` <dd-divider title="Content" placement='start' /> `,
    },
  },
};
