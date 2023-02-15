import DdSelect from "./index.vue"
import { action } from "@storybook/addon-actions"
import {ref} from 'vue'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Select',
  component: DdSelect,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    title:{
      description: "Change title value as per the requirement",
      table:{
        defaultValue:{
          summary: "Select"
        }
      }
     },
     placeholder:{
      description: "Change placeholder value as per the requirement",
      table:{
        defaultValue:{
          summary: "Select option"
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
    checkIcon: {
      control: { type: 'select' },
      options: ["left", "right", "none"],
      description: "Accepted value left / right / none",
      table:{
        defaultValue:{
          summary: "base"
        }
      }
    },
    showAvatar: {
      description: "Trigger to show Avatar",
      table: {
          defaultValue: {
              summary: "-"
          }
      }
  },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdSelect },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const onClickMethod =  (() => action("clicked"))
    const selected = ref('')
    const value = ref([{
      name: 'kamil',
      value: 1,
      avatar:"https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }])
    return { value, selected, args, onClickMethod };

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-select  v-bind="args" v-model="selected"  :options="value"  />  ',
});



export const Primary = Template.bind({});
export const Online = Template.bind({});
export const Avatar = Template.bind({});
export const CheckLeft = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  title: 'Primary Select',
  placeholder: "Select Option"
};
Online.args = {
  title: 'Online Select',
  placeholder: "Select Option",
  showOnline: true,
};
Avatar.args = {
  title: 'Avatar Select',
  placeholder: "Select Option",
  showAvatar: true,
};
CheckLeft.args = {
  title: 'Check Icon Left',
  placeholder: "Select Option",
  checkIcon: 'left',
};


