import DdBreadcrumb from "./index.vue"
import {ref} from 'vue'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Breadcrumbs',
  component: DdBreadcrumb,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    shadow:{
      description: "You can give shadow to Breadcrumbs container simple pass the prop",
      table:{
        defaultValue:{
          summary: false
        }
      }
     },
     full:{
      description: "You can make Breadcrumbs container width full simple pass the prop",
      table:{
        defaultValue:{
          summary: false
        }
      }
     },
     items:{
      description: "Pass data array in Items",
      table:{
        defaultValue:{
          summary: "[]"
        }
      }
     },
     seprator: {
      control: { type: 'select' },
      options: ["slash", "chevron"],
      description: "You can chnage the seprator icon simple pass the icon name ",
      table:{
        defaultValue:{
          summary: "slash"
        }
      }
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdBreadcrumb },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const value = ref([
      { name: 'Home', to: {path: '/'}, link: '#'  },
      { name: 'Invoice', to: '', link: 'google.com'  },
      { name: 'Section', to: '', link: '#'  },
      { name: 'Page', to: '', link: '#'  },
      { name: 'Inner Page', to: '', link: '#'  },
  ])
    return { value, args };

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-breadcrumb  v-bind="args"  :items="value"  />  ',
});



export const Default = Template.bind({});
export const Container = Template.bind({});
export const FullWidth = Template.bind({});
export const Chevron = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Container.args = {
  shadow: true
};
FullWidth.args = {
  full: true,
  shadow: true
};
Chevron.args ={
  seprator: 'chevron'
}


