// import MyButton from './Button.vue';
import ddCard from "./index.vue"
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Card',
  component: ddCard,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {

    content: {
      description: "You can simply pass the content in content prop",
      table: {
        defaultValue: {
          summary: ""
        }
      }
    },
    title: {
      description: "You can use  header title prop to set heading",
      table: {
        defaultValue: {
          summary: ""
        }
      }
    },
    header:{
      type: 'boolean',
      description: "If you want to use header in cards simple pass the props to use it",
      table:{
        defaultValue:{
          summary: false
        }
      }
    },
    subTitle: {
      description: "You can use  header sub title prop to set sub heading",
      table: {
        defaultValue: {
          summary: ""
        }
      }
    },
    elevation: {
      control: { type: 'select' },
      options: ["none", "sm", "lg", 'xl'],
      description: "Change the elevtion of card",
      table: {
        defaultValue: {
          summary: "none"
        }
      }
    },
    class: {

      description: "Change color value as per the requirement primary / danger / success / white",
      table: {
        defaultValue: {
          summary: "-"
        }
      }
    },
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = ( args ) => ( {
  // Components used in your story `template` are defined in the `components` object
  components: { ddCard },
  setup () {
    return { args }

  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-card  v-bind="args" />  ',
} )



export const Default = Template.bind( {} )
export const DefaultHeader = Template.bind( {} )
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  content: 'The face of the moon in shadow.',
  elevation: 'sm'
};
DefaultHeader.args = {
  title: "Heading",
  subTitle: "Sub Heading",
  header: true,
  content: 'The face of the moon in shadow.',
  elevation: 'sm'
}


