import DdInput from "./index.vue";
import { action } from "@storybook/addon-actions";
import DdButton from "../buttons/index.vue";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Input",
  component: DdInput,
};

export const Default = {
  render: (args) => ({
    components: { DdInput, DdButton },
    setup() {
      const onClickMethod = () => action("clicked");
      const selected = ref("");
      const editInput = () => {
        selected.value = selected.value.toUpperCase();
      };
      const resetInput = () => {
        selected.value = "";
      };

      return { selected, args, editInput, resetInput, onClickMethod };
    },
    template: `<dd-input v-model="selected" label="Basic Input"></dd-input>`,
  }),
  argTypes: {
    label: {
      description: "Change label value as per the requirement",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    placeholder: {
      description: "Change placeholder value as per the requirement",
      table: {
        defaultValue: {
          summary: "Select option",
        },
      },
    },
    prefix: {
      type: "boolean",
      description: "To set icon in Suffix you should pass the value True",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    suffix: {
      type: "boolean",
      description: "To set icon in Suffix you should pass the value True",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    icon: {
      control: { type: "select" },
      options: ["Search", "ArrowDown", "ArrowUp"],
      description: "Accepted value's are icon names available in D2S",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    rules: {
      control: { type: "select" },
      options: ["alpha", "max:6", "alpha_dash"],
      description:
        "You can simple add the validation by selecting any of the above pre defined rule",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    hintTextColor: {
      control: { type: "select" },
      options: ["red", "teal", "gray"],
      description: "select input color",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
  },
};

export const PrefixIcon = {
  render: (args) => ({
    components: { DdInput, DdButton },
    setup() {
      const onClickMethod = () => action("clicked");
      const selected = ref("");
      const editInput = () => {
        selected.value = selected.value.toUpperCase();
      };
      const resetInput = () => {
        selected.value = "";
      };

      return { selected, args, editInput, resetInput, onClickMethod };
    },
    template: `<dd-input v-model="selected" label="Basic Input" prefix="true" icon="Search" ></dd-input>`,
  }),
  argTypes: {
    label: {
      description: "Change label value as per the requirement",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    placeholder: {
      description: "Change placeholder value as per the requirement",
      table: {
        defaultValue: {
          summary: "Select option",
        },
      },
    },
    prefix: {
      type: "boolean",
      description: "To set icon in Suffix you should pass the value True",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    suffix: {
      type: "boolean",
      description: "To set icon in Suffix you should pass the value True",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    icon: {
      control: { type: "select" },
      options: ["Search", "ArrowDown", "ArrowUp"],
      description: "Accepted value's are icon names available in D2S",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    rules: {
      control: { type: "select" },
      options: ["alpha", "max:6", "alpha_dash"],
      description:
        "You can simple add the validation by selecting any of the above pre defined rule",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    hintTextColor: {
      control: { type: "select" },
      options: ["red", "teal", "gray"],
      description: "select input color",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
  },
};

export const SuffixIcon = {
  render: (args) => ({
    components: { DdInput, DdButton },
    setup() {
      const onClickMethod = () => action("clicked");
      const selected = ref("");
      const editInput = () => {
        selected.value = selected.value.toUpperCase();
      };
      const resetInput = () => {
        selected.value = "";
      };

      return { selected, args, editInput, resetInput, onClickMethod };
    },
    template: `<dd-input v-model="selected" label="Basic Input" suffix icon="Search" ></dd-input>`,
  }),
  argTypes: {
    label: {
      description: "Change label value as per the requirement",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    placeholder: {
      description: "Change placeholder value as per the requirement",
      table: {
        defaultValue: {
          summary: "Select option",
        },
      },
    },
    prefix: {
      type: "boolean",
      description: "To set icon in Suffix you should pass the value True",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    suffix: {
      type: "boolean",
      description: "To set icon in Suffix you should pass the value True",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    icon: {
      control: { type: "select" },
      options: ["Search", "ArrowDown", "ArrowUp"],
      description: "Accepted value's are icon names available in D2S",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    rules: {
      control: { type: "select" },
      options: ["alpha", "max:6", "alpha_dash"],
      description:
        "You can simple add the validation by selecting any of the above pre defined rule",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    hintTextColor: {
      control: { type: "select" },
      options: ["red", "teal", "gray"],
      description: "select input color",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
  },
};

export const Password = {
  render: (args) => ({
    components: { DdInput, DdButton },
    setup() {
      const onClickMethod = () => action("clicked");
      const selected = ref("");
      const editInput = () => {
        selected.value = selected.value.toUpperCase();
      };
      const resetInput = () => {
        selected.value = "";
      };

      return { selected, args, editInput, resetInput, onClickMethod };
    },
    template: `<dd-input v-model="selected" label="Basic Input" suffix type="password" ></dd-input>`,
  }),
  argTypes: {
    label: {
      description: "Change label value as per the requirement",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    placeholder: {
      description: "Change placeholder value as per the requirement",
      table: {
        defaultValue: {
          summary: "Select option",
        },
      },
    },
    prefix: {
      type: "boolean",
      description: "To set icon in Suffix you should pass the value True",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    suffix: {
      type: "boolean",
      description: "To set icon in Suffix you should pass the value True",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    icon: {
      control: { type: "select" },
      options: ["Search", "ArrowDown", "ArrowUp"],
      description: "Accepted value's are icon names available in D2S",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    rules: {
      control: { type: "select" },
      options: ["alpha", "max:6", "alpha_dash"],
      description:
        "You can simple add the validation by selecting any of the above pre defined rule",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    hintTextColor: {
      control: { type: "select" },
      options: ["red", "teal", "gray"],
      description: "select input color",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
  },
};

export const suffixButton = {
  render: (args) => ({
    components: { DdInput, DdButton },
    setup() {
      const onClickMethod = () => action("clicked");
      const selected = ref("");
      const editInput = () => {
        selected.value = selected.value.toUpperCase();
      };
      const resetInput = () => {
        selected.value = "";
      };

      return { selected, args, editInput, resetInput, onClickMethod };
    },
    template: `<dd-input v-model="selected" label="Basic Input">
    <template #suffix>
    <dd-button icon="Plus" suffix color="white"></dd-button>
    </template>
    </dd-input>`,
  }),
  argTypes: {
    label: {
      description: "Change label value as per the requirement",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    placeholder: {
      description: "Change placeholder value as per the requirement",
      table: {
        defaultValue: {
          summary: "Select option",
        },
      },
    },
    prefix: {
      type: "boolean",
      description: "To set icon in Suffix you should pass the value True",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    suffix: {
      type: "boolean",
      description: "To set icon in Suffix you should pass the value True",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    icon: {
      control: { type: "select" },
      options: ["Search", "ArrowDown", "ArrowUp"],
      description: "Accepted value's are icon names available in D2S",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    rules: {
      control: { type: "select" },
      options: ["alpha", "max:6", "alpha_dash"],
      description:
        "You can simple add the validation by selecting any of the above pre defined rule",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    hintTextColor: {
      control: { type: "select" },
      options: ["red", "teal", "gray"],
      description: "select input color",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
  },
};

Default.parameters = {
  docs: {
    source: {
      code: `<dd-input v-model="selected" label="Basic Input"></dd-input>`,
    },
  },
};
PrefixIcon.parameters = {
  docs: {
    source: {
      code: `<dd-input v-model="selected" label="Basic Input" prefix="true" icon="Search" ></dd-input>`,
    },
  },
};
SuffixIcon.parameters = {
  docs: {
    source: {
      code: `<dd-input v-model="selected" label="Basic Input" suffix icon="Search" ></dd-input>`,
    },
  },
};
Password.parameters = {
  docs: {
    source: {
      code: `<dd-input v-model="selected" label="Basic Input" suffix type="password" ></dd-input>`,
    },
  },
};
suffixButton.parameters = {
  docs: {
    source: {
      code: `<dd-input v-model="selected" label="Basic Input">
      <template #suffix>
      <dd-button icon="Plus" suffix color="white"></dd-button>
      </template>
      </dd-input>`,
    },
  },
};