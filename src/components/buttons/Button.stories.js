// import MyButton from './Button.vue';
import DdButton from "./index.vue"
import { action } from "@storybook/addon-actions"

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: DdButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: { 
      control:{
        type: 'select' 
      },
      options: ['primary','danger', 'warning', 'white'],
      description: "Change color value as per the requirement primary / danger  / white",
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
          summary: "Button"
        }
      }
     },
    // onClick: {
    //   action: "clicked"
    // },
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
    block:{
      type: 'boolean',
      description: "To make button width full to parent div chnage boolean value to true",
      table:{
        defaultValue:{
          summary: "False"
        }
      }
    },
    type: {
      control: { type: 'select' },
      options: ['default','round','text', 'circle',],
       description: "By default button type is color less so change the props default / round / text / circle",
      table:{
        defaultValue:{
          summary: "default"
        }
      }
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const onClickMethod =  (() => action("clicked"))
    return { args, onClickMethod };

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-button @click="buttonClickEvent" v-bind="args" />  ',
});



export const Primary = Template.bind({});
export const Danger = Template.bind({});
export const White = Template.bind({});
export const Warning = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
console.log(Primary.args, "Primary")
Primary.args = {
  color: 'primary',
  title: 'Primary button',
  size: 'sm',
  type: 'default'
};
Danger.args = {
  color: 'danger',
  title: 'Danger button',
  size: 'sm',
  type: 'default'
};
White.args = {
  color: 'white',
  title: 'default button',
  size: 'sm',
  type: 'default'
};
Warning.args = {
  color: 'warning',
  title: 'Warning button',
  size: 'sm',
  type: 'default'
};


