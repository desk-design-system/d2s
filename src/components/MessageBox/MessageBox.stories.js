import { inject } from "vue";
import DdButton from "../buttons/index.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Confirmation Modal",
  component: DdButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    title: {
      description: "Add modal Title",
      table: {
        defaultValue: {
          summary: "Delete Unit",
        },
      },
    },
    message: {
      description: "Add modal message",
      table: {
        defaultValue: {
          summary:
            "Are you sure you want to delete this unit from the multistore? This action cannot be undone",
        },
      },
    },
    saveTitle: {
      description: "Success button title",
      table: {
        defaultValue: {
          summary: "Yes, Delete",
        },
      },
    },
    closeTitle: {
      description: "Close button title",
      table: {
        defaultValue: {
          summary: "Close",
        },
      },
    },
    closed: {
      description: "show close button",
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    solved: {
      description: "show success button",
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    type: {
      description: "primary, succeess, warning, error types",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    modalWidth: {
      description: "Modal width",
      table: {
        defaultValue: {
          summary: "45%",
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

    return { args, showMessageBoxErrorOptions, showMessageBoxSuccessOptions };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<div><dd-button type="danger" @click="showMessageBoxErrorOptions()">Danger button</dd-button> <dd-button type="primary" @click="showMessageBoxSuccessOptions()">Primary button</dd-button></div>',
});

export const Options = Template.bind({});
