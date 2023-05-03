import DdInput from "./index.vue"
import { action } from "@storybook/addon-actions"
import { ref } from 'vue'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input',
  component: DdInput,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: {
      description: "Change label value as per the requirement",
      table: {
        defaultValue: {
          summary: ""
        }
      }
    },
    placeholder: {
      description: "Change placeholder value as per the requirement",
      table: {
        defaultValue: {
          summary: "Select option"
        }
      }
    },
    prefix: {
      type: 'boolean',
      description: "To set icon in Suffix you should pass the value True",
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    suffix: {
      type: 'boolean',
      description: "To set icon in Suffix you should pass the value True",
      table: {
        defaultValue: {
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
    rules: {
      control: { type: 'select' },
      options: ["alpha", "max:6", "alpha_dash"],
      description: "You can simple add the validation by selecting any of the above pre defined rule",
      table: {
        defaultValue: {
          summary: null
        }
      }
    }
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = ( args ) => ( {
  // Components used in your story `template` are defined in the `components` object
  components: { DdInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    const onClickMethod = ( () => action( "clicked" ) )
    const selected = ref( '' )
    return { selected, args, onClickMethod }

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-input  v-bind="args" v-model="selected" />',
} )



export const Basic = Template.bind( {} )
export const PrefixIcon = Template.bind( {} )
export const SuffixIcon = Template.bind( {} )
export const Password = Template.bind( {} )
// export const Validation = Template.bind( {} )

// export const CheckLeft = Template.bind( {} )
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Basic.args = {
  Label: 'Basic Input',
}
PrefixIcon.args = {
  Label: 'Prefix Select',
  prefix: true,
  icon: 'Search'
}
SuffixIcon.args = {
  Label: 'Suffix Select',
  suffix: true,
  icon: 'Search'
}
Password.args = {
  Label: 'Suffix Select',
  suffix: true,
  type: 'password'
};
// Validation.args = {
//   Label: 'Suffix Select',
//   rules: 'email'
// };


