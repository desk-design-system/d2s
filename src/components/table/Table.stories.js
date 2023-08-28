import DdTable from "./index.vue";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Table",
  component: DdTable,
  tags: ["autodocs"],
};

export const Default = {
  render: (args) => ({
    components: { DdTable },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      let columns = ref([
        {
          title: "ID",
          value: "id",
          checked: true,
          size: "60",
          id: 1,
          disabled: true,
          sortDirection: "asc",
          hovered: false,
        },
        {
          title: "User Name",
          value: "username",
          checked: true,
          size: "130",
          id: 2,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "First Name",
          value: "firstname",
          checked: true,
          size: "130",
          id: 3,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Last Name",
          value: "lastname",
          checked: true,
          size: "130",
          id: 4,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Email",
          value: "email",
          checked: true,
          size: "130",
          id: 5,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Task",
          value: "task",
          checked: true,
          size: "130",
          id: 6,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Device",
          value: "device",
          checked: true,
          size: "130",
          id: 7,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Model",
          value: "model",
          checked: true,
          size: "130",
          id: 8,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Phone",
          value: "phone",
          checked: true,
          size: "130",
          id: 9,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Address",
          value: "address",
          checked: true,
          size: "130",
          id: 10,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Status",
          value: "status",
          checked: true,
          size: "130",
          id: 11,
          disabled: false,
          sortDirection: "",
          hovered: false,
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
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          disabled: false,
        },
        {
          id: 1,
          username: "David2",
          firstname: "David",
          lastname: "Jeman",
          email: "David@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          disabled: false,
        },
        {
          id: 2,
          username: "Henry0",
          firstname: "Henry",
          lastname: "Cavil",
          email: "henry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
        },
        {
          id: 3,
          username: "Herry007",
          firstname: "Herry",
          lastname: "Brook",
          email: "herry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
        },
        {
          id: 4,
          username: "JSmith",
          firstname: "John",
          lastname: "Smith",
          email: "john.smith@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 5,
          username: "LGreen",
          firstname: "Lucy",
          lastname: "Green",
          email: "lucy.green@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
        {
          id: 6,
          username: "AMiller",
          firstname: "Alice",
          lastname: "Miller",
          email: "alice.miller@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 7,
          username: "BDavis",
          firstname: "Bob",
          lastname: "Davis",
          email: "bob.davis@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
      ]);

      const buttons = [
        { id: 1, label: "5", color: "white", size: "sm", active: "15" },
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

      return {
        columns,
        rows,
        args,
        buttons,
        Actions,
        values,
      };
    },
    template: `<dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" v-bind="args" />`,
  }),
  argTypes: {
    rows: {
      description: `Pass data array in rows sample = [
        {
          title: "ID",
          value: "id",
          checked: true,
          size: "60",
          id: 1,
          disabled: true,
          sortDirection: "asc",
          hovered: false,
        },
        {
          title: "User Name",
          value: "username",
          checked: true,
          size: "130",
          id: 2,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "First Name",
          value: "firstname",
          checked: true,
          size: "130",
          id: 3,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Last Name",
          value: "lastname",
          checked: true,
          size: "130",
          id: 4,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Email",
          value: "email",
          checked: true,
          size: "130",
          id: 5,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Task",
          value: "task",
          checked: true,
          size: "130",
          id: 6,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Device",
          value: "device",
          checked: true,
          size: "130",
          id: 7,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Model",
          value: "model",
          checked: true,
          size: "130",
          id: 8,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Phone",
          value: "phone",
          checked: true,
          size: "130",
          id: 9,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Address",
          value: "address",
          checked: true,
          size: "130",
          id: 10,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Status",
          value: "status",
          checked: true,
          size: "130",
          id: 11,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
      ]`,
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    columns: {
      description: `Pass data array in columns sample = [
        {
          id: 0,
          username: "Herry007",
          firstname: "Herry",
          lastname: "Brook",
          email: "herry@repairdesk.co",
          status: "in progress",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          disabled: false,
        },
        {
          id: 1,
          username: "David2",
          firstname: "David",
          lastname: "Jeman",
          email: "David@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          disabled: false,
        },
        {
          id: 2,
          username: "Henry0",
          firstname: "Henry",
          lastname: "Cavil",
          email: "henry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
        },
        {
          id: 3,
          username: "Herry007",
          firstname: "Herry",
          lastname: "Brook",
          email: "herry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
        },
        {
          id: 4,
          username: "JSmith",
          firstname: "John",
          lastname: "Smith",
          email: "john.smith@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 5,
          username: "LGreen",
          firstname: "Lucy",
          lastname: "Green",
          email: "lucy.green@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
        {
          id: 6,
          username: "AMiller",
          firstname: "Alice",
          lastname: "Miller",
          email: "alice.miller@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 7,
          username: "BDavis",
          firstname: "Bob",
          lastname: "Davis",
          email: "bob.davis@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
      ]`,
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    buttons: {
      description: `Pass data array in group button or use groupActions slot sample array = [
        { id: 1, label: "5", color: "white", size: "sm", active: "15" },
        { id: 2, label: "10", color: "white", size: "sm" },
        { id: 3, label: "15", color: "white", size: "sm" },
      ]`,
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    Actions: {
      description:
        "Pass data array in group button and row end and use rowActions slot to add custom content by DdGroupButton",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    values: {
      description:
        "Pass data array in DdDropDown or use noDropdown prop and use customDropDown slot to add custom content",
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
    dragDrop: {
      description: "to use drag drop functionality",
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
    lastCell: {
      description:
        "To replace actions in thead and use customDropDown slot to pass custom actions",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    groupActions: {
      description: "To add content in header dd group button",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    thead: {
      description: "To add content in thead",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description: "To select row actions",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    headerselectedActions: {
      description: "To select actions from header dropdown",
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
      description: "to show footer",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    actionsPanel: {
      description: "To remove actions in row",
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
      description: "v-modals thead actions in dropdown",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    defaultRow: {
      description: "to remove tbody data and make custom table with tbody slot",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description: "v-modals tr actions in dropdown",
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
    footerSlot: {
      description: "Use footer slot to add custom content in footer",
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

Default.parameters = {
  docs: {
    source: {
      code: `<dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" />`,
    },
  },
};

export const DragDrop = {
  render: (args) => ({
    components: { DdTable },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      let columns = ref([
        {
          title: "ID",
          value: "id",
          checked: true,
          size: "60",
          id: 1,
          disabled: true,
          sortDirection: "asc",
          hovered: false,
        },
        {
          title: "User Name",
          value: "username",
          checked: true,
          size: "130",
          id: 2,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "First Name",
          value: "firstname",
          checked: true,
          size: "130",
          id: 3,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Last Name",
          value: "lastname",
          checked: true,
          size: "130",
          id: 4,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Email",
          value: "email",
          checked: true,
          size: "130",
          id: 5,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Task",
          value: "task",
          checked: true,
          size: "130",
          id: 6,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Device",
          value: "device",
          checked: true,
          size: "130",
          id: 7,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Model",
          value: "model",
          checked: true,
          size: "130",
          id: 8,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Phone",
          value: "phone",
          checked: true,
          size: "130",
          id: 9,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Address",
          value: "address",
          checked: true,
          size: "130",
          id: 10,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Status",
          value: "status",
          checked: true,
          size: "130",
          id: 11,
          disabled: false,
          sortDirection: "",
          hovered: false,
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
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          disabled: false,
        },
        {
          id: 1,
          username: "David2",
          firstname: "David",
          lastname: "Jeman",
          email: "David@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          disabled: false,
        },
        {
          id: 2,
          username: "Henry0",
          firstname: "Henry",
          lastname: "Cavil",
          email: "henry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
        },
        {
          id: 3,
          username: "Herry007",
          firstname: "Herry",
          lastname: "Brook",
          email: "herry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
        },
        {
          id: 4,
          username: "JSmith",
          firstname: "John",
          lastname: "Smith",
          email: "john.smith@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 5,
          username: "LGreen",
          firstname: "Lucy",
          lastname: "Green",
          email: "lucy.green@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
        {
          id: 6,
          username: "AMiller",
          firstname: "Alice",
          lastname: "Miller",
          email: "alice.miller@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 7,
          username: "BDavis",
          firstname: "Bob",
          lastname: "Davis",
          email: "bob.davis@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
      ]);

      const buttons = [
        { id: 1, label: "5", color: "white", size: "sm", active: "15" },
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

      let columnVal = ref(columns.value);
      const updateSettings = (data) => {
        const reorderedColumns = [];
        data.forEach((item) => {
          const column = columnVal.value.find(
            (col) => col.value === item.value
          );
          if (column) {
            reorderedColumns.push(column);
          }
        });
        columnVal.value = reorderedColumns;
      };

      return {
        columns,
        rows,
        args,
        buttons,
        Actions,
        values,
        columnVal,
        updateSettings,
      };
    },
    template: `
    <dd-table :rows="rows" :columns="columnVal" :buttons="buttons" :Actions="Actions" :values="values" footer checkBoxProp
        fixedHeight rowKey="id" hoveringRow lastCell fixed actionHeader emptyState actionsPanel sortIcon settingbarIcon
        searchIcon @updateSettings="updateSettings" dragDrop v-bind="args" />`,
  }),
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
      description: `Pass data array in group button or use groupActions slot sample array = [
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
      ]`,
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    Actions: {
      description:
        `Pass data array in group button and row end and use rowActions slot to add custom content by DdGroupButton sample = [
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
        ]`,
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    values: {
      description:
        `Pass data array in DdDropDown or use noDropdown prop and use customDropDown slot to add custom content sample = [
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
        ]`,
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
    dragDrop: {
      description: "to use drag drop functionality",
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
    lastCell: {
      description:
        "To replace actions in thead and use customDropDown slot to pass custom actions",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    groupActions: {
      description: "To add content in header dd group button",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    thead: {
      description: "To add content in thead",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description: "To select row actions",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    headerselectedActions: {
      description: "To select actions from header dropdown",
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
      description: "to show footer",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    actionsPanel: {
      description: "To remove actions in row",
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
      description: "v-modals thead actions in dropdown",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    defaultRow: {
      description: "to remove tbody data and make custom table with tbody slot",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description: "v-modals tr actions in dropdown",
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
    footerSlot: {
      description: "Use footer slot to add custom content in footer",
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

DragDrop.parameters = {
  docs: {
    source: {
      code: `<dd-table :rows="rows" :columns="columnVal" :buttons="buttons" :Actions="Actions" :values="values" footer checkBoxProp
      fixedHeight rowKey="id" hoveringRow lastCell fixed actionHeader emptyState actionsPanel sortIcon settingbarIcon
      searchIcon @updateSettings="updateSettings" dragDrop />`,
    },
  },
};

export const stickySide = {
  render: (args) => ({
    components: { DdTable },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      let columns = ref([
        {
          title: "ID",
          value: "id",
          checked: true,
          size: "60",
          id: 1,
          disabled: true,
          sortDirection: "asc",
          hovered: false,
        },
        {
          title: "User Name",
          value: "username",
          checked: true,
          size: "130",
          id: 2,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "First Name",
          value: "firstname",
          checked: true,
          size: "130",
          id: 3,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Last Name",
          value: "lastname",
          checked: true,
          size: "130",
          id: 4,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Email",
          value: "email",
          checked: true,
          size: "130",
          id: 5,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Task",
          value: "task",
          checked: true,
          size: "130",
          id: 6,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Device",
          value: "device",
          checked: true,
          size: "130",
          id: 7,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Model",
          value: "model",
          checked: true,
          size: "130",
          id: 8,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Phone",
          value: "phone",
          checked: true,
          size: "130",
          id: 9,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Address",
          value: "address",
          checked: true,
          size: "130",
          id: 10,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Status",
          value: "status",
          checked: true,
          size: "130",
          id: 11,
          disabled: false,
          sortDirection: "",
          hovered: false,
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
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          disabled: false,
        },
        {
          id: 1,
          username: "David2",
          firstname: "David",
          lastname: "Jeman",
          email: "David@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          disabled: false,
        },
        {
          id: 2,
          username: "Henry0",
          firstname: "Henry",
          lastname: "Cavil",
          email: "henry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
        },
        {
          id: 3,
          username: "Herry007",
          firstname: "Herry",
          lastname: "Brook",
          email: "herry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
        },
        {
          id: 4,
          username: "JSmith",
          firstname: "John",
          lastname: "Smith",
          email: "john.smith@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 5,
          username: "LGreen",
          firstname: "Lucy",
          lastname: "Green",
          email: "lucy.green@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
        {
          id: 6,
          username: "AMiller",
          firstname: "Alice",
          lastname: "Miller",
          email: "alice.miller@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 7,
          username: "BDavis",
          firstname: "Bob",
          lastname: "Davis",
          email: "bob.davis@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
      ]);

      const buttons = [
        { id: 1, label: "5", color: "white", size: "sm", active: "15" },
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

      return {
        columns,
        rows,
        args,
        buttons,
        Actions,
        values,
      };
    },
    template: `<dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" fixed footer rowKey="id" hoveringRow checkBoxProp settingbarIcon searchIcon lastCell actionHeader emptyState sortIcon actionsPanel v-bind="args" />`,
  }),
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
      description:
        "Pass data array in group button and row end and use rowActions slot to add custom content by DdGroupButton",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    values: {
      description:
        "Pass data array in DdDropDown or use noDropdown prop and use customDropDown slot to add custom content",
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
    dragDrop: {
      description: "to use drag drop functionality",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    presistAction: {
      description: "presist the row actrion",
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
    lastCell: {
      description:
        "To replace actions in thead and use customDropDown slot to pass custom actions",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    groupActions: {
      description: "To add content in header dd group button",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    thead: {
      description: "To add content in thead",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description: "To select row actions",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    headerselectedActions: {
      description: "To select actions from header dropdown",
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
      description: "to show footer",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    actionsPanel: {
      description: "To remove actions in row",
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
      description: "v-modals thead actions in dropdown",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    defaultRow: {
      description: "to remove tbody data and make custom table with tbody slot",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description: "v-modals tr actions in dropdown",
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
    footerSlot: {
      description: "Use footer slot to add custom content in footer",
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

stickySide.parameters = {
  docs: {
    source: {
      code: `<dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" fixed footer rowKey="id" hoveringRow checkBoxProp settingbarIcon searchIcon lastCell actionHeader emptyState sortIcon actionsPanel />`,
    },
  },
};

export const noHeaderAction = {
  render: (args) => ({
    components: { DdTable },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      let columns = ref([
        {
          title: "ID",
          value: "id",
          checked: true,
          size: "60",
          id: 1,
          disabled: true,
          sortDirection: "asc",
          hovered: false,
        },
        {
          title: "User Name",
          value: "username",
          checked: true,
          size: "130",
          id: 2,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "First Name",
          value: "firstname",
          checked: true,
          size: "130",
          id: 3,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Last Name",
          value: "lastname",
          checked: true,
          size: "130",
          id: 4,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Email",
          value: "email",
          checked: true,
          size: "130",
          id: 5,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Task",
          value: "task",
          checked: true,
          size: "130",
          id: 6,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Device",
          value: "device",
          checked: true,
          size: "130",
          id: 7,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Model",
          value: "model",
          checked: true,
          size: "130",
          id: 8,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Phone",
          value: "phone",
          checked: true,
          size: "130",
          id: 9,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Address",
          value: "address",
          checked: true,
          size: "130",
          id: 10,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Status",
          value: "status",
          checked: true,
          size: "130",
          id: 11,
          disabled: false,
          sortDirection: "",
          hovered: false,
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
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          disabled: false,
        },
        {
          id: 1,
          username: "David2",
          firstname: "David",
          lastname: "Jeman",
          email: "David@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          disabled: false,
        },
        {
          id: 2,
          username: "Henry0",
          firstname: "Henry",
          lastname: "Cavil",
          email: "henry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
        },
        {
          id: 3,
          username: "Herry007",
          firstname: "Herry",
          lastname: "Brook",
          email: "herry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
        },
        {
          id: 4,
          username: "JSmith",
          firstname: "John",
          lastname: "Smith",
          email: "john.smith@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 5,
          username: "LGreen",
          firstname: "Lucy",
          lastname: "Green",
          email: "lucy.green@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
        {
          id: 6,
          username: "AMiller",
          firstname: "Alice",
          lastname: "Miller",
          email: "alice.miller@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 7,
          username: "BDavis",
          firstname: "Bob",
          lastname: "Davis",
          email: "bob.davis@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
      ]);

      const buttons = [
        { id: 1, label: "5", color: "white", size: "sm", active: "15" },
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

      return {
        columns,
        rows,
        args,
        buttons,
        Actions,
        values,
      };
    },
    template: `<dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" fixed footer rowKey="id" hoveringRow checkBoxProp settingbarIcon searchIcon lastCell emptyState sortIcon actionsPanel v-bind="args" />`,
  }),
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
      description:
        "Pass data array in group button and row end and use rowActions slot to add custom content by DdGroupButton",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    values: {
      description:
        "Pass data array in DdDropDown or use noDropdown prop and use customDropDown slot to add custom content",
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
    dragDrop: {
      description: "to use drag drop functionality",
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
    lastCell: {
      description:
        "To replace actions in thead and use customDropDown slot to pass custom actions",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    groupActions: {
      description: "To add content in header dd group button",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    thead: {
      description: "To add content in thead",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description: "To select row actions",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    headerselectedActions: {
      description: "To select actions from header dropdown",
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
      description: "to show footer",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    actionsPanel: {
      description: "To remove actions in row",
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
      description: "v-modals thead actions in dropdown",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    defaultRow: {
      description: "to remove tbody data and make custom table with tbody slot",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description: "v-modals tr actions in dropdown",
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
    footerSlot: {
      description: "Use footer slot to add custom content in footer",
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

noHeaderAction.parameters = {
  docs: {
    source: {
      code: `<dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" fixed footer rowKey="id" hoveringRow checkBoxProp settingbarIcon searchIcon lastCell emptyState sortIcon actionsPanel />`,
    },
  },
};

export const noHoveringRow = {
  render: (args) => ({
    components: { DdTable },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      let columns = ref([
        {
          title: "ID",
          value: "id",
          checked: true,
          size: "60",
          id: 1,
          disabled: true,
          sortDirection: "asc",
          hovered: false,
        },
        {
          title: "User Name",
          value: "username",
          checked: true,
          size: "130",
          id: 2,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "First Name",
          value: "firstname",
          checked: true,
          size: "130",
          id: 3,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Last Name",
          value: "lastname",
          checked: true,
          size: "130",
          id: 4,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Email",
          value: "email",
          checked: true,
          size: "130",
          id: 5,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Task",
          value: "task",
          checked: true,
          size: "130",
          id: 6,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Device",
          value: "device",
          checked: true,
          size: "130",
          id: 7,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Model",
          value: "model",
          checked: true,
          size: "130",
          id: 8,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Phone",
          value: "phone",
          checked: true,
          size: "130",
          id: 9,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Address",
          value: "address",
          checked: true,
          size: "130",
          id: 10,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Status",
          value: "status",
          checked: true,
          size: "130",
          id: 11,
          disabled: false,
          sortDirection: "",
          hovered: false,
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
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          disabled: false,
        },
        {
          id: 1,
          username: "David2",
          firstname: "David",
          lastname: "Jeman",
          email: "David@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          disabled: false,
        },
        {
          id: 2,
          username: "Henry0",
          firstname: "Henry",
          lastname: "Cavil",
          email: "henry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
        },
        {
          id: 3,
          username: "Herry007",
          firstname: "Herry",
          lastname: "Brook",
          email: "herry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
        },
        {
          id: 4,
          username: "JSmith",
          firstname: "John",
          lastname: "Smith",
          email: "john.smith@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 5,
          username: "LGreen",
          firstname: "Lucy",
          lastname: "Green",
          email: "lucy.green@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
        {
          id: 6,
          username: "AMiller",
          firstname: "Alice",
          lastname: "Miller",
          email: "alice.miller@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 7,
          username: "BDavis",
          firstname: "Bob",
          lastname: "Davis",
          email: "bob.davis@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
      ]);

      const buttons = [
        { id: 1, label: "5", color: "white", size: "sm", active: "15" },
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

      return {
        columns,
        rows,
        args,
        buttons,
        Actions,
        values,
      };
    },
    template: `<dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" fixed footer rowKey="id" hoveringRow checkBoxProp settingbarIcon searchIcon lastCell emptyState sortIcon actionsPanel v-bind="args" />`,
  }),
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
      description:
        "Pass data array in group button and row end and use rowActions slot to add custom content by DdGroupButton",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    values: {
      description:
        "Pass data array in DdDropDown or use noDropdown prop and use customDropDown slot to add custom content",
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
    dragDrop: {
      description: "to use drag drop functionality",
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
    lastCell: {
      description:
        "To replace actions in thead and use customDropDown slot to pass custom actions",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    groupActions: {
      description: "To add content in header dd group button",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    thead: {
      description: "To add content in thead",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description: "To select row actions",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    headerselectedActions: {
      description: "To select actions from header dropdown",
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
      description: "to show footer",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    actionsPanel: {
      description: "To remove actions in row",
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
      description: "v-modals thead actions in dropdown",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    defaultRow: {
      description: "to remove tbody data and make custom table with tbody slot",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description: "v-modals tr actions in dropdown",
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
    footerSlot: {
      description: "Use footer slot to add custom content in footer",
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

noHoveringRow.parameters = {
  docs: {
    source: {
      code: `<dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" fixed footer rowKey="id" checkBoxProp settingbarIcon searchIcon lastCell emptyState sortIcon actionsPanel />`,
    },
  },
};

export const noSortingIcon = {
  render: (args) => ({
    components: { DdTable },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      let columns = ref([
        {
          title: "ID",
          value: "id",
          checked: true,
          size: "60",
          id: 1,
          disabled: true,
          sortDirection: "asc",
          hovered: false,
        },
        {
          title: "User Name",
          value: "username",
          checked: true,
          size: "130",
          id: 2,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "First Name",
          value: "firstname",
          checked: true,
          size: "130",
          id: 3,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Last Name",
          value: "lastname",
          checked: true,
          size: "130",
          id: 4,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Email",
          value: "email",
          checked: true,
          size: "130",
          id: 5,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Task",
          value: "task",
          checked: true,
          size: "130",
          id: 6,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Device",
          value: "device",
          checked: true,
          size: "130",
          id: 7,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Model",
          value: "model",
          checked: true,
          size: "130",
          id: 8,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Phone",
          value: "phone",
          checked: true,
          size: "130",
          id: 9,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Address",
          value: "address",
          checked: true,
          size: "130",
          id: 10,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Status",
          value: "status",
          checked: true,
          size: "130",
          id: 11,
          disabled: false,
          sortDirection: "",
          hovered: false,
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
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          disabled: false,
        },
        {
          id: 1,
          username: "David2",
          firstname: "David",
          lastname: "Jeman",
          email: "David@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          disabled: false,
        },
        {
          id: 2,
          username: "Henry0",
          firstname: "Henry",
          lastname: "Cavil",
          email: "henry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
        },
        {
          id: 3,
          username: "Herry007",
          firstname: "Herry",
          lastname: "Brook",
          email: "herry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
        },
        {
          id: 4,
          username: "JSmith",
          firstname: "John",
          lastname: "Smith",
          email: "john.smith@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 5,
          username: "LGreen",
          firstname: "Lucy",
          lastname: "Green",
          email: "lucy.green@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
        {
          id: 6,
          username: "AMiller",
          firstname: "Alice",
          lastname: "Miller",
          email: "alice.miller@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 7,
          username: "BDavis",
          firstname: "Bob",
          lastname: "Davis",
          email: "bob.davis@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
      ]);

      const buttons = [
        { id: 1, label: "5", color: "white", size: "sm", active: "15" },
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

      return {
        columns,
        rows,
        args,
        buttons,
        Actions,
        values,
      };
    },
    template: `<dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" fixed footer rowKey="id" hoveringRow checkBoxProp settingbarIcon searchIcon lastCell emptyState actionsPanel v-bind="args" />`,
  }),
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
      description:
        "Pass data array in group button and row end and use rowActions slot to add custom content by DdGroupButton",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    values: {
      description:
        "Pass data array in DdDropDown or use noDropdown prop and use customDropDown slot to add custom content",
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
    dragDrop: {
      description: "to use drag drop functionality",
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
    lastCell: {
      description:
        "To replace actions in thead and use customDropDown slot to pass custom actions",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    groupActions: {
      description: "To add content in header dd group button",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    thead: {
      description: "To add content in thead",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description: "To select row actions",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    headerselectedActions: {
      description: "To select actions from header dropdown",
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
      description: "to show footer",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    actionsPanel: {
      description: "To remove actions in row",
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
      description: "v-modals thead actions in dropdown",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    defaultRow: {
      description: "to remove tbody data and make custom table with tbody slot",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description: "v-modals tr actions in dropdown",
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
    footerSlot: {
      description: "Use footer slot to add custom content in footer",
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

noSortingIcon.parameters = {
  docs: {
    source: {
      code: `<dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" fixed footer rowKey="id" checkBoxProp settingbarIcon searchIcon lastCell emptyState actionsPanel />`,
    },
  },
};

export const removeFooter = {
  render: (args) => ({
    components: { DdTable },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      let columns = ref([
        {
          title: "ID",
          value: "id",
          checked: true,
          size: "60",
          id: 1,
          disabled: true,
          sortDirection: "asc",
          hovered: false,
        },
        {
          title: "User Name",
          value: "username",
          checked: true,
          size: "130",
          id: 2,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "First Name",
          value: "firstname",
          checked: true,
          size: "130",
          id: 3,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Last Name",
          value: "lastname",
          checked: true,
          size: "130",
          id: 4,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Email",
          value: "email",
          checked: true,
          size: "130",
          id: 5,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Task",
          value: "task",
          checked: true,
          size: "130",
          id: 6,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Device",
          value: "device",
          checked: true,
          size: "130",
          id: 7,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Model",
          value: "model",
          checked: true,
          size: "130",
          id: 8,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Phone",
          value: "phone",
          checked: true,
          size: "130",
          id: 9,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Address",
          value: "address",
          checked: true,
          size: "130",
          id: 10,
          disabled: false,
          sortDirection: "",
          hovered: false,
        },
        {
          title: "Status",
          value: "status",
          checked: true,
          size: "130",
          id: 11,
          disabled: false,
          sortDirection: "",
          hovered: false,
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
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          disabled: false,
        },
        {
          id: 1,
          username: "David2",
          firstname: "David",
          lastname: "Jeman",
          email: "David@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          disabled: false,
        },
        {
          id: 2,
          username: "Henry0",
          firstname: "Henry",
          lastname: "Cavil",
          email: "henry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
        },
        {
          id: 3,
          username: "Herry007",
          firstname: "Herry",
          lastname: "Brook",
          email: "herry@repairdesk.co",
          task: "reparing",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
        },
        {
          id: 4,
          username: "JSmith",
          firstname: "John",
          lastname: "Smith",
          email: "john.smith@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 5,
          username: "LGreen",
          firstname: "Lucy",
          lastname: "Green",
          email: "lucy.green@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
        {
          id: 6,
          username: "AMiller",
          firstname: "Alice",
          lastname: "Miller",
          email: "alice.miller@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "in progress",
          task: "reparing",
        },
        {
          id: 7,
          username: "BDavis",
          firstname: "Bob",
          lastname: "Davis",
          email: "bob.davis@example.com",
          device: "iphone",
          model: "2022",
          phone: "+13232321321",
          address: "Newyork",
          status: "Repaired and Collected",
          task: "reparing",
        },
      ]);

      const buttons = [
        { id: 1, label: "5", color: "white", size: "sm", active: "15" },
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

      return {
        columns,
        rows,
        args,
        buttons,
        Actions,
        values,
      };
    },
    template: `<dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" fixed rowKey="id" hoveringRow checkBoxProp settingbarIcon searchIcon lastCell emptyState actionsPanel v-bind="args" />`,
  }),
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
      description:
        "Pass data array in group button and row end and use rowActions slot to add custom content by DdGroupButton",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    values: {
      description:
        "Pass data array in DdDropDown or use noDropdown prop and use customDropDown slot to add custom content",
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
    dragDrop: {
      description: "to use drag drop functionality",
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
    lastCell: {
      description:
        "To replace actions in thead and use customDropDown slot to pass custom actions",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    groupActions: {
      description: "To add content in header dd group button",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    thead: {
      description: "To add content in thead",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description: "To select row actions",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    headerselectedActions: {
      description: "To select actions from header dropdown",
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
      description: "to show footer",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    actionsPanel: {
      description: "To remove actions in row",
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
      description: "v-modals thead actions in dropdown",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    defaultRow: {
      description: "to remove tbody data and make custom table with tbody slot",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    selected: {
      description: "v-modals tr actions in dropdown",
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
    footerSlot: {
      description: "Use footer slot to add custom content in footer",
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

removeFooter.parameters = {
  docs: {
    source: {
      code: `<dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" fixed rowKey="id" checkBoxProp settingbarIcon searchIcon lastCell emptyState actionsPanel />`,
    },
  },
};
