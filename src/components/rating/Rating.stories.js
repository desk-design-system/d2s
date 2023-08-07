import DdRating from "./index.vue"

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Rating',
  component: DdRating,
}



export const Small = {
  render: (args) => ({
    components: {
      DdRating,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-rating productRating="3" starWidth="20" starHeight="20" />`,
  }),
  argTypes: {
    productRating: {
      control: {
        type: 'select'
      },
      options: [1, 2, 3, 4, 5],
      description: "Change rating values",
      table: {
        defaultValue: {
          summary: 3
        }
      }
    },
    starWidth: {
      control: {
        type: 'select'
      },
      options: ['20', '24', '28'],
      description: "Change star rating width",
    },
    starHeight: {
      control: {
        type: 'select'
      },
      options: ['20', '24', '28'],
      description: "Change star rating height",
    },
  }
};


export const Medium = {
  render: (args) => ({
    components: {
      DdRating,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-rating productRating="3" starWidth="24" starHeight="24" />`,
  }),
  argTypes: {
    productRating: {
      control: {
        type: 'select'
      },
      options: [1, 2, 3, 4, 5],
      description: "Change rating values",
      table: {
        defaultValue: {
          summary: 3
        }
      }
    },
    starWidth: {
      control: {
        type: 'select'
      },
      options: ['20', '24', '28'],
      description: "Change star rating width",
    },
    starHeight: {
      control: {
        type: 'select'
      },
      options: ['20', '24', '28'],
      description: "Change star rating height",
    },
  }
};


export const Large = {
  render: (args) => ({
    components: {
      DdRating,
    },
    setup() {
      return {
        args,
      };
    },
    template: `<dd-rating productRating="3" starWidth="28" starHeight="28" />`,
  }),
  argTypes: {
    productRating: {
      control: {
        type: 'select'
      },
      options: [1, 2, 3, 4, 5],
      description: "Change rating values",
      table: {
        defaultValue: {
          summary: 3
        }
      }
    },
    starWidth: {
      control: {
        type: 'select'
      },
      options: ['20', '24', '28'],
      description: "Change star rating width",
    },
    starHeight: {
      control: {
        type: 'select'
      },
      options: ['20', '24', '28'],
      description: "Change star rating height",
    },
  }
};

Small.parameters = {
  docs: {
    source: {
      code: `<dd-rating productRating="3" starWidth="20" starHeight="20" />`,
    },
  },
};

Medium.parameters = {
  docs: {
    source: {
      code: `<dd-rating productRating="3" starWidth="24" starHeight="24" />`,
    },
  },
};

Large.parameters = {
  docs: {
    source: {
      code: `<dd-rating productRating="3" starWidth="28" starHeight="28" />`,
    },
  },
};