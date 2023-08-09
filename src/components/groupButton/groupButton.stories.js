import DdButton from "../buttons/index.vue";
import DdGroupButton from "./index.vue";
import svgIcon from "../svgIcon/index.vue";

export default {
  title: "Atoms/Group button",
  component: DdGroupButton,
};

export const Default = {
  render: (args) => ({
    components: { DdGroupButton, DdButton, svgIcon },
    setup() {
      return {
        args,
      };
    },
    template: `
    <DdGroupButton>
        <dd-Button type="secondary" content="iconOnly" icon="Circle" />
        <dd-Button type="secondary" content="iconOnly" icon="Plus" />
        <dd-Button type="secondary">
          <span>Button</span>
        </dd-Button>
      </DdGroupButton>
    `,
  }),
  argTypes: {
    Note: {
      description:
        "kindly add icons, size, color and label in string because this component is using dd-button component it will take same color, size and chevron icon as defined in dd-button component. The sample Array had been listed below.",
    },
  },
};

Default.parameters = {
  docs: {
    source: {
      code: ` 
      <DdGroupButton>
      <dd-Button type="secondary" content="iconOnly" icon="Circle" />
      <dd-Button type="secondary" content="iconOnly" icon="Plus" />
        <dd-Button type="secondary">
          <span>Button</span>
        </dd-Button>
      </DdGroupButton>`,
    },
  },
};
