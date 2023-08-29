import ddTooltip from "./index.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Tooltip",
  component: ddTooltip,
  tags: ["autodocs"],
};

export const ToolTip = {
  render: (args) => ({
    components: { ddTooltip },
    setup() {
      return {
        args,
      };
    },
    template: `<ddTooltip toolTipPosition="top" toolTipText="i'm Tooltip" :toolTipPosition=args.toolTipPosition :isAnimate=args.isAnimate :fixedStyle=args.fixedStyle :fixedStylePin=args.fixedStylePin :disabled=args.disabled > Hover on me </ddTooltip>`,
  }),
  args: {
  },
};
