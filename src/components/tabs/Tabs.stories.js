import DdTabs from "./index.vue"
import { action } from "@storybook/addon-actions"
import {ref} from 'vue'
import {
  ExclamationIcon,
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/vue/solid";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Tabs',
  component: DdTabs,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
     tabs:{
      description: "Pass data array in tabs and tabs should containe name and value",
      table:{
        defaultValue:{
          summary: "null"
        }
      }
     },
    type: {
      control: { type: 'select' },
      options: ["default", "pill"],
      description: "You chnage the style of the tabs by simle chnage gthe prop type value which accepte value default / pill",
      table:{
        defaultValue:{
          summary: "default"
        }
      }
    }, 
    borderBottom: {
      description: "In Default ui type if you want to show divider under tabs simple pass prop ",
      table: {
          defaultValue: {
              summary: false
          }
      }
  },
  icon: {
    description: "I Default ui type if you want to show icons before text tab simple pass prop ",
    table: {
        defaultValue: {
            summary: false
        }
    }
},
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdTabs },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const onClickMethod =  (() => action("clicked"))
    const selected = ref(1)
    const value = ref([
    {
      name: 'Tab 1',
      value: 1,
      icon: ExclamationIcon
    },
    {
      name: 'Tab 2',
      value: 2,
      icon: XCircleIcon
    },
    {
      name: 'Tab 3',
      value: 3,
      icon: CheckCircleIcon
    },
    {
      name: 'Tab 4',
      value: 4,
      icon: InformationCircleIcon
    },
  ])
    return { value, selected, args, onClickMethod };

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-tabs  v-bind="args" v-model="selected"  :tabs="value"  />  ',
});



export const Default = Template.bind({});
export const Pill = Template.bind({});
export const WithBorder = Template.bind({});
export const Icons = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Pill.args = {
  type: 'pill',
};
WithBorder.args = {
  borderBottom: true
};
Icons.args = {
  icon: true,
};


