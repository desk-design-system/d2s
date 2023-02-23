// import MyButton from './Button.vue';
import DdDrawer from "./index.vue"
import { action } from "@storybook/addon-actions"
import { ref } from 'vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Drawer',
  component: DdDrawer,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    title: {
      description: "Change header title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button"
        }
      }
    },
    saveTitle: {
      description: "You change the title of footer save button",
      table: {
        defaultValue: {
          summary: "Save"
        }
      }
    },
    closeTitle: {
      description: "You change the title of footer close button",
      table: {
        defaultValue: {
          summary: "Close"
        }
      }
    },
    title: {
      description: "Change header title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button"
        }
      }
    },
    size: {
      description: "Change the width of the drawer",
      table: {
        defaultValue: {
          summary: "30"
        }
      }
    },
    position: {
      description: "You change the position of drawer left / right",
      table: {
        defaultValue: {
          summary: "right"
        }
      }
    },
    footer: {
      type: 'boolean',
      description: "To show footer pass footer prop",
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    primaryHeader: {
      type: 'boolean',
      description: "To show header as primary with description",
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
  components: { DdDrawer },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    const onClickMethod = ( () => action( "clicked" ) )
    const show = ref( true )
    return { args, show, onClickMethod }

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-drawer @close="onClickMethod" v-model="show" v-bind="args" />  ',
} )



export const Default = Template.bind( {} )
export const PrimaryHeader = Template.bind( {} )
export const Footer = Template.bind( {} )
export const LeftDrawer = Template.bind( {} )
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  title: 'Header',
  size: '30',
}
LeftDrawer.args = {
  title: 'Header',
  size: '40',
  footer: true,
  position: 'left'
}
PrimaryHeader.args = {
  title: 'Header',
  primaryHeader: true,
  size: '40',
  footer: false
}
Footer.args = {
  title: 'Header',
  size: '40',
  footer: true
};



