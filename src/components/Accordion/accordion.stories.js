import DdAccordion from "./index.vue"
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Accordion',
    component: DdAccordion,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        title: {
            description: "Change title value as per the requirement",
            table: {
                defaultValue: {
                    summary: "Accordion"
                }
            }
        },
        showAvatar: {
            defaultValue: {
                summary: false
            }
        },
    },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { DdAccordion },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        const srcLink = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        return { srcLink };

    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<DdAccordion rules="required" :srcLink="srcLink" :showAvatar="showAvatar">
    Your Label
    <template #content>
        <div>Place Headings here</div>
    </template>
    </DdAccordion>`,
});



export const Primary = Template.bind({});
export const Avatar = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    label: 'Your Label',
};
Avatar.args = {
    label: 'Avatar Select',
    placeholder: "Select Option",
    showAvatar: false,
};


