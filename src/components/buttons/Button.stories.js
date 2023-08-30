// import MyButton from './Button.vue';
import DdButton from "./index.vue";
import { action } from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: DdButton,
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

export const Default = {
  render: (args) => ({
    components: {
      DdButton,
    },
    setup() {
      const onClickMethod = () => action("clicked");
      return { args, onClickMethod };
    },
    template: `<dd-button :title=args.title :type=args.type :content=args.content :size=args.size :block=args.block :loader=args.loader :disabled=args.disabled />`,
  }),
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "danger"],
      description:
        "By default button type is color less so change the props default / primary / tertiary / danger",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    icon: {
      control: { type: "select" },
      options: ["Alert", "SquareDot", "Circle", "Plus"],
      description: "Pass name of the icon to prepend in the title box",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    content: {
      control: { type: "select" },
      options: ["textOnly", "leftIcon", "rightIcon", "iconOnly"],
      description:
        "By default button type is simple button so change the props textOnly / leftIcon / rightIcon / iconOnly",
      table: {
        defaultValue: {
          summary: "default",
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
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: "Accepted value xs / sm / base / lg / xl ",
      table: {
        defaultValue: {
          summary: "base",
        },
      },
    },
    block: {
      type: "boolean",
      description:
        "To make button width full to parent div chnage boolean value to true",
      table: {
        defaultValue: {
          summary: "False",
        },
      },
    },
    disabled: {
      type: "boolean",
      description: "To make button disable",
      table: {
        defaultValue: {
          summary: "False",
        },
      },
    },
  },
};

export const Text = {
  render: (args) => ({
    components: {
      DdButton,
    },
    setup() {
      return { args };
    },
    template: `<dd-button title="button text" content="textOnly" type="secondary" v-bind="args"/>`,
  }),
  argTypes: {
    title: {
      description: "Change title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: "Accepted value xs / sm / base / lg / xl ",
      table: {
        defaultValue: {
          summary: "base",
        },
      },
    },
    block: {
      type: "boolean",
      description:
        "To make button width full to parent div chnage boolean value to true",
      table: {
        defaultValue: {
          summary: "False",
        },
      },
    },
    disabled: {
      type: "boolean",
      description: "To make button disable",
      table: {
        defaultValue: {
          summary: "False",
        },
      },
    },
    type: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "danger"],
      description:
        "By default button type is color less so change the props default / primary / tertiary / danger",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    content: {
      control: { type: "select" },
      options: ["textOnly", "leftIcon", "rightIcon", "iconOnly"],
      description:
        "By default button type is simple button so change the props textOnly / leftIcon / rightIcon / iconOnly",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
  },
};

export const leftIcon = {
  render: (args) => ({
    components: {
      DdButton,
    },
    setup() {
      return { args };
    },
    template: `<dd-button title="button text" content="leftIcon" type="secondary" icon="Circle" v-bind="args"/>`,
  }),
  argTypes: {
    title: {
      description: "Change title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: "Accepted value xs / sm / base / lg / xl ",
      table: {
        defaultValue: {
          summary: "base",
        },
      },
    },
    block: {
      type: "boolean",
      description:
        "To make button width full to parent div chnage boolean value to true",
      table: {
        defaultValue: {
          summary: "False",
        },
      },
    },
    disabled: {
      type: "boolean",
      description: "To make button disable",
      table: {
        defaultValue: {
          summary: "False",
        },
      },
    },
    type: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "danger"],
      description:
        "By default button type is color less so change the props default / primary / tertiary / danger",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    content: {
      control: { type: "select" },
      options: ["textOnly", "leftIcon", "rightIcon", "iconOnly"],
      description:
        "By default button type is simple button so change the props textOnly / leftIcon / rightIcon / iconOnly",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
  },
};

export const rightIcon = {
  render: (args) => ({
    components: {
      DdButton,
    },
    setup() {
      return { args };
    },
    template: `<dd-button title="button text" content="rightIcon" type="danger" icon="Circle" v-bind="args"/>`,
  }),
  argTypes: {
    title: {
      description: "Change title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: "Accepted value xs / sm / base / lg / xl ",
      table: {
        defaultValue: {
          summary: "base",
        },
      },
    },
    block: {
      type: "boolean",
      description:
        "To make button width full to parent div chnage boolean value to true",
      table: {
        defaultValue: {
          summary: "False",
        },
      },
    },
    disabled: {
      type: "boolean",
      description: "To make button disable",
      table: {
        defaultValue: {
          summary: "False",
        },
      },
    },
    type: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "danger"],
      description:
        "By default button type is color less so change the props default / primary / tertiary / danger",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    content: {
      control: { type: "select" },
      options: ["textOnly", "leftIcon", "rightIcon", "iconOnly"],
      description:
        "By default button type is simple button so change the props textOnly / leftIcon / rightIcon / iconOnly",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
  },
};

Text.parameters = {
  docs: {
    source: {
      code: ` <dd-button title="button text" content="textOnly" type="secondary" />`,
    },
  },
};

leftIcon.parameters = {
  docs: {
    source: {
      code: `<dd-button title="button text" content="leftIcon" type="secondary" icon="Circle"/>`,
    },
  },
};

rightIcon.parameters = {
  docs: {
    source: {
      code: `<dd-button title="button text" content="rightIcon" type="danger" icon="Circle"/>`,
    },
  },
};
