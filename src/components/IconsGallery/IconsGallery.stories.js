import DdIconsGallery from "./index.vue"
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Atoms/IconsGallery',
    component: DdIconsGallery,
   
    
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const Default = {
    render: (args) => ({
        components: {
            DdIconsGallery,
        },
        setup() {
            return {
                args
            };
        },
        template: ` <dd-icons-gallery/>`,
    }),



};


