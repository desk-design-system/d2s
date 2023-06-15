import DdAccordion from "../Accordion/index.vue"
import DdAccordionTab from "./index.vue"
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Atoms/AccordionTab',
    component: DdAccordion,
    argTypes: {
        'prepend-icon': {
          description: 'Pass name of the icon to prepend in the titlw box',
     

        },
        'append-icon': {
          description: 'Pass name of the icon to append in the titlw box', 

        },
        title: {
          description: 'Title for the header.', 
          type: { name: 'string', required: true },
          defaultValue: '',
        },
        '#append': {
          description: 'Append slot.', 
        },
        '#prepend': {
          description: 'Prepend slot.', 
        },
        '#title': {
          description: 'Header slot.', 
        },
      },
    
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const Default = {
    render: (args) => ({
        components: {
            DdAccordion,
            DdAccordionTab
        },
        setup() {
            return {
                args
            };
        },
        template: ` <dd-accordion  :active="0" :multiple='false'>
                          <dd-accordion-tab  :title="args.title" >
                              <h3>This is tab</h3>
                          </dd-accordion-tab>
                        
                    </dd-accordion>`,
    }),
    args: {
      
        title:'Tab',
       

    },

};
export const PrependIcon = {
    render: (args) => ({
        components: {
            DdAccordion,
            DdAccordionTab
        },
        setup() {
            return {
                args
            };
        },
        template: ` <dd-accordion  :active="0" :multiple='false'>
                          <dd-accordion-tab  prepend-icon="Checklist" :title="args.title" >
                              <h3>This is tab</h3>
                          </dd-accordion-tab>
                          
                    </dd-accordion>`,
    }),
    args: {
        'prepend-icon': 'Mobile',
        title:'Tab',
       

    },

};
export const AppendIcon = {
    render: (args) => ({
        components: {
            DdAccordion,
            DdAccordionTab
        },
        setup() {
            return {
                args
            };
        },
        template: ` <dd-accordion  :active="0" :multiple='false'>
                          <dd-accordion-tab  append-icon="Checklist" :title="args.title" >
                              <h3>This is tab</h3>
                          </dd-accordion-tab>
                         
                    </dd-accordion>`,
    }),
    args: {
        'prepend-icon': 'Mobile',
        title:'Tab',
        'append-icon':''

    },

};

Default.parameters = {
    docs: {
      
      source: {
        code:  ` <dd-accordion  :active="1" :multiple='false'>
    <dd-accordion-tab title="Tab-1" >
        <h3>This is tab</h3>
    </dd-accordion-tab>
  
</dd-accordion>`,
      },
    },
};
PrependIcon.parameters = {
    docs: {
      
      source: {
        code:  ` <dd-accordion  :active="1" :multiple='false'>
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
        code:  ` <dd-accordion  :active="1" :multiple='false'>
    <dd-accordion-tab  append-icon="Checklist" title="Tab-1" >
        <h3>This is tab</h3>
    </dd-accordion-tab>

</dd-accordion>`,
      },
    },
};


