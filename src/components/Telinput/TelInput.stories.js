import DdTelInput from "./index.vue"
import { action } from "@storybook/addon-actions"
import {ref} from 'vue'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/TelInput',
  component: DdTelInput,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
     config:{
      description: "You can pass the props and events in Config object",
      table:{
        defaultValue:{
          summary: "() => {}"
        }
      }
     },
    
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdTelInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const onClickMethod =  (() => action("clicked"))
    const selected = ref('')
    return { selected, args, onClickMethod };

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-tel-input  v-bind="args" v-model="selected" />',
});



export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args


