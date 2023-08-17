import DdTabs from "./index.vue";
import { action } from "@storybook/addon-actions";
import { ref } from "vue";
import {
  ExclamationIcon,
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/vue/solid";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Molecules/Tabs",
  component: DdTabs,
};

export const Underline36 = {
  render: (args) => ({
    components: {
      DdTabs,
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const selected = ref(1);
      const value = ref([
        {
          name: "Tab 1",
          value: 1,
          icon: ExclamationIcon,
        },
        {
          name: "Tab 2",
          value: 2,
          icon: XCircleIcon,
        },
        {
          name: "Tab 3",
          value: 3,
          icon: CheckCircleIcon,
        },
        {
          name: "Tab 4",
          value: 4,
          icon: InformationCircleIcon,
        },
      ]);
      return { value, selected, args, onClickMethod };
    },
    template: `<dd-tabs v-model="selected" :tabs="value" v-bind="args" />`,
  }),
  argTypes: {
    tabs: {
      description:
        "Pass data array in tabs and tabs should containe name and value",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    type: {
      control: { type: "select" },
      options: ["underlined36", "underlined44", "pill"],
      description:
        "You chnage the style of the tabs by simle chnage gthe prop type value which accepte value default / pill",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    borderBottom: {
      description:
        "In Default ui type if you want to show divider under tabs simple pass prop and it doesnot work on type='pill' ",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    rightBadge: {
      description:
        "use rightBadge to add badge in tabs. It is using DdBadge component in D2s",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    change: {
      description:
        "return the selected tabs object and it also return the selected tabs object when page is mounted",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
  },
};

export const Underline44 = {
  render: (args) => ({
    components: {
      DdTabs,
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const selected = ref(1);
      const value = ref([
        {
          name: "Tab 1",
          value: 1,
          icon: ExclamationIcon,
        },
        {
          name: "Tab 2",
          value: 2,
          icon: XCircleIcon,
        },
        {
          name: "Tab 3",
          value: 3,
          icon: CheckCircleIcon,
        },
        {
          name: "Tab 4",
          value: 4,
          icon: InformationCircleIcon,
        },
      ]);
      return { value, selected, args, onClickMethod };
    },
    template: `<dd-tabs v-model="selected" :tabs="value" type="underlined44" v-bind="args" />`,
  }),
  argTypes: {
    tabs: {
      description:
        "Pass data array in tabs and tabs should containe name and value",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    type: {
      control: { type: "select" },
      options: ["underlined36", "underlined44", "pill"],
      description:
        "You chnage the style of the tabs by simle chnage gthe prop type value which accepte value default / pill",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    borderBottom: {
      description:
        "In Default ui type if you want to show divider under tabs simple pass prop ",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    rightBadge: {
      description:
        "use rightBadge to add badge in tabs. It is using DdBadge component in D2s",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

export const Pill = {
  render: (args) => ({
    components: {
      DdTabs,
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const selected = ref(1);
      const value = ref([
        {
          name: "Tab 1",
          value: 1,
          icon: ExclamationIcon,
        },
        {
          name: "Tab 2",
          value: 2,
          icon: XCircleIcon,
        },
        {
          name: "Tab 3",
          value: 3,
          icon: CheckCircleIcon,
        },
        {
          name: "Tab 4",
          value: 4,
          icon: InformationCircleIcon,
        },
      ]);
      return { value, selected, args, onClickMethod };
    },
    template: `<dd-tabs v-model="selected" :tabs="value" type="Pill" v-bind="args" />`,
  }),
  argTypes: {
    tabs: {
      description:
        "Pass data array in tabs and tabs should containe name and value",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    type: {
      control: { type: "select" },
      options: ["underlined36", "underlined44", "pill"],
      description:
        "You chnage the style of the tabs by simle chnage gthe prop type value which accepte value default / pill",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    borderBottom: {
      description:
        "In Default ui type if you want to show divider under tabs simple pass prop ",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    rightBadge: {
      description:
        "use rightBadge to add badge in tabs. It is using DdBadge component in D2s",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

export const UnderlinedFeatured = {
  render: (args) => ({
    components: {
      DdTabs,
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const selected = ref(1);
      const value = ref([
        {
          name: "Tab 1",
          value: 1,
          icon: ExclamationIcon,
        },
        {
          name: "Tab 2",
          value: 2,
          icon: XCircleIcon,
        },
        {
          name: "Tab 3",
          value: 3,
          icon: CheckCircleIcon,
        },
        {
          name: "Tab 4",
          value: 4,
          icon: InformationCircleIcon,
        },
      ]);
      return { value, selected, args, onClickMethod };
    },
    template: `<dd-tabs v-model="selected" :tabs="value" type="underlined44" rightBadge borderBottom v-bind="args" />`,
  }),
  argTypes: {
    tabs: {
      description:
        "Pass data array in tabs and tabs should containe name and value",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    type: {
      control: { type: "select" },
      options: ["underlined36", "underlined44", "pill"],
      description:
        "You chnage the style of the tabs by simle chnage gthe prop type value which accepte value default / pill",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    borderBottom: {
      description:
        "In Default ui type if you want to show divider under tabs simple pass prop ",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    rightBadge: {
      description:
        "use rightBadge to add badge in tabs. It is using DdBadge component in D2s",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

export const PillFeatured = {
  render: (args) => ({
    components: {
      DdTabs,
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const selected = ref(1);
      const value = ref([
        {
          name: "Tab 1",
          value: 1,
          icon: ExclamationIcon,
        },
        {
          name: "Tab 2",
          value: 2,
          icon: XCircleIcon,
        },
        {
          name: "Tab 3",
          value: 3,
          icon: CheckCircleIcon,
        },
        {
          name: "Tab 4",
          value: 4,
          icon: InformationCircleIcon,
        },
      ]);
      return { value, selected, args, onClickMethod };
    },
    template: `<dd-tabs v-model="selected" :tabs="value" type="pill" rightBadge v-bind="args" />`,
  }),
  argTypes: {
    tabs: {
      description:
        "Pass data array in tabs and tabs should containe name and value",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    type: {
      control: { type: "select" },
      options: ["underlined36", "underlined44", "pill"],
      description:
        "You chnage the style of the tabs by simle chnage gthe prop type value which accepte value default / pill",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    borderBottom: {
      description:
        "In Default ui type if you want to show divider under tabs simple pass prop ",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    rightBadge: {
      description:
        "use rightBadge to add badge in tabs. It is using DdBadge component in D2s",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

Underline36.parameters = {
  docs: {
    source: {
      code: `<dd-tabs v-model="selected" :tabs="value" />`,
    },
  },
};

Underline44.parameters = {
  docs: {
    source: {
      code: `<dd-tabs v-model="selected" :tabs="value" type="underlined44" />`,
    },
  },
};

Pill.parameters = {
  docs: {
    source: {
      code: `<dd-tabs v-model="selected" :tabs="value" type="pill" />`,
    },
  },
};

UnderlinedFeatured.parameters = {
  docs: {
    source: {
      code: `<dd-tabs v-model="selected" :tabs="value" type="underlined44" rightBadge borderBottom />`,
    },
  },
};

PillFeatured.parameters = {
  docs: {
    source: {
      code: `<dd-tabs v-model="selected" :tabs="value" type="pill" rightBadge />`,
    },
  },
};