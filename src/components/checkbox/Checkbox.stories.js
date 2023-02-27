import DdCheckbox from "./index.vue"
import { ref } from 'vue'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Checkbox',
  component: DdCheckbox,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label:{
      description: "Change label value as per the requirement",
      table:{
        defaultValue:{
          summary: ""
        }
      }
     },
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = ( args ) => ( {
  // Components used in your story `template` are defined in the `components` object
  components: { DdCheckbox },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    const selected = ref( '' )
    return {  selected, args }

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-checkbox  v-bind="args" v-model="selected"  />  ',
} )

export const Primary = Template.bind( {} )
export const Titleless = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  label: "CheckBox Label"
}
// Titleless.ar


