// import MyButton from './Button.vue';
import typography from "./index.vue"

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Example/typography',
    component: typography,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {

        title: {
            description: "Change title value as per the requirement",
            table: {
                defaultValue: {
                    summary: "Button"
                }
            }
        },
        class: {
            control: {
                type: 'select'
            },
            options: ["dd-text-xs",
                "dd-text-sm",
                "dd-text-base",
                "dd-text-lg",
                "dd-text-xl",
                "dd-text-2xl",
                "dd-text-3xl",
                "dd-text-4xl",
                "dd-text-5xl",
                "dd-text-6xl",
                "dd-text-7xl",
                "dd-text-8xl",
                "dd-text-9xl",
                "dd-font-thin",
                "dd-font-extralight",
                "dd-font-light",
                "dd-font-normal",
                "dd-font-medium",
                "dd-font-semibold",
                "dd-font-bold",
                "dd-font-extrabold",
                "dd-font-black",],
            description: "Change color value as per the requirement primary / danger / success / white",
            table: {
                defaultValue: {
                    summary: "-"
                }
            }
        },
    },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { typography },
    setup() {
        return { args };

    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<typography  v-bind="args" />  ',
});



export const Index = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Index.args = {
    title: 'The face of the moon in shadow.',
    class: "dd-text-xl"
};


