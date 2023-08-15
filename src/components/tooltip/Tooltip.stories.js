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
    template: `<div class="dd-flex dd-items-center dd-justify-center"> 
      <ddTooltip toolTipPosition="right" toolTipText="i'm Tooltip"> Hover on me </ddTooltip>
    </div>`,
  }),
  args: {
  },
};

ToolTip.parameters = {
  docs: {
    source: {
      code: `<div class="dd-flex dd-items-center dd-justify-center"> 
        <ddTooltip toolTipPosition="right" toolTipText="i'm Tooltip"> Hover on me </ddTooltip>
      </div>`,
    },
  },
};
