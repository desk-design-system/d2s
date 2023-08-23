import ddTopbar from "./index.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Molecules/Topbar",
  component: ddTopbar,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ddTopbar },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<div class="dd-relative -dd-top-5"><ddTopbar v-bind="args" class="dd-absolute"> </ddTopbar></div>`,
});

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  srcLink: "https://img.freepik.com/free-icon/user_318-563642.jpg",
  options: [
    {
      name: "Menu 1",
      value: 1,
    },
    {
      name: "Menu 2",
      value: 2,
    },
    {
      name: "Menu 3",
      value: 3,
    },
    {
      name: "Menu 4",
      value: 4,
    },
  ],
  title: "Store Name",
  show: true,
};
