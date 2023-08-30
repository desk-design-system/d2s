import ddTopbar from "./index.vue";
export default {
  title: "Molecules/Topbar",
  component: ddTopbar,
  tags: ["autodocs"],
};

const Template = (args) => ({
  components: { ddTopbar },
  setup() {
    return { args };
  },
  template: `<div class="dd-relative -dd-top-5">
  <ddTopbar :srcLink=args.srcLink :title=args.title :show=args.show class="dd-absolute">
  </ddTopbar></div>`,
});

export const Default = Template.bind({});