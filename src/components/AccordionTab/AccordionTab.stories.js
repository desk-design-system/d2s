import DdAccordion from "../Accordion/index.vue";
import DdAccordionTab from "./index.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Accordion",
  component: DdAccordion,
  tags: ['autodocs'],
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const Default = {
  render: (args) => ({
    components: {
      DdAccordion,
      DdAccordionTab,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-accordion :active="0" v-bind="args">
        <dd-accordion-tab
          title="Tab-1"
          prepend-icon="SquareDot"
          v-bind="args"
        >
          <h3>This is tab 1</h3>
        </dd-accordion-tab>
      </dd-accordion>`,
  }),
  argTypes: {
    "prepend-icon": {
      description: "Pass name of the icon to prepend in the titlw box",
    },
    "append-icon": {
      description: "Pass name of the icon to append in the titlw box",
    },
    title: {
      description: "Title for the header.",
      type: { name: "string", required: true },
      defaultValue: "",
    },
    badge: {
      description: "Using DdBadge with same name props",
      defaultValue: "",
    },
    color: {
      description: "use any tailwind color for color",
    },
    "#append": {
      description: "Append slot.",
    },
    "#prepend": {
      description: "Prepend slot.",
    },
    "#title": {
      description: "Header slot.",
    },
  },
};
export const PrependIcon = {
  render: (args) => ({
    components: {
      DdAccordion,
      DdAccordionTab,
    },
    setup() {
      return {
        args,
      };
    },
    template: ` <dd-accordion  :active="0" :multiple='false' v-bind="args">
                          <dd-accordion-tab  prepend-icon="Checklist" :title="args.title" v-bind="args">
                              <h3>This is tab</h3>
                          </dd-accordion-tab>
                          
                    </dd-accordion>`,
  }),
  argTypes: {
    "prepend-icon": {
      description: "Pass name of the icon to prepend in the titlw box",
    },
    "append-icon": {
      description: "Pass name of the icon to append in the titlw box",
    },
    title: {
      description: "Title for the header.",
      type: { name: "string", required: true },
      defaultValue: "",
    },
    "#right": {
      description: "Append slot.",
    },
    "#left": {
      description: "Prepend slot.",
    },
    "#title": {
      description: "Header slot.",
    },
  },
};
export const AppendIcon = {
  render: (args) => ({
    components: {
      DdAccordion,
      DdAccordionTab,
    },
    setup() {
      return {
        args,
      };
    },
    template: ` <dd-accordion  :active="0" :multiple='false' v-bind="args">
                          <dd-accordion-tab  append-icon="Checklist" :title="args.title" v-bind="args">
                              <h3>This is tab</h3>
                          </dd-accordion-tab>
                         
                    </dd-accordion>`,
  }),
  args: {
    "prepend-icon": "Mobile",
    title: "Tab",
    "append-icon": "",
  },
};

export const Badge = {
  render: (args) => ({
    components: {
      DdAccordion,
      DdAccordionTab,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-accordion :active="0" v-bind="args">
          <dd-accordion-tab
            title="Tab-1"
            prepend-icon="SquareDot"
            badge="Page $100.00"
            closable
            dot
            v-bind="args"
          >
            <h3>This is tab 1</h3>
          </dd-accordion-tab>
        </dd-accordion>`,
  }),
  argTypes: {
    "prepend-icon": {
      description: "Pass name of the icon to prepend in the titlw box",
    },
    "append-icon": {
      description: "Pass name of the icon to append in the titlw box",
    },
    title: {
      description: "Title for the header.",
      type: { name: "string", required: true },
      defaultValue: "",
    },
    badge: {
      description: "Using DdBadge with same name props",
      defaultValue: "",
    },
    "#append": {
      description: "Append slot.",
    },
    "#prepend": {
      description: "Prepend slot.",
    },
    "#title": {
      description: "Header slot.",
    },
  },
};

export const Color = {
  render: (args) => ({
    components: {
      DdAccordion,
      DdAccordionTab,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-accordion :active="1" color="red">
          <dd-accordion-tab
            title="Tab-1"
            prepend-icon="SquareDot"
            badge="Page $100.00"
            closable
            dot
            color="fuchsia"
          >
            <h3>This is tab 1</h3>
          </dd-accordion-tab>
        </dd-accordion>`,
  }),
  argTypes: {
    "prepend-icon": {
      description: "Pass name of the icon to prepend in the titlw box",
    },
    "append-icon": {
      description: "Pass name of the icon to append in the titlw box",
    },
    title: {
      description: "Title for the header.",
      type: { name: "string", required: true },
      defaultValue: "",
    },
    badge: {
      description: "Using DdBadge with same name props",
      defaultValue: "",
    },
    "#append": {
      description: "Append slot.",
    },
    "#prepend": {
      description: "Prepend slot.",
    },
    "#title": {
      description: "Header slot.",
    },
  },
};

Default.parameters = {
  docs: {
    source: {
      code: `<dd-accordion :active="0">
      <dd-accordion-tab
        title="Tab-1"
        prepend-icon="SquareDot"
      >
        <h3>This is tab 1</h3>
      </dd-accordion-tab>
    </dd-accordion>`,
    },
  },
};
PrependIcon.parameters = {
  docs: {
    source: {
      code: ` <dd-accordion  :active="1" :multiple='false'>
    <dd-accordion-tab  prepend-icon="Checklist" title="Tab-1" >
        <h3>This is tab</h3>
    </dd-accordion-tab>
   
</dd-accordion>`,
    },
  },
};
AppendIcon.parameters = {
  docs: {
    source: {
      code: ` <dd-accordion  :active="1" :multiple='false'>
    <dd-accordion-tab  append-icon="Checklist" title="Tab-1" >
        <h3>This is tab</h3>
    </dd-accordion-tab>

</dd-accordion>`,
    },
  },
};

Badge.parameters = {
  docs: {
    source: {
      code: `<dd-accordion :active="1">
        <dd-accordion-tab
          title="Tab-1"
          prepend-icon="SquareDot"
          badge="Page $100.00"
          closable
          dot
        >
          <h3>This is tab 1</h3>
        </dd-accordion-tab>
      </dd-accordion>`,
    },
  },
};

Color.parameters = {
  docs: {
    source: {
      code: `<dd-accordion :active="1" color="blue">
      <dd-accordion-tab
        title="Tab-1"
        prepend-icon="SquareDot"
        badge="Page $100.00"
        closable
        dot
        color="fuchsia"
      >
        <h3>This is tab 1</h3>
      </dd-accordion-tab>
    </dd-accordion>`,
    },
  },
};