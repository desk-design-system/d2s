import DdTree from "./index.vue";
import { ref } from "vue";

export default {
  title: "Atoms/Tree",
  component: DdTree,
  argTypes: {
    list: {
      description: "Pass data array for tree",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    buttons: {
      description: "Pass data array for hovering buttons",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    values: {
      description: "Pass data array for dropdown",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    checkBoxProp: {
      description: "Pass checkBoxProp to make checkbox visible",
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    customContent: {
      description:
        "Pass customContent props to make content visible after adding element in content slot",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    badge: {
      description: "Pass content in string to badge",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    actionButton: {
      description: "Pass actionButton to make hovring group button visible",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    showIcon: {
      description: "pass showIcon to show the icons in dropdown",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    dropdownProp: {
      description: "Pass dropdownProp to make dropdown visible",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    checkbox: {
      description: `Slot to add content at checkbox place use #checkbox="{checkBoxProp, open, item, disabled}"`,
      table: {
        defaultValue: {
          summary: [],
        },
      },
    },
    content: {
      description: `Slot to add content after checkbox use #content="{customContent, open, item, disabled}"`,
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    actions: {
      description: "Slot to add custom hovering actions",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    badge: {
      description: "Slot to add custom badge content",
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    dropdown: {
      description: `Slot to add custom dropdown content inside hovering actions use #dropdown="{disabled, isSelected, open}"`,
      table: {
        defaultValue: {
          summary: Boolean,
        },
      },
    },
    updateEditList: {
      description: "Input event to edit list",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    discardEditChanges: {
      description: "Input event to close input",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    editListInput: {
      description: "@change event to track edit input",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    addNewListNode: {
      description: "@change event to get new node input value",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    addListInNode: {
      description: "@change event to save changes for new node",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    discardListInNode: {
      description: "@change event to discard new node",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    focusNewNode: {
      description: "@focus new node",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    blurNewNode: {
      description: "@blur new node",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    keydownNewNode: {
      description: "@keydown new node",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    keyupNewNode: {
      description: "@keyup new node",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    TrackNewNode: {
      description: "@change event to get new node input value",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    focusEditNode: {
      description: "@focus edit list",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    blurEditNode: {
      description: "@blur edit list",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    keydownEditNode: {
      description: "@keydown edit list",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    keyupEditNode: {
      description: "@keyup edit list",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    TrackEditNode: {
      description: "@change to get edit list data",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    selectedCheckBoxes: {
      description: "get selected checkboxes",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
    dropdownValue: {
      description: "get selected dropdown value",
      table: {
        defaultValue: {
          summary: Event,
        },
      },
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdTree },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {

    const select = ref(10);

    const buttons = ref([
      {
        id: 0,
        buttonType: "Create",
        label: "",
        color: "white",
        size: "16",
        icon: "Plus",
      },
      {
        id: 1,
        buttonType: "Edit",
        label: "",
        color: "white",
        size: "16",
        icon: "Pencil",
      },
    ]);

    const values = ref([
      {
        name: "DropDown Menu 1",
        value: 1,
        icon: "Plus",
      },
      {
        name: "DropDown Menu 2",
        value: 2,
        icon: "Pencil",
      },
      {
        name: "DropDown Menu 3",
        value: 3,
        icon: "Trash",
      },
      {
        name: "DropDown Menu 4",
        value: 4,
        icon: "Alert",
      },
    ]);

    function generateArrayWithUniqueIds(count) {
      let nextId = 1;

      function generateChildrenArray(level, maxLevel) {
        const children = [];
        const numChildren = Math.floor(Math.random() * count) + 1;

        for (let i = 0; i < numChildren; i++) {
          const childId = nextId++;
          const childLabel = `Child ${childId}`;
          const child = {
            id: childId,
            label: childLabel,
            icon: "",
            checkbox: true,
            checked: false,
            badge: true,
            actions: true,
            disabled: false,
            count: count.toString(),
            children: [],
          };

          if (level < maxLevel) {
            child.children = generateChildrenArray(level + 1, maxLevel);
          }

          children.push(child);
        }

        return children;
      }

      const topLevelArray = [];
      const numTopLevelItems = Math.floor(Math.random() * count) + 1;

      for (let i = 0; i < numTopLevelItems; i++) {
        const topLevelId = nextId++;
        const topLevelLabel = `Top Level ${topLevelId}`;
        const topLevelItem = {
          id: topLevelId,
          label: topLevelLabel,
          icon: "",
          checkbox: true,
          checked: false,
          badge: true,
          actions: true,
          disabled: false,
          count: count.toString(),
          children: generateChildrenArray(1, 3),
        };

        topLevelArray.push(topLevelItem);
      }

      return topLevelArray;
    }

    const generatedArray = generateArrayWithUniqueIds(select.value);

    return { generatedArray, args, buttons, values };
  },

  template: `<div> 
  <dd-tree
    v-bind="args"
    :list="generatedArray"
    :buttons="buttons"
    :values="values"
  />
  </div>`,
});

export const Default = Template.bind({});
export const Actions = Template.bind({});
export const Badge = Template.bind({});
export const Dropdown = Template.bind({});
export const CustomData = Template.bind({});
export const checkbox = Template.bind({});
export const treeFeatured = Template.bind({});
Default.args = {};

Actions.args = {
  actionButton: true,
};
Badge.args = {
  badge: "2345",
};
Dropdown.args = {
  actionButton: true,
  dropdownProp: true,
  showIcon: true,
};
CustomData.args = {
  customContent: true,
};
checkbox.args = {
  checkBoxProp: true,
};

treeFeatured.args = {
  actionButton: true,
  checkBoxProp: true,
  badge: "2345",
  dropdownProp: true,
  showIcon: true,
  customContent: true,
};
