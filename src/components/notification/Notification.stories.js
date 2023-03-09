import DdButton from "../buttons/index.vue"
import { action } from "@storybook/addon-actions"
import {useAlert} from "./index.js"
import {ref} from 'vue'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Notification',
  component: DdButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ["topLeft", "topRight", "bottomLeft", "bottomRight"],
      description: "Accepted value topLeft/topRight/bottomLeft/bottomRight",
      table:{
        defaultValue:{
          summary: "topRight"
        }
      }
    },
    timeout:{
      control: { type: 'select' },
      options: [1000, 2000, 3000, 4000],
      description: "You can pass time in mili seconds as per the requirement",
      table:{
        defaultValue:{
          summary: 3000
        }
      }
    },
    message:{
      description: "You can update your message as per the requirement",
      table:{
        defaultValue:{
          summary: null
        }
      }
    }
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const $alert = useAlert()
    const showAlertSuccess =  () => {$alert.success(args.title, args.message, args.timeout, args.placement)}
    const showAlertWarning =  () => {$alert.warning(args.title, args.message, args.timeout, args.placement)}
    const showAlertError =  () => {$alert.error(args.title, args.message, args.timeout, args.placement)}
    const showAlertInfo =  () => {$alert.info(args.title, args.message, args.timeout, args.placement)}
    return {  args, showAlertSuccess , showAlertWarning,showAlertError ,showAlertInfo};

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<div> <dd-button color="success"  @click="showAlertSuccess">Success</dd-button> <dd-button color="warning" @click="showAlertWarning">Warning</dd-button> <dd-button color="danger" @click="showAlertError">Error</dd-button> <dd-button color="white" @click="showAlertInfo">Info</dd-button></div>  ',
});



export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Success.args = {
  title: 'Primary',
  placement: "topLeft",
  timeout: 3000,
  message: "Notification received: Please check your inbox for further details."
};
