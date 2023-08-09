// import MyButton from './Button.vue';
import DdDialog from "./index.vue"
import { action } from "@storybook/addon-actions"
import { ref } from 'vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Dialog',
  component: DdDialog,
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
    modalWidth: {
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
          summary: true
        }
      }
    },
    header: {
      type: 'boolean',
      description: "To show hide header pass header prop",
      table: {
        defaultValue: {
          summary: true
        }
      }
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['primary', 'danger'],
      description: "You can change the color of save button",
      table: {
        defaultValue: {
          summary: 'primary'
        }
      }
    },
    headerClass: {
      description: "You can add the classes in the header of dialog",
      table: {
        defaultValue: {
          summary: "null"
        }
      }
    },
    contentClass: {
      description: "You can add the classes in the content area of dialog",
      table: {
        defaultValue: {
          summary: "null"
        }
      }
    },
    footerClass: {
      description: "You can add the classes in the footer of dialog",
      table: {
        defaultValue: {
          summary: "null"
        }
      }
    },
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = ( args ) => ( {
  // Components used in your story `template` are defined in the `components` object
  components: { DdDialog },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    const onClickMethod = ( () => action( "clicked" ) )
    const show = ref( true )
    return { args, show, onClickMethod }

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-dialog @close="onClickMethod" v-model="show" v-bind="args" />  ',
} )



export const Default = Template.bind( {} )
export const HeaderLess = Template.bind( {} )
export const FooterLess = Template.bind( {} )
export const CardOnly = Template.bind( {} )
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  title: 'Header',
  modalWidth: 40,
  color: 'primary',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at velit quis erat ornare dignissim eu vel est. Praesent in nisl nec augue volutpat eleifend. Phasellus pulvinar lobortis massa eu tempus. Sed ut mauris ac nunc scelerisque molestie. Donec tristique odio at lacus bibendum suscipit.'
}
HeaderLess.args = {
  header: false,
  modalWidth: 40,
  color: 'primary',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at velit quis erat ornare dignissim eu vel est. Praesent in nisl nec augue volutpat eleifend. Phasellus pulvinar lobortis massa eu tempus. Sed ut mauris ac nunc scelerisque molestie. Donec tristique odio at lacus bibendum suscipit.'
}
FooterLess.args = {
  title: 'Footer Less',
  modalWidth: 40,
  footer: false,
  color: 'primary',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at velit quis erat ornare dignissim eu vel est. Praesent in nisl nec augue volutpat eleifend. Phasellus pulvinar lobortis massa eu tempus. Sed ut mauris ac nunc scelerisque molestie. Donec tristique odio at lacus bibendum suscipit.'
}
CardOnly.args = {
  modalWidth: 50,
  footer: false,
  header: false,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at velit quis erat ornare dignissim eu vel est. Praesent in nisl nec augue volutpat eleifend. Phasellus pulvinar lobortis massa eu tempus. Sed ut mauris ac nunc scelerisque molestie. Donec tristique odio at lacus bibendum suscipit.'
}

