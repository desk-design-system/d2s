import DdTable from "./index.vue"
import { ref } from 'vue'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Table',
  component: DdTable,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    rows: {
      description: "Pass data array in rows",
      table: {
        defaultValue: {
          summary: []
        }
      }
    },
    columns: {
      description: "Pass data array in columns",
      table: {
        defaultValue: {
          summary: []
        }
      }
    },
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = ( args ) => ( {
  // Components used in your story `template` are defined in the `components` object
  components: { DdTable },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    const columns = ref( [
      {
        title: 'Id',
        value: 'id'
      },
      {
        title: 'User Name',
        value: 'username'
      },
      {
        title: 'First Name',
        value: 'firstname'
      },
      {
        title: 'Last Name',
        value: 'lastname'
      },
      {
        title: 'Email',
        value: 'email'
      },
    ] )
    const rows = ref( [
      {
        id: 1,
        username: "Herry007",
        firstname: "Herry",
        lastname: "Brook",
        email: "herry@repairdesk.co"
      },
      {
        id: 2,
        username: "David2",
        firstname: "David",
        lastname: "Jeman",
        email: "David@repairdesk.co"
      },
      {
        id: 3,
        username: "Henry0",
        firstname: "Henry",
        lastname: "Cavil",
        email: "henry@repairdesk.co"
      },
      {
        id: 4,
        username: "Herry007",
        firstname: "Herry",
        lastname: "Brook",
        email: "herry@repairdesk.co"
      },
      {
        id: 5,
        username: "JSmith",
        firstname: "John",
        lastname: "Smith",
        email: "john.smith@example.com"
      },
      {
        id: 6,
        username: "LGreen",
        firstname: "Lucy",
        lastname: "Green",
        email: "lucy.green@example.com"
      },
      {
        id: 13,
        username: "AMiller",
        firstname: "Alice",
        lastname: "Miller",
        email: "alice.miller@example.com"
      },
      {
        id: 14,
        username: "BDavis",
        firstname: "Bob",
        lastname: "Davis",
        email: "bob.davis@example.com"
      },
      {
        id: 15,
        username: "KJohnson",
        firstname: "Kate",
        lastname: "Johnson",
        email: "kate.johnson@example.com"
      }
    ] )
    return { columns, rows, args }

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-table  v-bind="args"   :rows="rows" :columns="columns"  />  ',
} )



export const Default = Template.bind( {} )

// More on args: https://storybook.js.org/docs/vue/writing-stories/args



