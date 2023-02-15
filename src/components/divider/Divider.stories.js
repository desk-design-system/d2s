import DdDivider from "./index.vue"
import { action } from "@storybook/addon-actions"
import {ref} from 'vue'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Divider',
  component: DdDivider,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    title: {
      description: "Change title value as per the requirement",
      table: {
          defaultValue: {
              summary: "Content"
          }
      }
  },
    placement: {
      control: { type: 'select' },
      options: ['center', 'start'],
      description: "Accepted value start / center",
      table:{
        defaultValue:{
          summary: "center"
        }
      }
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdDivider },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {  args,};

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-divider  v-bind="args"  />  ',
});




export const Title = Template.bind({});
export const TitleLeft = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Title.args = {
  title: 'Content',
};
TitleLeft.args = {
  title: 'Content',
  placement: 'start'
};


