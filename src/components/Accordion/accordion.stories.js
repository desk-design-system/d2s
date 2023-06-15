import DdAccordion from "./index.vue"
import DdAccordionTab from "../AccordionTab/index.vue"
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Accordion',
    component: DdAccordion,
    argTypes: {
        active: {
          description: 'This prop is for the active tab. Pass number (like 1,2,3) in case of single active and array of numbers in case of multiple active [1]', 
          type: { name: 'number', required: true },
          defaultValue: '0',
        },
        multiple: {
          description: 'Prop for activating multple tabs. Pass true only in case of multiple active', 
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
        template: ` <dd-accordion :active="0" :multiple='false'>
                          <dd-accordion-tab title="Tab-1" >
                              <h3>This is tab 1</h3>
                          </dd-accordion-tab>
                          <dd-accordion-tab title="Tab-2" >
                              <h3>This is tab 2</h3>
                          </dd-accordion-tab>
                    </dd-accordion>`,
    }),
    args: {
        active: 0,
        multiple:false

    },



};
export const SingleActive = {
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
        template: ` <dd-accordion :active="1" :multiple='false'>
                          <dd-accordion-tab title="Tab-1" >
                              <h3>This is tab 1</h3>
                          </dd-accordion-tab>
                          <dd-accordion-tab title="Tab-2" >
                              <h3>This is tab 2</h3>
                          </dd-accordion-tab>
                    </dd-accordion>`,
    }),
    args: {
        active: 1,
        multiple:false

    },



};
export const MultipleActive = {
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
        template: `<dd-accordion :active="[1,2]" :multiple='true'>
                          <dd-accordion-tab title="Tab-1" >
                              <h3>This is tab 1</h3>
                          </dd-accordion-tab>
                          <dd-accordion-tab title="Tab-2" >
                              <h3>This is tab 2</h3>
                          </dd-accordion-tab>
                        </dd-accordion>`,
      
            
    }),
    args: {
        active: [1,2],
        multiple:true
    },
};

Default.parameters = {
    docs: {
      
      source: {
        code:  ` 
        <dd-accordion :active="0" >
    <dd-accordion-tab title="Tab-1" >
        <h3>This is tab 1</h3>
    </dd-accordion-tab>
    <dd-accordion-tab title="Tab-2" >
        <h3>This is tab 2</h3>
    </dd-accordion-tab>
</dd-accordion>`,
      },
    },
};
SingleActive.parameters = {
    docs: {
      
      source: {
        code:  ` 
        <dd-accordion :active="1" >
    <dd-accordion-tab title="Tab-1" >
        <h3>This is tab 1</h3>
    </dd-accordion-tab>
    <dd-accordion-tab title="Tab-2" >
        <h3>This is tab 2</h3>
    </dd-accordion-tab>
</dd-accordion>`,
      },
    },
};

MultipleActive.parameters = {
    docs:{
        source:{
            code:`
            <dd-accordion active="[1]" multiple>
    <dd-accordion-tab title="Tab-1" >
        <h3>This is tab 1</h3>
    </dd-accordion-tab>
    <dd-accordion-tab title="Tab-2" >
        <h3>This is tab 2</h3>
    </dd-accordion-tab>
</dd-accordion>`
        }
    }

}

