import { ref } from "vue";
import DdAccordion from "../Accordion/index.vue";
import DdAccordionTab from "./index.vue";
import { computed } from "vue";

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
      const multiple = computed(()=>args.multiple)
      const active = ref(multiple ? [1] : 1)
      const title = "Tab-1"
      const prependIcon = computed(()=>args['prepend-icon'])
      const appendIcon = computed(()=>args['append-icon'])
      const badge = computed(()=>args.badge)
      const color = computed(()=>args.color)
      return {
        args,
        active,
        title,
        prependIcon,
        appendIcon,
        badge,
        color,
        multiple
      };
    },
    template: `<dd-accordion v-model:active="active" :title="title"  :color="color">
        <dd-accordion-tab
          title="Tab-1"
          :prepend-icon="prependIcon"
          :append-icon="appendIcon"
          :badge="badge"
         
        >
          <h3>This is tab 1</h3>
        </dd-accordion-tab>
      </dd-accordion>`,
  }),
  argTypes: {
    "prepend-icon": {
      description: "Pass name of the icon to prepend in the title box",
      control: { type: "select" },
      options: ["Alert", "SquareDot", "Circle", "Plus"],
    },
    "append-icon": {
      description: "Pass name of the icon to append in the title box",
      control: { type: "select" },
      options: ["Alert", "SquareDot", "Circle", "Plus"],
    },
    title: {
      description: "Title for each accordion tab.",
      type: { name: "string", required: true },
      defaultValue: "",
    },
    multiple: {
      description: "Prop for activating multiple tabs. ",
      type: 'boolean',
      defaultValue: "",
    },
    badge: {
      description: "Appends badge to the accordion tab. You can use this prop to pass the text to Badge.",
      type: { name: "string"},
      defaultValue: "",
    },
    color: {
      description: "use any tailwind color for color",
      control: { type: "select" },
      options: ["slate", "gray", "zinc", "neutral","stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"],
    },
    "#left": {
      description: "Use this slot to override the prepend-icon",
    },
    "#right": {
      description: "Use this slot to override the append-icon",
    },
    "#title": {
      description: "Use this slot to override the whole title box with all of it's elements like append, prepend icons and badge as well.",
    },
  },
};

export const Multiple = {
  render: (args) => ({
    components: {
      DdAccordion,
      DdAccordionTab,
    },
    setup() {
      const active = ref([1])
      return {
        args,
        active
      };
    },
    template: `<dd-accordion v-model:active="active" multiple>
          <dd-accordion-tab
            title="Tab-1"
          >
            <h3>This is tab 1</h3>
          </dd-accordion-tab>
          <dd-accordion-tab
            title="Tab-2"
          >
            <h3>This is tab 2</h3>
          </dd-accordion-tab>
        </dd-accordion>`,
  }),
};

export const PrependIcon = {
  render: (args) => ({
    components: {
      DdAccordion,
      DdAccordionTab,
    },
    setup() {
      const active = ref(1)
      return {
        args,
        active,
      };
    },
    template: ` <dd-accordion  v-model:active="active">
                          <dd-accordion-tab  prepend-icon="Checklist" title="Tab with Prepend icon">
                              <h3>This is tab</h3>
                          </dd-accordion-tab>
                          
                    </dd-accordion>`,
  }),
};
export const AppendIcon = {
  render: (args) => ({
    components: {
      DdAccordion,
      DdAccordionTab,
    },
    setup() {
      const active = ref(1)
      return {
        args,
        active
      };
    },
    template: ` <dd-accordion  v-model:active="active"  >
                          <dd-accordion-tab  append-icon="Checklist" title="Tab with Append icon">
                              <h3>This is tab</h3>
                          </dd-accordion-tab>
                         
                    </dd-accordion>`,
  }),
};

export const Badge = {
  render: (args) => ({
    components: {
      DdAccordion,
      DdAccordionTab,
    },
    setup() {
      const active = ref(1)
      return {
        args,
        active
      };
    },
    template: `<dd-accordion v-model:active="active">
          <dd-accordion-tab
            title="Tab with badge"
            badge="Page $100.00"
          >
            <h3>This is tab 1</h3>
          </dd-accordion-tab>
        </dd-accordion>`,
  }),

};

export const Color = {
  render: (args) => ({
    components: {
      DdAccordion,
      DdAccordionTab,
    },
    setup() {
      const active = ref(1)
      return {
        args,
        active
      };
    },
    template: `<dd-accordion v-model:active="active" color="red">
          <dd-accordion-tab
            title="Colored Tab"
            color="fuchsia"
          >
            <h3>This is tab 1</h3>
          </dd-accordion-tab>
        </dd-accordion>`,
  }),
};
