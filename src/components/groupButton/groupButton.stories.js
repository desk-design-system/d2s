import { defineComponent } from "vue";
import DdGroupBtn from "./index.vue";
import { ref } from "vue";

export default {
  title: "Atoms/DdGroupBtn",
  component: DdGroupBtn,
  argTypes: {
    Note: {
      description:
        "kindly add icons, size, color and label in string because this component is using dd-button component it will take same color, size and chevron icon as defined in dd-button component. The sample Array had been listed below.",
    },
  },
};

const buttons = [
  { id: 1, label: "Button 1", color: "white", icon: "ChevronLeft" },
  { id: 2, label: "Button 2", color: "primary", icon: "ChevronRight" },
  { id: 3, label: "Button 3", color: "danger", icon: "ChevronDown" },
  { id: 4, label: "Button 4", color: "warning", icon: "ChevronLeft" },
  { id: 5, label: "Button 5", color: "selected", icon: "ChevronRight" },
  { id: 6, label: "", size: "xs", color: "white", icon: "ChevronUp" },
  { id: 7, label: "", size: "xl", color: "white", icon: "ChevronDown" },
];

const Template = (args) =>
  defineComponent({
    components: { DdGroupBtn },
    setup() {
      const showIcon = ref(true);
      const buttons = [
        { id: 1, label: "Button 1", color: "white", icon: "ChevronLeft" },
        { id: 2, label: "Button 2", color: "primary", icon: "ChevronRight" },
        { id: 3, label: "Button 3", color: "danger", icon: "ChevronDown" },
        { id: 4, label: "Button 4", color: "warning", icon: "ChevronLeft" },
        { id: 5, label: "Button 5", color: "selected", icon: "ChevronRight" },
        { id: 6, label: "", size: "xs", color: "white", icon: "ChevronUp" },
        { id: 7, label: "", size: "xl", color: "white", icon: "ChevronDown" },
        //add more buttons here use same props as defined in dd-button
      ];

      const onButtonSelected = (button) => {
        console.log(button, "from parent");
      };
      return { args, showIcon, buttons, onButtonSelected };
    },
    template: `
    <dd-group-btn
    v-bind="args"
    :buttons="buttons"
    :showIcon="showIcon"
    :selected="selected"
    @selected="onButtonSelected"
  />
    `,
  });

export const Default = Template.bind({});
Default.args = {
  buttons,
  showIcon: true,
};
