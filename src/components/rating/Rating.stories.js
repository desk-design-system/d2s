import Rating from "./index.vue"

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Rating',
  component: Rating,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    productRating: {
      control: {
        type: 'select'
      },
      options: [1, 2, 3, 4, 5],
      description: "Change rating values",
      table: {
        defaultValue: {
          summary: 3
        }
      }
    },
    starWidth: {
      control: {
        type: 'select'
      },
      options: ['20', '24', '28'],
      description: "Change star rating width",
    },
    starHeight: {
      control: {
        type: 'select'
      },
      options: ['20', '24', '28'],
      description: "Change star rating height",
    },
  }
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = ( args ) => ( {
  // Components used in your story `template` are defined in the `components` object
  components: { Rating },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  template: '<Rating  v-bind="args" />  ',
} )



export const Small = Template.bind( {} )
export const Medium = Template.bind( {} )
export const Large = Template.bind( {} )
Small.args = {
  productRating: 3,
  starWidth: '20',
  starHeight: '20'
}

Medium.args = {
  productRating: 3,
  starWidth: '24',
  starHeight: '24'
}

Large.args = {
  productRating: 3,
  starWidth: '28',
  starHeight: '28'
}
