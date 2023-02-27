// import MyButton from './Button.vue';
import ddAlert from "./index.vue"
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Alert',
    component: ddAlert,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        type: {
            control: {
                type: 'select'
            },
            options: ['warning', 'danger', 'success', 'info'],
            description: "Change type value as per the requirement warning / danger / success / info",
            table: {
                defaultValue: {
                    summary: "warning"
                }
            }
        },
        title: {
            description: "You can simply pass the heading of your alert in title slot",
            table: {
                defaultValue: {
                    summary: "Slot"
                }
            }
        },
        closable: {
            description: "To make your alert close able simple pass true value to closable prop",
            table: {
                defaultValue: {
                    summary: "False"
                }
            }
        },
        close: {
            description: "Trigger when alert is closed.",
            table: {
                defaultValue: {
                    summary: "Function"
                }
            }
        },
        onClick: { action: 'clicked' }
    },

};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ddAlert },
    setup() {
        return { args };

    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<dd-alert  v-bind="args" />  ',
});



export const Warning = Template.bind({});
export const success = Template.bind({});
export const Danger = Template.bind({});
export const Info = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Warning.args = {
    title: 'The face of the moon in shadow.',
    type: 'warning'
};
success.args = {
    title: 'The face of the moon in shadow.',
    type: 'success'
};
Danger.args = {
    title: 'The face of the moon in shadow.',
    type: 'danger'
};
Info.args = {
    title: 'The face of the moon in shadow.',
    type: 'info'
};


