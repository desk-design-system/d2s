import DdInput from "./index.vue";
import { action } from "@storybook/addon-actions";
import DdButton from "../buttons/index.vue";
import DdValidator from "../validations/ddForm.vue";
import { defineRule } from 'vee-validate';
import { ref, computed, onMounted } from "vue";
import AllRules from "@vee-validate/rules";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Input",
  component: DdInput,
  tags: ['autodocs'],
};



export const Default = {
  render: (args) => ({
    components: { DdInput, DdValidator },
    setup() {

      const onClickMethod = () => action("clicked");
      onMounted(()=>{
        Object.keys(AllRules).forEach((rule) => {
          defineRule(rule, AllRules[rule]);
        });
      })

      const selected = ref("");
      const rules = computed(()=> {
        return args.rules ?? ''
      })
      const editInput = () => {
        selected.value = selected.value.toUpperCase();
      };
      const resetInput = () => {
        selected.value = "";
      };


      return { selected, args, rules,  editInput, resetInput, onClickMethod };
    },
    template: `<dd-validator> <dd-input v-model="selected" :label="args.label" name="Default input field" :size="args.size" :placeholder="args.placeholder" :prefix="args.prefix" :suffix="args.suffix" :icon="args.icon" :rules="rules" :closeButton="args.closeButton" :successIcon="args.successIcon" :closeIcon="args.closeIcon" :disabled="args.disabled" :hintText="args.hintText" :hintTextColor="args.hintTextColor" :hintTextBorder="args.hintTextBorder" :type="args.type" :Border="args.Border" /> </dd-validator>`,
  }),
  argTypes: {
    label: {
      description: "Change label value as per the requirement",
      type: { name: "string", required: true },
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
    template: `<dd-input v-model="selected" label="Basic Input" prefix="true" icon="Search" v-bind="args" />`,
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
    template: `<dd-input v-model="selected" label="Basic Input" suffix icon="Search" v-bind="args" />`,
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
    template: `<dd-input v-model="selected" label="Basic Input" suffix type="password" v-bind="args" />`,
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
    <dd-button icon="Plus" suffix typ="secondary"></dd-button>
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

export const Validation = {
  render: (args) => ({
    components: { DdInput, DdValidator },
    setup() {
      const onClickMethod = () => action("clicked");
      const selected = ref("");
      const formRef = ref("")
      const editInput = () => {
        selected.value = selected.value.toUpperCase();
      };
      const resetInput = () => {
        selected.value = "";
      };
      const validate = ()=>{
        console.log("Inside");
        console.log("Form REf",formRef)
      }
      defineRule('required', (value) => {
        if (!value || value === '') {
          return 'This field is required';
        }
        return true;
      });

      return { selected, args, editInput, resetInput, onClickMethod, validate };
    },
    template: `<dd-validator ref="formRef">
    <dd-input prefix suffix v-model="selected" name="selected" rules="required" v-bind="args" @blur="validate" />
  </dd-validator>`,
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

export const CustomTextAndColor = {
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
    template: `<dd-input prefix suffix v-model="selected" name="selected" hintText="hint text here" hintTextColor="red" hintTextBorder="red" v-bind="args" />`,
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
      <dd-button icon="Plus" suffix typ="secondary"></dd-button>
      </template>
      </dd-input>`,
    },
  },
};

Validation.parameters = {
  docs: {
    source: {
      code: `<dd-validator>
      <dd-input prefix suffix v-model="selected" name="selected" rules="required" v-bind="args" />
    </dd-validator>`,
    },
  },
};

CustomTextAndColor.parameters = {
  docs: {
    source: {
      code: ` <dd-input prefix suffix v-model="selected" name="selected" label="Input Label" hintText="hint text here" hintTextColor="red" hintTextBorder="red" /> `,
    },
  },
};