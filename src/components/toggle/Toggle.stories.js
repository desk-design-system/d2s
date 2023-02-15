import DdToggle from "./index.vue"
import { action } from "@storybook/addon-actions"
import {ref} from 'vue'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Toggle',
  component: DdToggle,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'base'],
      description: "Accepted value sm / base",
      table:{
        defaultValue:{
          summary: "base"
        }
      }
    },
    showUocn: {
      description: "Trigger to show icon",
      table: {
          defaultValue: {
              summary: "False"
          }
      }
  },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdToggle },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const onClickMethod =  (() => action("clicked"))
    const switchState = ref(false)
    return { switchState, args, onClickMethod };

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-toggle  v-bind="args"  v-model="switchState" />  ',
});



export const Primary = Template.bind({});
export const Icon = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
console.log(Primary.args, "Primary")
Primary.args = {
  size: 'base',
};
Icon.args = {
  showIcon: true,
};


