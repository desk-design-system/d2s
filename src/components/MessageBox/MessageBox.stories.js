import DdButton from "../buttons/index.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
import { inject } from "vue";
export default {
  title: "Atoms/MessageBox",
  component: DdButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    message: {
      description: "Add modal Title",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    message: {
      description: "Add modal message",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    saveTitle: {
      description: "Success button title",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    closeTitle: {
      description: "Close button title",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    closed: {
      description: "show close button",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    solved: {
      description: "show success button",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    type: {
      description: "primary, succeess, warning, error types",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    modalWidth: {
      description: "Modal width",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
  },
};

const Template = (args) => ({
  components: { DdButton },
  setup() {
    const modal = inject("$modal");
    const options = {
      title: "Delete Unit",
      message:
        "Are you sure you want to delete this unit from the multistore? This action cannot be undone",
      saveTitle: "Yes, Delete",
      closeTitle: "Close",
      type: "Warning",
      closed: true,
      solved: true,
      modalWidth: "45%",
    };

    const showModalBox = () => {
      modal
        .warning(options)
        .then(() => console.log("accepted"))
        .catch(() => console.log("rejected"));
    };

    // OR can also use it as

    const showModalBoxString = () => {
      modal
        .warning(
          "Delete Unit",
          "Are you sure you want to delete this unit from the multistore? This action cannot be undone",
          "Yes, Delete",
          "Close",
          "Warning",
          true,
          "45%",
          true
        )
        .then(() => console.log("accepted"))
        .catch(() => console.log("rejected"));
    };

    return { args, options, showModalBox };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<dd-button :color="options.type.toLocaleLowerCase()" @click="showModalBox()">{{ options.type }}</dd-button>',
});

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
