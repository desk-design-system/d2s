import DdAutoSearch from "./index.vue"
import { action } from "@storybook/addon-actions"
import { ref, computed } from 'vue'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Auto Search',
  component: DdAutoSearch,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: {
      description: "Change label value as per the requirement",
      table: {
        defaultValue: {
          summary: null
        }
      }
    },
    placeholder: {
      description: "Change placeholder value as per the requirement",
      table: {
        defaultValue: {
          summary: "Search"
        }
      }
    },
    options: {
      description: "Pass data array in options",
      table: {
        defaultValue: {
          summary: null
        }
      }
    },
    prefix:{
      type: 'boolean',
      description: "To set icon in Suffix you should pass the value True",
      table:{
        defaultValue:{
          summary: false
        }
      }
    },
    suffix:{
      type: 'boolean',
      description: "To set icon in Suffix you should pass the value True",
      table:{
        defaultValue:{
          summary: false
        }
      }
    },
    icon: {
      control: { type: 'select' },
      options: ["Search", "ArrowDown", "ArrowUp"],
      description: "Accepted value's are icon names available in D2S",
      table: {
        defaultValue: {
          summary: null
        }
      }
    },
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = ( args ) => ( {
  // Components used in your story `template` are defined in the `components` object
  components: { DdAutoSearch },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    const onClickMethod = ( () => action( "clicked" ) )
    const query = ref( '' )
    const filteredData = computed( () =>

      query.value === ''
        ? []
        : people.filter( ( person ) => {
          return person.name.toLowerCase().includes( query.value.toLowerCase() )
        } )
    )

    const people = [
      { value: 1, name: 'Leslie Alexander' },
      { value: 2, name: 'Aeslie Blexander' },
      { value: 3, name: 'Ceslie Dlexander' },
      { value: 4, name: 'Eeslie Flexander' },
      { value: 5, name: 'Geslie Hlexander' },
      { value: 6, name: 'Ieslie Jlexander' },
      { value: 7, name: 'Jeslie KJlexander' },
      // More people...
    ]
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
    ] )
    return { value, selected, args,filteredData, people, onClickMethod, query }

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-autoSearch  v-bind="args" v-model="selected"  :options="filteredData" @searchQuery="query = $event"  />  ',
} )



export const Basic = Template.bind( {} )
export const PrefixIcon = Template.bind( {} )
export const SuffixIcon = Template.bind( {} )


// export const CheckLeft = Template.bind( {} )
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Basic.args = {
  Label: 'Basic Auto Search',
};
PrefixIcon.args = {
  Label: 'Primary Select',
  suffix: true,
  icon: 'Search'
};
SuffixIcon.args = {
  Label: 'Primary Select',
  prefix: true,
  icon: 'Search'
};





