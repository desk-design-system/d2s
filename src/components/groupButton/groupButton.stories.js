import { defineComponent } from "vue";
import DdButton from "../buttons/index.vue";
import DdGroupButton from "./index.vue"
import svgIcon from "../svgIcon/index.vue"
import { ref } from "vue";

export default {
  title: "Atoms/Group button",
  component: DdGroupButton,
  argTypes: {
    Note: {
      description:
        "kindly add icons, size, color and label in string because this component is using dd-button component it will take same color, size and chevron icon as defined in dd-button component. The sample Array had been listed below.",
    },
  },
};


const Template = (args) =>
  defineComponent({
    components: { DdGroupButton, DdButton, svgIcon },
    setup() {

      return { args };
    },
    template: `
    <DdGroupButton>
        <dd-Button color="white">
          <svgIcon icon="Alert" />
        </dd-Button>
        <dd-Button color="white">
          <svgIcon icon="Alert" />
        </dd-Button>
        <dd-Button color="white">
          <span>Button</span>
        </dd-Button>
      </DdGroupButton>
    `,
  });

export const Default = Template.bind({});

