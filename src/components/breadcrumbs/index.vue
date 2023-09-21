<template>
  <nav class="flex dd-my-3" aria-label="Breadcrumb">
    <ol :class="[shadow ? 'dd-shadow dd-bg-white' : '', full ? 'dd-w-full' : 'dd-w-fit']" role="list" class="dd-flex dd-rounded-md dd-gap-4">
      <li v-for="(item, index ) in items" :key="index" class="dd-flex">
        <div class="dd-flex dd-items-center">
          <component v-if="(index +1) != items.length" v-bind="matchProperties(item)"
            class=" dd-text-sm dd-font-medium"
            :class="`${item.disabled ? 'dd-text-gray-400 dd-cursor-not-allowed' : 'dd-text-gray-500 dd-cursor-pointer hover:dd-text-teal-700'}`"
            :is="getBreadcrumbItemTag(item)">
              <HomeIcon v-if="index == 0" class="dd-h-5 dd-w-5 dd-flex-shrink-0" aria-hidden="true" />
             <span v-else>{{ item.name }}   </span> 
          </component>
          <p @click.stop="" v-else class="dd-text-sm dd-cursor-not-allowed dd-text-gray-400">{{ item.name }}</p>
          <span v-if="index +1 != items.length" class="dd-flex-shrink-0 dd-text-gray-200 dd-ml-3">
          <svg v-if="shadow" class="dd-mb-[-6px] dd-h-full dd-w-6" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <ChevronRightIcon v-else-if="!shadow && seprator == 'chevron'" class="dd-h-5 dd-w-5" aria-hidden="true" />
          <svg v-else class="dd-w-5 dd-h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
          </svg>
        </span>
        </div>
      </li>
    </ol>
  </nav>
</template>


<script setup>
import { HomeIcon,ChevronRightIcon } from '@heroicons/vue/solid'
const emits = defineEmits( ['update:modelValue', "change"] )
const props = defineProps( {
  items: {
    type: Array,
    required: true
  },
  shadow:{
    type: Boolean,
    default: false
  },
  full:{
    type: Boolean,
    default: true
  },
  seprator: {
    type: String,
    validator: function ( value ) {
      // The value must match one of these strings
      return (
        ["slash", "chevron"].indexOf( value ) !== -1
      )
    },
    default: "slash",
  },
  defaultProps: {
    type: Object,
    default: () => ( {
      name: 'name',
      to: 'to',
      link: 'link'
    } )
  }
} )
const matchProperties = (item) =>{
  if(item[props.defaultProps.to]){
    return {
      to: item[props.defaultProps.to]
    }
  } else{
    return{
      href: item[props.defaultProps.link]
    }
  }
}

function getBreadcrumbItemTag ( item ) {
  if ( item.disabled ) {
    return 'span'
  } else {
    return item[props.defaultProps.to] ? 'router-link' : 'a'
  }
}
</script>