import DdRadio from "./index.vue"
import { ref } from 'vue'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/RadioGroup',
  component: DdRadio,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    options: {
      description: "Pass data array in options",
      table: {
        defaultValue: {
          summary: "null"
        }
      }
    },
    list: {
      description: "Trigger to show Radio group in list style",
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = ( args ) => ( {
  // Components used in your story `template` are defined in the `components` object
  components: { DdRadio },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    const selected = ref( '' )
    const value = ref( [
      {
        name: 'Option 1',
        value: 1,
      },
      {
        name: 'Option 2',
        value: 2,
      },
      {
        name: 'Option 3',
        value: 3,
      },
      {
        name: 'Option 4',
        value: 4,
      },
    ] )
    return { value, selected, args }

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-radio  v-bind="args" v-model="selected"  :options="value"  />  ',
} )

export const Primary = Template.bind( {} )
export const List = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  list: false
}
List.args = {
  list: true
};


