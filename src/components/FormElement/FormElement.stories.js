import DdFormElement from "./index.vue";
import DdInput from "../input/index.vue";
import { ref } from "vue";

export default {
  title: "Atoms/FormElement",
  component: DdFormElement,
  tags: ["autodocs"],
};

export const Default = {
  render: (args) => ({
    components: {
      DdFormElement,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-form-element :title=args.title :description=args.description :size=args.size :hintTextColor=args.hintTextColor :counter=args.counter /> `,
  }),
  argTypes: {
    label: {
      description: "Set title for wrapper",
      table: {
        defaultValue: {
          summary: "String",
        },
      },
    },
    size: {
      control: { type: "select" },
      options: ["base", "lg", "flexible"],
      description: "Accepted value base, lg, flexible",
      table: {
        defaultValue: {
          summary: "base",
        },
      },
    },
    description: {
      description: "Set title for wrapper",
      table: {
        defaultValue: {
          summary: "String",
        },
      },
    },
    hintTextColor: {
      description:
        "Set text error state when need pass error in prop for red color",
      table: {
        defaultValue: {
          summary: "String",
        },
      },
    },
    counter: {
      description: "Set counter for textarea pass 0/500. Only work for flexible size",
      table: {
        defaultValue: {
          summary: "String",
        },
      },
    },
    Slot: {
      description: "There slot between title and description",
      table: {
        defaultValue: {
          summary: "Slot",
        },
      },
    },
  },
};

export const WrapperWithSlot = {
  render: (args) => ({
    components: {
      DdFormElement,
      DdInput,
    },
    setup() {
      const selected = ref("");
      return {
        args,
        selected,
      };
    },
    template: ` <dd-form-element title="Title" description="Extra message or notification." size="lg">
      <dd-input v-model="selected" />
    </dd-form-element> `,
  }),
  argTypes: {
    title: {
      description: "Set title for wrapper",
      table: {
        defaultValue: {
          summary: "String",
        },
      },
    },
    size: {
      control: { type: "select" },
      options: ["base", "lg", "flexible"],
      description: "Accepted value base, lg, flexible",
      table: {
        defaultValue: {
          summary: "base",
        },
      },
    },
    description: {
      description: "Set title for wrapper",
      table: {
        defaultValue: {
          summary: "String",
        },
      },
    },
    Slot: {
      description: "There slot between title and description",
      table: {
        defaultValue: {
          summary: "Slot",
        },
      },
    },
  },
};

export const FlexibleWithSlot = {
  render: (args) => ({
    components: {
      DdFormElement,
      DdInput,
    },
    setup() {
      const selected = ref("");
      return {
        args,
        selected,
      };
    },
    template: ` <dd-form-element title="Title" description="Extra message or notification." size="flexible">
      <div>
      <div class="dd-mb-2">
      <dd-input v-model="selected" label="First Name" class="dd-mb-2" />
      <dd-input v-model="selected" label="Last Name" />
      </div>
      <div class="dd-mb-2">
      <dd-input v-model="selected" class="dd-mb-2" label="Phone Number" />
      <dd-input v-model="selected" label="Password" />
      </div>
      </div>
    </dd-form-element> `,
  }),
  argTypes: {
    title: {
      description: "Set title for wrapper",
      table: {
        defaultValue: {
          summary: "String",
        },
      },
    },
    size: {
      control: { type: "select" },
      options: ["base", "lg", "flexible"],
      description: "Accepted value base, lg, flexible",
      table: {
        defaultValue: {
          summary: "base",
        },
      },
    },
    description: {
      description: "Set title for wrapper",
      table: {
        defaultValue: {
          summary: "String",
        },
      },
    },
    Slot: {
      description: "There slot between title and description",
      table: {
        defaultValue: {
          summary: "Slot",
        },
      },
    },
  },
};

WrapperWithSlot.parameters = {
  docs: {
    source: {
      code: ` <dd-form-element title="Title" description="Extra message or notification." size="lg">
        <dd-input v-model="selected" />
      </dd-form-element>  `,
    },
  },
};

FlexibleWithSlot.parameters = {
  docs: {
    source: {
      code: ` <dd-form-element title="Title" description="Extra message or notification." size="flexible">
        <div>
        <div class="dd-mb-2">
        <dd-input v-model="selected" label="First Name" class="dd-mb-2" />
        <dd-input v-model="selected" label="Last Name" />
        </div>
        <div class="dd-mb-2">
        <dd-input v-model="selected" class="dd-mb-2" label="Phone Number" />
        <dd-input v-model="selected" label="Password" />
        </div>
        </div>
      </dd-form-element> `,
    },
  },
};
