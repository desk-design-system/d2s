import { defineComponent } from "vue";
import DdPagination from "./index.vue";

export default {
  title: "Atoms/Pagination",
  component: DdPagination,
  argTypes: {
    count: {
      control: { type: "number" },
      description: "The total number of items.",
    },
    limit: {
      control: { type: "number" },
      description: "The number of items per page.",
    },
    offset: {
      control: { type: "number" },
      description: "The current page offset.",
    },
    "fetch-data": {
      action: "fetch-data",
      description:
        "This is a function that is called when new data needs to be fetched.",
      table: {
        type: {
          summary: "function",
        },
      },
    },
  },
};

const Template = (args) =>
  defineComponent({
    components: { DdPagination },
    setup() {
      return { args };
    },
    template: `<DdPagination
      :count="count"
      :limit="limit"
      :offset="offset"
      @fetch-data="getData"
    />`,
  });

export const Default = Template.bind({});
Default.args = {
  count: 100,
  limit: 10,
  offset: 0,
};
