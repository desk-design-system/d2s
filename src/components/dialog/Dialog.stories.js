// import MyButton from './Button.vue';
import DdDialog from "./index.vue";
import DdButton from "../buttons/index.vue";
import { action } from "@storybook/addon-actions";
import { ref } from "vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Molecules/Dialog",
  component: DdDialog,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

export const Default = {
  render: (args) => ({
    components: {
      DdDialog,
      DdButton,
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const show = ref(false);
      const OpenDialog = () => {
        show.value = true;
      };
      return { args, show, onClickMethod, OpenDialog };
    },
    template: `<dd-button title="Default Dialog" content="textOnly" type="secondary" @click="OpenDialog"/>
    <dd-dialog @close="onClickMethod" v-model="show" :title=args.title :header=args.header :saveTitle=args.saveTitle :closeTitle=args.closeTitle :modalWidth=args.modalWidth :position=args.position :footer=args.footer :color=args.color />`,
  }),
  argTypes: {
    title: {
      description: "Change header title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    header: {
      type: "boolean",
      description: "To show hide header pass header prop",
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    saveTitle: {
      description: "You change the title of footer save button",
      table: {
        defaultValue: {
          summary: "Save",
        },
      },
    },
    closeTitle: {
      description: "You change the title of footer close button",
      table: {
        defaultValue: {
          summary: "Close",
        },
      },
    },
    modalWidth: {
      description: "Change the width of the drawer",
      table: {
        defaultValue: {
          summary: "30%",
        },
      },
    },
    position: {
      description: "You change the position of drawer left / right",
      table: {
        defaultValue: {
          summary: "right",
        },
      },
    },
    footer: {
      type: "boolean",
      description: "To show footer pass footer prop",
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "danger"],
      description: "You can change the color of save button",
      table: {
        defaultValue: {
          summary: "primary",
        },
      },
    },
    headerClass: {
      description: "You can add the classes in the header of dialog",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    contentClass: {
      description: "You can add the classes in the content area of dialog",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    footerClass: {
      description: "You can add the classes in the footer of dialog",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
  },
};

export const HeaderLess = {
  render: (args) => ({
    components: {
      DdDialog,
      DdButton,
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const show = ref(false);
      const OpenDialog = () => {
        show.value = true;
      };
      return { args, show, onClickMethod, OpenDialog };
    },
    template: `<dd-button title="Header Less" content="textOnly" type="secondary" @click="OpenDialog"/>
    <dd-dialog @close="onClickMethod" v-model="show" v-bind="args" content="Lorem ipsum dolor sit amet." title="Header Less" :header="false" color="primary" modalWidth="100%" />`,
  }),
  argTypes: {
    title: {
      description: "Change header title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    header: {
      type: "boolean",
      description: "To show hide header pass header prop",
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    saveTitle: {
      description: "You change the title of footer save button",
      table: {
        defaultValue: {
          summary: "Save",
        },
      },
    },
    closeTitle: {
      description: "You change the title of footer close button",
      table: {
        defaultValue: {
          summary: "Close",
        },
      },
    },
    modalWidth: {
      description: "Change the width of the drawer",
      table: {
        defaultValue: {
          summary: "30%",
        },
      },
    },
    position: {
      description: "You change the position of drawer left / right",
      table: {
        defaultValue: {
          summary: "right",
        },
      },
    },
    footer: {
      type: "boolean",
      description: "To show footer pass footer prop",
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "danger"],
      description: "You can change the color of save button",
      table: {
        defaultValue: {
          summary: "primary",
        },
      },
    },
    headerClass: {
      description: "You can add the classes in the header of dialog",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    contentClass: {
      description: "You can add the classes in the content area of dialog",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    footerClass: {
      description: "You can add the classes in the footer of dialog",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
  },
};

export const FooterLess = {
  render: (args) => ({
    components: {
      DdDialog,
      DdButton,
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const show = ref(false);
      const OpenDialog = () => {
        show.value = true;
      };
      return { args, show, onClickMethod, OpenDialog };
    },
    template: `<dd-button title="Footer Less" content="textOnly" type="secondary" @click="OpenDialog"/>
    <dd-dialog @close="onClickMethod" v-model="show" v-bind="args" content="Lorem ipsum dolor sit amet." title="Footer Less" :footer="false" color="primary" modalWidth="100%" />`,
  }),
  argTypes: {
    title: {
      description: "Change header title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    header: {
      type: "boolean",
      description: "To show hide header pass header prop",
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    saveTitle: {
      description: "You change the title of footer save button",
      table: {
        defaultValue: {
          summary: "Save",
        },
      },
    },
    closeTitle: {
      description: "You change the title of footer close button",
      table: {
        defaultValue: {
          summary: "Close",
        },
      },
    },
    modalWidth: {
      description: "Change the width of the drawer",
      table: {
        defaultValue: {
          summary: "30%",
        },
      },
    },
    position: {
      description: "You change the position of drawer left / right",
      table: {
        defaultValue: {
          summary: "right",
        },
      },
    },
    footer: {
      type: "boolean",
      description: "To show footer pass footer prop",
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "danger"],
      description: "You can change the color of save button",
      table: {
        defaultValue: {
          summary: "primary",
        },
      },
    },
    headerClass: {
      description: "You can add the classes in the header of dialog",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    contentClass: {
      description: "You can add the classes in the content area of dialog",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    footerClass: {
      description: "You can add the classes in the footer of dialog",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
  },
};

export const CardOnly = {
  render: (args) => ({
    components: {
      DdDialog,
      DdButton,
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const show = ref(false);
      const OpenDialog = () => {
        show.value = true;
      };
      return { args, show, onClickMethod, OpenDialog };
    },
    template: `<dd-button title="Card Only" content="textOnly" type="secondary" @click="OpenDialog"/>
    <dd-dialog @close="onClickMethod" v-model="show" v-bind="args" content="Lorem ipsum dolor sit amet." title="Card Only" :footer="false" :header="false" color="primary" modalWidth="100%" />`,
  }),
  argTypes: {
    title: {
      description: "Change header title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    header: {
      type: "boolean",
      description: "To show hide header pass header prop",
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    saveTitle: {
      description: "You change the title of footer save button",
      table: {
        defaultValue: {
          summary: "Save",
        },
      },
    },
    closeTitle: {
      description: "You change the title of footer close button",
      table: {
        defaultValue: {
          summary: "Close",
        },
      },
    },
    modalWidth: {
      description: "Change the width of the drawer",
      table: {
        defaultValue: {
          summary: "30%",
        },
      },
    },
    position: {
      description: "You change the position of drawer left / right",
      table: {
        defaultValue: {
          summary: "right",
        },
      },
    },
    footer: {
      type: "boolean",
      description: "To show footer pass footer prop",
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "danger"],
      description: "You can change the color of save button",
      table: {
        defaultValue: {
          summary: "primary",
        },
      },
    },
    headerClass: {
      description: "You can add the classes in the header of dialog",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    contentClass: {
      description: "You can add the classes in the content area of dialog",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    footerClass: {
      description: "You can add the classes in the footer of dialog",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
  },
};

HeaderLess.parameters = {
  docs: {
    source: {
      code: `<dd-dialog @close="onClickMethod" v-model="show" v-bind="args" content="Lorem ipsum dolor sit amet." title="Header" :header="false" color="primary" modalWidth="100%" />`, 
    },
  },
};

FooterLess.parameters = {
  docs: {
    source: {
      code: `<dd-dialog @close="onClickMethod" v-model="show" v-bind="args" content="Lorem ipsum dolor sit amet." title="Header" :footer="false" color="primary" modalWidth="100%" />`, 
    },
  },
};

CardOnly.parameters = {
  docs: {
    source: {
      code: `<dd-dialog @close="onClickMethod" v-model="show" v-bind="args" content="Lorem ipsum dolor sit amet." title="Header" :header="false" :footer="false" color="primary" modalWidth="100%" />`, 
    },
  },
};