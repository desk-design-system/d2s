import DdInput from "./index.vue"
import { action } from "@storybook/addon-actions"

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: DdInput,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    description: {
      description: "Helping Text",
      table:{
        defaultValue:{
          summary: "-"
        }
      }
    },
    optional: {
      description: "optional",
      table:{
        defaultValue:{
          summary: "-"
        }
      }
    },
    sort: {
      description: "sorting",
      table:{
        defaultValue:{
          summary: "-"
        }
      }
    },
    shortCut: {
      description: "Quick Search",
      table:{
        defaultValue:{
          summary: "-"
        }
      }
    },
    addOn: {
      description: "Add Https with Field value",
      table:{
        defaultValue:{
          summary: "-"
        }
      }
    },
    sign: {
      description: "Sign",
      table:{
        defaultValue:{
          summary: "-"
        }
      }
    },
    currency: {
      description: "Currency",
      table:{
        defaultValue:{
          summary: "-"
        }
      }
    },
    disabled: {
      description: "Fields Disable",
      table:{
        defaultValue:{
          summary: "-"
        }
      }
    },
    color: { 
      description: "Change color value as per the requirement",
      table:{
        defaultValue:{
          summary: "-"
        }
      }
     },
    title:{
      description: "Change title value as per the requirement",
      table:{
        defaultValue:{
          summary: "-"
        }
      }
     },
    size: {
      control: { type: 'select' },
      options: ['xs','sm', 'base', 'lg','xl',],
      description: "Accepted value xs / sm / base / lg / xl ",
      table:{
        defaultValue:{
          summary: "base"
        }
      }
    },
    type: {
      control: { type: 'select' },
      options: ['text'],
       description: "By default avatar type is color less so change the props default / group ",
      table:{
        defaultValue:{
          summary: "-"
        }
      }
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const onClickMethod =  (() => action("clicked"))
    return { args, onClickMethod };

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-input v-bind="args" /> ',
});



export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  size: 'sm',
  type: 'text',
  color: '',
  title: 'Input Field',
  currencyTitle:["USD", "CA", "EU"],
  currencyName:["United States", "Canada", "Mexico"],
  shortCut: "⌘K",
  sort: "Sort",
  sign: "$",
  currency: "USD",
  addOn: "http://",
  optional: "Optional",
  modelValue: "",
  description: "We'll only use  for spam."
};


