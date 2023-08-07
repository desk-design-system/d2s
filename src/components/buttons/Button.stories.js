// import MyButton from './Button.vue';
import DdButton from "./index.vue";
import { action } from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: DdButton,
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
    template: `<dd-button title="Default Button" color="white" size="base" type="default" />`,
  }),
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "danger", "warning", "white"],
      description:
        "Change color value as per the requirement primary / danger  / white",
      table: {
        defaultValue: {
          summary: "-",
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
    type: {
      control: { type: "select" },
      options: ["default", "round", "text", "circle"],
      description:
        "By default button type is color less so change the props default / round / text / circle",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
  },
};

export const Round = {
  render: (args) => ({
    components: {
      DdButton,
    },
    setup() {
      return { args };
    },
    template: `<dd-button title="Default Button" color="danger" size="base" type="round" />`,
  }),
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "danger", "warning", "white"],
      description:
        "Change color value as per the requirement primary / danger  / white",
      table: {
        defaultValue: {
          summary: "-",
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
    type: {
      control: { type: "select" },
      options: ["default", "round", "text", "circle"],
      description:
        "By default button type is color less so change the props default / round / text / circle",
      table: {
        defaultValue: {
          summary: "default",
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
    template: `<dd-button title="Text Button" color="primary" size="base" type="text" />`,
  }),
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "danger", "warning", "white"],
      description:
        "Change color value as per the requirement primary / danger  / white",
      table: {
        defaultValue: {
          summary: "-",
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
    type: {
      control: { type: "select" },
      options: ["default", "round", "text", "circle"],
      description:
        "By default button type is color less so change the props default / round / text / circle",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
  },
};

export const Circle = {
  render: (args) => ({
    components: {
      DdButton,
    },
    setup() {
      return { args };
    },
    template: `<dd-button icon="Users" color="primary" size="base" type="circle" prefix />`,
  }),
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "danger", "warning", "white"],
      description:
        "Change color value as per the requirement primary / danger  / white",
      table: {
        defaultValue: {
          summary: "-",
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
    type: {
      control: { type: "select" },
      options: ["default", "round", "text", "circle"],
      description:
        "By default button type is color less so change the props default / round / text / circle",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
  },
};

Default.parameters = {
  docs: {
    source: {
      code: `<dd-button title="Default Button" color="white" size="base" type="default" />`,
    },
  },
};

Round.parameters = {
  docs: {
    source: {
      code: ` <dd-button title="Default Button" color="danger" size="base" type="round" />`,
    },
  },
};

Text.parameters = {
  docs: {
    source: {
      code: ` <dd-button title="Text Button" color="white" size="base" type="text" />`,
    },
  },
};

Circle.parameters = {
  docs: {
    source: {
      code: `<dd-button icon="Users" color="primary" size="base" type="circle" prefix />`,
    },
  },
};
