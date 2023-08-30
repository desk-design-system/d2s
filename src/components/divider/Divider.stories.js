import DdDivider from "./index.vue";
export default {
  title: "Atoms/Divider",
  component: DdDivider,
  tags: ["autodocs"],
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
    template: `<dd-divider :title=args.title :placement=args.placement :buttonTitle=args.buttonTitle :buttonContent=args.buttonContent :buttonType=args.buttonType :buttonSize=args.buttonSize :buttonIcon=args.buttonIcon /> `,
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
    buttonTitle: {
      description: "Add title to button",
      table: {
        defaultValue: {
          summary: "button",
        },
      },
    },
    buttonContent: {
      description: "Set content type using button content prop here",
      control: { type: "select" },
      options: ["textOnly", "leftIcon", "rightIcon", "iconOnly"],
      table: {
        defaultValue: {
          summary: "textOnly",
        },
      },
    },
    buttonType: {
      description: "Set button type using button type prop here",
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "danger"],
      table: {
        defaultValue: {
          summary: "secondary",
        },
      },
    },
    buttonSize: {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: "Set button size using button size prop here",
      table: {
        defaultValue: {
          summary: "base",
        },
      },
    },
    buttonIcon: {
      description: "Set button icon using button icon prop here",
      control: { type: "select" },
      options: ["Alert", "SquareDot", "Circle", "Plus"],
      table: {
        defaultValue: {
          summary: "Plus",
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
    template: `<dd-divider title="Content" v-bind="args" /> `,
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
    buttonTitle: {
      description: "Add title to button",
      table: {
        defaultValue: {
          summary: "button",
        },
      },
    },
    buttonContent: {
      description: "Set content type using button content prop here",
      table: {
        defaultValue: {
          summary: "button",
        },
      },
    },
    buttonType: {
      description: "Set button type using button type prop here",
      table: {
        defaultValue: {
          summary: "button",
        },
      },
    },
    buttonSize: {
      description: "Set button size using button size prop here",
      table: {
        defaultValue: {
          summary: "button",
        },
      },
    },
    buttonIcon: {
      description: "Set button icon using button icon prop here",
      table: {
        defaultValue: {
          summary: "base",
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
    template: `<dd-divider title="Content" placement="start" v-bind="args" /> `,
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
    buttonTitle: {
      description: "Add title to button",
      table: {
        defaultValue: {
          summary: "button",
        },
      },
    },
    buttonContent: {
      description: "Set content type using button content prop here",
      table: {
        defaultValue: {
          summary: "textOnly",
        },
      },
    },
    buttonType: {
      description: "Set button type using button type prop here",
      table: {
        defaultValue: {
          summary: "secondary",
        },
      },
    },
    buttonSize: {
      description: "Set button size using button size prop here",
      table: {
        defaultValue: {
          summary: "base",
        },
      },
    },
    buttonIcon: {
      description: "Set button icon using button icon prop here",
      table: {
        defaultValue: {
          summary: "Plus",
        },
      },
    },
  },
};

export const DivierWithButton = {
  render: (args) => ({
    components: {
      DdDivider,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-divider buttonTitle="button" buttonContent="leftIcon" buttonType="secondary" buttonIcon="Plus" buttonSiza="base" /> `,
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
    buttonTitle: {
      description: "Add title to button",
      table: {
        defaultValue: {
          summary: "button",
        },
      },
    },
    buttonContent: {
      description: "Set content type using button content prop here",
      table: {
        defaultValue: {
          summary: "textOnly",
        },
      },
    },
    buttonType: {
      description: "Set button type using button type prop here",
      table: {
        defaultValue: {
          summary: "secondary",
        },
      },
    },
    buttonSize: {
      description: "Set button size using button size prop here",
      table: {
        defaultValue: {
          summary: "base",
        },
      },
    },
    buttonIcon: {
      description: "Set button icon using button icon prop here",
      table: {
        defaultValue: {
          summary: "Plus",
        },
      },
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

DivierWithButton.parameters = {
  docs: {
    source: {
      code: `<dd-divider buttonTitle="button" buttonContent="leftIcon" buttonType="secondary" buttonIcon="Plus" buttonSiza="base" />`,
    },
  },
};
