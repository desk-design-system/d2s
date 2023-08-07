import DdAvatar from "./index.vue";
import { action } from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Avatar",
  component: DdAvatar,
};

export const Default = {
  render: (args) => ({
    components: {
      DdAvatar,
    },
    setup() {
      const onClickMethod = () => action("clicked");
      return { args, onClickMethod };
    },
    template: `<dd-avatar srcLink="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />`,
  }),
  argTypes: {
    color: {
      description: "Change color value as per the requirement",
      table: {
        defaultValue: {
          summary: "-",
        },
      },
    },
    altName: {
      description: "Change title value as per the requirement",
      table: {
        defaultValue: {
          summary: "-",
        },
      },
    },
    srcLink: {
      description: "Change title value as per the requirement",
      table: {
        defaultValue: {
          summary: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        },
      },
    },
    title: {
      description: "Change title value as per the requirement",
      table: {
        defaultValue: {
          summary: "-",
        },
      },
    },
    size: {
      control: { type: "select" },
      options: ["mini", "small", "medium", "large", "xLarge"],
      description: "Accepted value mini / small / medium / large / xLarge ",
      table: {
        defaultValue: {
          summary: "medium",
        },
      },
    },
    type: {
      control: { type: "select" },
      options: ["default", "group"],
      description:
        "By default avatar type is color less so change the props default / group ",
      table: {
        defaultValue: {
          summary: "-",
        },
      },
    },
  },
};

Default.parameters = {
  docs: {
    source: {
      code: `<dd-avatar srcLink="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />`,
    },
  },
};

