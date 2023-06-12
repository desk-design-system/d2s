import { inject } from "vue";
import DdButton from "../buttons/index.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
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
      type: "",
      closed: true,
      solved: true,
      modalWidth: "45%",
    };

    const showMessageBoxWarning = () => {
      modal
        .warning(
          "Delete Unit",
          "Are you sure you want to delete this unit from the multistore? This action cannot be undone",
          "",
          "Yes, Delete",
          "Close",
          true,
          true,
          "45%"
        )
        .then(() => console.log("accepted"))
        .catch(() => console.log("rejected"));
    };
    const showMessageBoxErrorOptions = () => {
      modal
        .error(options)
        .then(() => console.log("accepted"))
        .catch(() => console.log("rejected"));
    };
    const showMessageBoxSuccessOptions = () => {
      modal
        .success(options)
        .then(() => console.log("accepted"))
        .catch(() => console.log("rejected"));
    };

    const showMessageBoxInfoOptions = () => {
      modal
        .info(options)
        .then(() => console.log("accepted"))
        .catch(() => console.log("rejected"));
    };

    return { args, showMessageBoxWarning, showMessageBoxErrorOptions, showMessageBoxSuccessOptions, showMessageBoxInfoOptions };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<div> <dd-button color="warning" @click="showMessageBoxWarning()">button</dd-button> <dd-button color="danger" @click="showMessageBoxErrorOptions()">Options button</dd-button> <dd-button color="success" @click="showMessageBoxSuccessOptions()">Options button</dd-button> <dd-button color="white" @click="showMessageBoxInfoOptions()">Options button</dd-button> </div>',
});

export const Options = Template.bind({});
