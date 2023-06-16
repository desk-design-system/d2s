import DdTable from "./index.vue";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Table",
  component: DdTable,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    rows: {
      description: "Pass data array in rows",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    columns: {
      description: "Pass data array in columns",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    buttons: {
      description: "Pass data array in group button or use groupActions slot",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    Actions: {
      description: "Pass data array in group button and row end or use rowActions = false and use rowActions slot to add custom content by DdGroupButton",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    values: {
      description: "Pass data array in DdDropDown or use noDropdown prop and use customDropDown slot to add custom content",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    noHeight: {
      description: "Fixed hieght will be removed",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    rowActions: {
      description: "Used to remove the action from row",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    defaultRow: {
      description: "Used to show default tbody",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    fixed: {
      description: "Fixed columns will be removed",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    checkBoxProp: {
      description: "Remove checkboxes from tabel",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    checkAllDisabled: {
      description: "Diable the select all chekcbox",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    noDropdown: {
      description: "Remove Dropdown from thead actions",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    size: {
      description: "Set icon size on table",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    actionsIconSize: {
      description: "Set icon size from row action on table",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    showIcon: {
      description: "Used to show icons in group buttons",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    emptyState: {
      description: "Used to pre defined image if no api return no data",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    actionHeader: {
      description:
        "To replace actions in thead actionHeader = false and use actionHeader slot to pass custom actions",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    headRowActions: {
      description:
        "To replace actions in thead at first headRowActions = false and use actionHeader slot to pass custom actions",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description:
        "To select row actions",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    headerselectedActions: {
      description:
        "To select actions from header dropdown",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    searchIcon: {
      description:
        "To replace actions in thead actionHeader = false and use actionHeader slot to pass custom actions",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    thead: {
      description: "Use thead slot to add custom content in thead",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    td: {
      description: "Use td slot to add custom content in td at first place",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    noData: {
      description:
        "Use noData slot to add custom content and keep emptyState as false",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    footer: {
      description:
        "Use footer slot to add custom content and keep footer as false",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    tbody: {
      description:
        "Slot Use to add custom content in tbody if defaultRow props is false",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdTable },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const columns = ref([
      {
        title: "Id",
        value: "id",
        checked: true,
        size: "130",
        id: 1,
        disabled: true,
      },
      {
        title: "User Name",
        value: "username",
        checked: true,
        size: "130",
        id: 2,
        disabled: true,
      },
      {
        title: "First Name",
        value: "firstname",
        checked: true,
        size: "130",
        id: 3,
      },
      {
        title: "Last Name",
        value: "lastname",
        checked: true,
        size: "130",
        id: 4,
      },
      {
        title: "Email",
        value: "email",
        checked: true,
        size: "130",
        id: 5,
      },
      {
        title: "Email",
        value: "email",
        checked: true,
        size: "130",
        id: 5,
      },
      {
        title: "Email",
        value: "email",
        checked: true,
        size: "130",
        id: 5,
      },
      {
        title: "Email",
        value: "email",
        checked: true,
        size: "130",
        id: 5,
      },
      {
        title: "Email",
        value: "email",
        checked: true,
        size: "130",
        id: 5,
      },
      {
        title: "Email",
        value: "email",
        checked: true,
        size: "130",
        id: 5,
      },
      {
        title: "Email",
        value: "email",
        checked: true,
        size: "130",
        id: 5,
      },
      {
        title: "Status",
        value: "status",
        checked: true,
        size: "130",
        id: 6,
      },
    ]);
    const rows = ref([
      {
        id: 1,
        username: "Herry007",
        firstname: "Herry",
        lastname: "Brook",
        email: "herry@repairdesk.co",
        status: "in progress",
        disabled: false,
      },
      {
        id: 2,
        username: "David2",
        firstname: "David",
        lastname: "Jeman",
        email: "David@repairdesk.co",
        status: "Repaired and Collected",
        disabled: false,
      },
      {
        id: 3,
        username: "Henry0",
        firstname: "Henry",
        lastname: "Cavil",
        email: "henry@repairdesk.co",
        status: "in progress",
      },
      {
        id: 4,
        username: "Herry007",
        firstname: "Herry",
        lastname: "Brook",
        email: "herry@repairdesk.co",
        status: "Repaired and Collected",
      },
      {
        id: 5,
        username: "JSmith",
        firstname: "John",
        lastname: "Smith",
        email: "john.smith@example.com",
        status: "in progress",
      },
      {
        id: 6,
        username: "LGreen",
        firstname: "Lucy",
        lastname: "Green",
        email: "lucy.green@example.com",
        status: "Repaired and Collected",
      },
      {
        id: 7,
        username: "AMiller",
        firstname: "Alice",
        lastname: "Miller",
        email: "alice.miller@example.com",
        status: "in progress",
      },
      {
        id: 8,
        username: "BDavis",
        firstname: "Bob",
        lastname: "Davis",
        email: "bob.davis@example.com",
        status: "Repaired and Collected",
      },
      {
        id: 9,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 10,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 11,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 12,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 13,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 14,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 15,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 16,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 17,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 18,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 19,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 20,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 21,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 22,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 23,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 24,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 25,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 26,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 27,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 28,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 29,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 30,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 31,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 32,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 33,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 34,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
      {
        id: 35,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com",
        status: "in progress",
      },
    ]);
    const buttons = [
      { id: 1, label: "5", color: "white", icon: "" },
      { id: 2, label: "10", color: "white", icon: "" },
      { id: 3, label: "15", color: "white", icon: "" },
    ];

    const Actions = ref([
      {
        name: "DropDown Menu 1",
        icon: "DotHorizontal",
        size: 12,
        value: 1,
      },
      {
        name: "DropDown Menu 2",
        icon: "Trash",
        size: 12,
        value: 2,
      },
      {
        name: "DropDown Menu 3",
        icon: "Pencil",
        size: 12,
        value: 3,
      },
    ]);

    const values = ref([
      {
        name: "DropDown Menu 1",
        value: 1,
        disabled: true,
      },
      {
        name: "DropDown Menu 2",
        value: 2,
      },
      {
        name: "DropDown Menu 3",
        value: 3,
      },
      {
        name: "DropDown Menu 4",
        value: 4,
      },
    ]);

    return { columns, rows, args, buttons, Actions, values };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<div> <dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" /> </div>',
});

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
