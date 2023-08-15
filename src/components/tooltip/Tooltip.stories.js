import ddTooltip from "./index.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Tooltip",
  component: ddTooltip,
};

export const ToolTip = {
  render: (args) => ({
    components: { ddTooltip },
    setup() {
      return {
        args,
      };
    },
    template: `<ddTooltip toolTipPosition="top" toolTipText="i'm Tooltip"> Hover on me </ddTooltip>`,
  }),
  args: {
  },
};

ToolTip.parameters = {
  docs: {
    source: {
      code: `<ddTooltip toolTipPosition="top" toolTipText="i'm Tooltip"> Hover on me </ddTooltip>`,
    },
  },
};
