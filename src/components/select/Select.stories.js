import DdSelect from "./index.vue";
import { action } from "@storybook/addon-actions";
import { ref, computed } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Select",
  component: DdSelect,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    placeholder: {
      description: "Change placeholder value as per the requirement",
      table: {
        defaultValue: {
          summary: "Search",
        },
      },
    },
    options: {
      description: "Pass data array in options",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdSelect },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const onClickMethod = () => action("clicked");
    const query = ref("");
    const filteredOptions = computed(() =>
      query.value == ""
        ? people.value
        : people.value.filter((item) => {
            return item.name.toLowerCase().includes(query.value.toLowerCase());
          })
    );

    const people = ref([
      { value: 1, name: "Leslie Alexander" },
      { value: 2, name: "Aeslie Blexander" },
      { value: 3, name: "Ceslie Dlexander" },
      { value: 4, name: "Eeslie Flexander" },
      { value: 5, name: "Geslie Hlexander" },
      { value: 6, name: "Ieslie Jlexander" },
      { value: 7, name: "Jeslie KJlexander" },
      // More people...
    ]);
    const selected = ref("");
    const search = (data) => {
      query.value = data;
    };
    const addquery = (data) => {
      selected.value = "";
      const queryArr = {
        value: people.value.length + 1,
        name: data,
      };
      people.value.unshift(queryArr);
      query.value = "";
    };
    return {
      selected,
      args,
      filteredOptions,
      people,
      search,
      addquery,
      onClickMethod,
      query,
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<ddSelect
  v-model="selected" :options="filteredOptions" filterable @searchQuery="search" @addQuery="addquery"
  label="select"
  />`,
});

export const Basic = Template.bind({});

// export const CheckLeft = Template.bind( {} )
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Basic.args = {};
