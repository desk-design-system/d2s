// import MyButton from './Button.vue';
import ddCard from "./index.vue"
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Card',
    component: ddCard,
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
    components: { ddCard },
    setup() {
        return { args };

    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<dd-card  v-bind="args" />  ',
});



export const Index = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Index.args = {
    title: 'The face of the moon in shadow.',
    class: "dd-bg-black"
};


