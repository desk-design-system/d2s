// import MyButton from './Button.vue';
import ddBadge from "./index.vue"
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Example/Badge',
    component: ddBadge,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        type: {
            control: {
                type: 'select'
            },
            options: ['warning', 'danger', 'success', 'info', 'basic', 'purple'],
            description: "Change type value as per the requirement warning / danger / success / info",
            table: {
                defaultValue: {
                    summary: "warning"
                }
            }
        },
        size: {
            control: {
                type: 'select'
            },
            options: ['medium', 'large'],
            description: "Change size value as per the requirement medium / large ",
            table: {
                defaultValue: {
                    summary: "medium"
                }
            }
        },
        title: {
            description: "Change title value as per the requirement",
            table: {
                defaultValue: {
                    summary: "Button"
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
        prefix: {
            description: "Use slot name prefix to customize content ",
            table: {
                defaultValue: {
                    summary: "slot"
                }
            }
        },
        suffix: {
            description: "Use slot name suffix to customize content  ",
            table: {
                defaultValue: {
                    summary: "slot"
                }
            }
        },
        rounded: {
            description: "Make your tag rounded shhape",
            table: {
                defaultValue: {
                    summary: "False"
                }
            }
        },
        onClick: { action: 'clicked' }
    },

};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ddBadge },
    setup() {
        return { args };

    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<dd-badge  v-bind="args" />  ',
});



export const Basic = Template.bind({});
export const Warning = Template.bind({});
export const success = Template.bind({});
export const Danger = Template.bind({});
export const Info = Template.bind({});
export const Purple = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Basic.args = {
    title: 'Badge',
    type: 'basic'
};
Warning.args = {
    title: 'Badge',
    type: 'warning'
};
success.args = {
    title: 'Badge',
    type: 'success'
};
Danger.args = {
    title: 'Badge',
    type: 'danger'
};
Info.args = {
    title: 'Badge',
    type: 'info'
};
Purple.args = {
    title: 'Badge',
    type: 'purple'
};


