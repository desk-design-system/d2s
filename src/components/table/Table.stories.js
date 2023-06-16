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
      description: "Pass data array in group button and row end and use rowActions slot to add custom content by DdGroupButton",
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
    fixedHeight: {
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
    actionHeader: {
      description:
        "To replace actions in thead and use actionHeaderSlot slot to pass custom actions",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    actionHeaderSlot: {
      description:
        "To replace actions in thead and use actionHeaderSlot slot to pass custom actions",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    headerActions: {
      description:
        "To add custom content in thead when replacing search, settings icon",
      table: {
        defaultValue: {
          summary: [],
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
    headRowActions: {
      description:
        "To replace actions in thead and use customDropDown slot to pass custom actions",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    groupActions: {
      description:
        "To add content in headeer dd group button",
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
        "To remove search in thead and use actionHeader slot to pass custom actions",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    settingbarIcon: {
      description:
        "To remove setting in thead and use actionHeader slot to pass custom actions",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    footer: {
      description:
        "to show footer",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    actionsPanel: {
      description:
        "To remove actions in row",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    buttonselected: {
      description:
        "To get value from pagination button which is selected in loadmore event",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    headerselectedActions: {
      description:
        "v-modals thead actions in dropdown",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    defaultRow: {
      description:
        "to remove tbody data and make custom table with tbody slot",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description:
        "v-modals tr actions in dropdown",
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
        "Use footer slot to add custom content",
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
        title: "ID",
        value: "id",
        checked: true,
        size: "60",
        id: 1,
        disabled: true,
        sortDirection: "asc",
      },
      {
        title: "User Name",
        value: "username",
        checked: true,
        size: "130",
        id: 2,
        disabled: false,
        sortDirection: "",
      },
      {
        title: "First Name",
        value: "firstname",
        checked: true,
        size: "130",
        id: 3,
        sortDirection: "",
      },
      {
        title: "Last Name",
        value: "lastname",
        checked: true,
        size: "130",
        id: 4,
        sortDirection: "",
      },
      {
        title: "Email",
        value: "email",
        checked: true,
        size: "130",
        id: 5,
        sortDirection: "",
      },
      {
        title: "Email",
        value: "email",
        checked: true,
        size: "130",
        id: 5,
        sortDirection: "",
      },
      {
        title: "Email",
        value: "email",
        checked: true,
        size: "130",
        id: 5,
        sortDirection: "",
      },
      {
        title: "Status",
        value: "status",
        checked: true,
        size: "130",
        id: 6,
        sortDirection: "",
      },
    ]);
    const rows = ref([
      {
        id: 0,
        username: "Herry007",
        firstname: "Herry",
        lastname: "Brook",
        email: "herry@repairdesk.co",
        status: "in progress",
        disabled: false,
      },
      {
        id: 1,
        username: "David2",
        firstname: "David",
        lastname: "Jeman",
        email: "David@repairdesk.co",
        status: "Repaired and Collected",
        disabled: false,
      },
      {
        id: 2,
        username: "Henry0",
        firstname: "Henry",
        lastname: "Cavil",
        email: "henry@repairdesk.co",
        status: "in progress",
      },
      {
        id: 3,
        username: "Herry007",
        firstname: "Herry",
        lastname: "Brook",
        email: "herry@repairdesk.co",
        status: "Repaired and Collected",
      },
      {
        id: 4,
        username: "JSmith",
        firstname: "John",
        lastname: "Smith",
        email: "john.smith@example.com",
        status: "in progress",
      },
      {
        id: 5,
        username: "LGreen",
        firstname: "Lucy",
        lastname: "Green",
        email: "lucy.green@example.com",
        status: "Repaired and Collected",
      },
      {
        id: 6,
        username: "AMiller",
        firstname: "Alice",
        lastname: "Miller",
        email: "alice.miller@example.com",
        status: "in progress",
      },
      {
        id: 7,
        username: "BDavis",
        firstname: "Bob",
        lastname: "Davis",
        email: "bob.davis@example.com",
        status: "Repaired and Collected",
      },
    ]);
    
    const buttons = [
      { id: 1, label: "5", color: "white", size: "sm", loader: true },
      { id: 2, label: "10", color: "white", size: "sm" },
      { id: 3, label: "15", color: "white", size: "sm" },
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
    '<div> <dd-table v-bind="args" :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" /> </div>',
});

export const Default = Template.bind({});
export const stickySide = Template.bind({});
export const noHeight = Template.bind({});
export const noHeaderAction = Template.bind({});
export const noHoveringRow = Template.bind({});
export const noRowAction = Template.bind({});
export const noSortingIcon = Template.bind({});
export const noCheckBoxes = Template.bind({});
export const disabledCheckBoxes = Template.bind({});
export const removeTheadActions = Template.bind({});
export const removeFooter = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  
};
stickySide.args = {
  fixed: true,
  footer: true,
  fixedHeight: true,
  rowKey: "id",
  hoveringRow: true,
  checkBoxProp: true,
  settingbarIcon: true,
  searchIcon: true,
  headRowActions: true,
  actionHeader: true,
  emptyState: true,
  loadmoreLoader: true,
  sortIcon: true,
  selected: "",
  paginationButton: "",
  buttonselected: "",
  headerselectedActions: "",
  actionsPanel: true,
};

noHeight.args = {
  fixed: true,
  footer: true,
  rowKey: "id",
  hoveringRow: true,
  checkBoxProp: true,
  settingbarIcon: true,
  searchIcon: true,
  headRowActions: true,
  actionHeader: true,
  emptyState: true,
  sortIcon: true,
  selected: "",
  paginationButton: "",
  buttonselected: "",
  headerselectedActions: "",
  actionsPanel: true,
};

noHeaderAction.args = {
  fixed: true,
  footer: true,
  checkBoxProp: true,
  rowKey: "id",
  hoveringRow: true,
  settingbarIcon: true,
  searchIcon: true,
  headRowActions: true,
  actionHeader: false,
  emptyState: true,
  sortIcon: true,
  selected: "",
  paginationButton: "",
  buttonselected: "",
  headerselectedActions: "",
  actionsPanel: true,
};

noHoveringRow.args = {
  fixed: true,
  footer: true,
  rowKey: "id",
  hoveringRow: false,
  checkBoxProp: true,
  settingbarIcon: true,
  searchIcon: true,
  headRowActions: true,
  actionHeader: false,
  emptyState: true,
  sortIcon: true,
  selected: "",
  paginationButton: "",
  buttonselected: "",
  headerselectedActions: "",
  actionsPanel: true,
};

noRowAction.args = {
  fixed: true,
  footer: true,
  rowKey: "id",
  hoveringRow: false,
  checkBoxProp: true,
  settingbarIcon: true,
  searchIcon: true,
  headRowActions: true,
  actionHeader: false,
  emptyState: true,
  selected: "",
  paginationButton: "",
  buttonselected: "",
  headerselectedActions: "",
};

noSortingIcon.args = {
  fixed: true,
  footer: true,
  rowKey: "id",
  hoveringRow: true,
  checkBoxProp: true,
  settingbarIcon: true,
  searchIcon: true,
  headRowActions: true,
  actionHeader: true,
  emptyState: true,
  actionsPanel: true,
  sortIcon: false,
  selected: "",
  showIcon: true,
  paginationButton: "",
  buttonselected: "",
  headerselectedActions: "",
};

noCheckBoxes.args = {
  fixed: true,
  footer: true,
  rowKey: "id",
  hoveringRow: true,
  checkBoxProp: false,
  settingbarIcon: true,
  searchIcon: true,
  headRowActions: true,
  actionHeader: true,
  emptyState: true,
  searchIcon: true,
  actionsPanel: true,
  selected: "",
  showIcon: true,
  paginationButton: "",
  buttonselected: "",
  headerselectedActions: "",
};

disabledCheckBoxes.args = {
  fixed: true,
  footer: true,
  rowKey: "id",
  hoveringRow: true,
  headRowActions: true,
  checkBoxProp: true,
  actionHeader: true,
  emptyState: true,
  searchIcon: true,
  settingbarIcon: true,
  sortIcon: false,
  actionsPanel: true,
  selected: "",
  showIcon: true,
  checkAllDisabled: true,
  paginationButton: "",
  buttonselected: "",
  headerselectedActions: "",
};

removeTheadActions.args = {
  fixed: true,
  footer: true,
  rowKey: "id",
  hoveringRow: true,
  checkBoxProp: true,
  settingbarIcon: false,
  searchIcon: false,
  headRowActions: true,
  actionHeader: true,
  emptyState: true,
  sortIcon: false,
  actionsPanel: true,
  selected: "",
  showIcon: true,
  checkAllDisabled: false,
  paginationButton: "",
  buttonselected: "",
  headerselectedActions: "",
};

removeFooter.args = {
  fixed: true,
  footer: false,
  rowKey: "id",
  hoveringRow: true,
  checkBoxProp: true,
  settingbarIcon: false,
  searchIcon: false,
  headRowActions: true,
  actionHeader: true,
  emptyState: true,
  sortIcon: false,
  actionsPanel: true,
  selected: "",
  showIcon: true,
  checkAllDisabled: false,
  paginationButton: "",
  buttonselected: "",
  headerselectedActions: "",
};