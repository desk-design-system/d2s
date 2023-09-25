import DdButton from "../buttons/index.vue"
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
import { inject, onMounted } from "vue";
export default {
  title: 'Atoms/Notification',
  component: DdButton,
  tags: ['autodocs'],
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
      options: [1000, 2000, 3000, 4000, 5000],
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
    },
    offSet:{
      description: "You can add required offset value",
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
    const notification = inject('$notification')
    const showAlertSuccess =  () => {notification.success(args.title, args.message, args.timeout, args.placement)}
    const showAlertWarning =  () => {notification.warning(args.title, args.message, args.timeout, args.placement)}
    const showAlertError =  () => {notification.error(args.title, args.message, args.timeout, args.placement)}
    const showAlertInfo =  () => {notification.info(args.title, args.message, args.timeout, args.placement)}
    return {  args, showAlertSuccess , showAlertWarning,showAlertError ,showAlertInfo};

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<div> <dd-button type="primary"  @click="showAlertSuccess">Success</dd-button> <dd-button type="secondary" @click="showAlertWarning">Warning</dd-button> <dd-button type="danger" @click="showAlertError">Error</dd-button> <dd-button type="tertiary" @click="showAlertInfo">Info</dd-button></div>  ',
});



export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Success.args = {
  title: 'Primary',
  placement: "topLeft",
  timeout: 3000,
  message: "Notification received: Please check your inbox for further details."
};
