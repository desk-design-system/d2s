import DdDropdown from "./index.vue"
import {ref} from 'vue'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Dropdown',
  component: DdDropdown,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    title:{
      description: "Change title value as per the requirement or you can use the slot to customize your title",
      table:{
        defaultValue:{
          summary: "''"
        }
      }
     },
     options:{
      description: "Pass data array in options",
      table:{
        defaultValue:{
          summary: "null"
        }
      }
     },
    type: {
      control: { type: 'select' },
      options: ["button", "text"],
      description: "Accepted value button / text",
      table:{
        defaultValue:{
          summary: "text"
        }
      }
    },
    placement: {
      control: { type: 'select' },
      options: ["right", "left"],
      description: "You can chnage the position of dropdown menu ",
      table:{
        defaultValue:{
          summary: "right"
        }
      }
    },
    color: {
      control: { type: 'select' },
      options: ["primary", "danger", "white"],
      description: "You can chnage the color of button primary / danger / white",
      table:{
        defaultValue:{
          summary: "default"
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
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdDropdown },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const onClickMethod =  (() => action("clicked"))
    const selected = ref('')
    const value = ref([
      {
      name: 'DropDown Menu 1',
      value: 1,
    },
    {
      name: 'DropDown Menu 2',
      value: 2,
    },
    {
      name: 'DropDown Menu 3',
      value: 3,
    },
    {
      name: 'DropDown Menu 4',
      value: 4,
    },
  ])
    return { value, selected, args, onClickMethod };

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-dropdown  v-bind="args" v-model="selected"  :options="value"  />  ',
});



export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Text = Template.bind({});
export const Icon = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  title: 'Drop Down',
};
Primary.args = {
  title: 'Drop Down',
 color: 'primary'
};
Text.args = {
  title: 'Drop Down',
  type: 'text',
  size:"xs",
  placement: "left"
};


