// import MyButton from './Button.vue';
import ImgAvatar from "./index.vue"
import { action } from "@storybook/addon-actions"

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/ImgAvatar',
  component: ImgAvatar,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['mini','small', 'medium', 'large','xLarge',],
      description: "Accepted value mini / small / medium / large / xLarge ",
      table:{
        defaultValue:{
          summary: "medium"
        }
      }
    },
    type: {
      control: { type: 'select' },
      options: ['default','group',],
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
  components: { ImgAvatar },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const onClickMethod =  (() => action("clicked"))
    return { args, onClickMethod };

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<img-avatar @click="onClickMethod" v-bind="args" />  ',
});



export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
console.log(Primary.args, "small")
Primary.args = {
  size: 'small',
  type: 'default'
};


