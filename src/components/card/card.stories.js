// import MyButton from './Button.vue';
import ddCard from "./index.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Card",
  component: ddCard,
  tags: ['autodocs'],
};

export const Default = {
  render: (args) => ({
    components: {
      ddCard,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-card :content=args.content :elevation=args.elevation :headerX=args.headerX :headerY=args.headerY :x=args.x :y=args.y :header=args.header :title=args.title :subTitle=args.subTitle :className=args.className :rounded=args.rounded /> `,
  }),
  argTypes: {
    content: {
      description: "You can simply pass the content in content prop",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    title: {
      description: "You can use  header title prop to set heading",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    header: {
      type: "boolean",
      description:
        "If you want to use header in cards simple pass the props to use it",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    subTitle: {
      description: "You can use  header sub title prop to set sub heading",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    elevation: {
      control: { type: "select" },
      options: ["none", "sm", "lg", "xl"],
      description: "Change the elevtion of card",
      table: {
        defaultValue: {
          summary: "none",
        },
      },
    },
    class: {
      description:
        "Change color value as per the requirement primary / danger / success / white",
      table: {
        defaultValue: {
          summary: "-",
        },
      },
    },
  },
};

export const DefaultHeader = {
  render: (args) => ({
    components: {
      ddCard,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-card content='The face of the moon in shadow.' elevation='sm' title="Heading" subTitle="Sub Heading" header="true" v-bind="args"/> `,
  }),
  argTypes: {
    content: {
      description: "You can simply pass the content in content prop",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    title: {
      description: "You can use  header title prop to set heading",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    header: {
      type: "boolean",
      description:
        "If you want to use header in cards simple pass the props to use it",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    subTitle: {
      description: "You can use  header sub title prop to set sub heading",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    elevation: {
      control: { type: "select" },
      options: ["none", "sm", "lg", "xl"],
      description: "Change the elevtion of card",
      table: {
        defaultValue: {
          summary: "none",
        },
      },
    },
    class: {
      description:
        "Change color value as per the requirement primary / danger / success / white",
      table: {
        defaultValue: {
          summary: "-",
        },
      },
    },
  },
};

DefaultHeader.parameters = {
  docs: {
    source: {
      code: ` <dd-card content='The face of the moon in shadow.' elevation='sm' title="Heading" subTitle="Sub Heading" header="true" /> `,
    },
  },
};
