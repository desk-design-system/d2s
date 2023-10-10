<template>
  <dd-popper :show="showDropdown">
    <div v-bind="$attrs" ref="componentRef">
      <!---- label ---->
      <slot name="label">
        <label v-if="label" class="dd-block dd-text-sm dd-font-medium dd-text-gray-700 dd-mb-1">{{ label }}
          <span v-if="isRequired" class="dd-text-red-500">*</span></label>
      </slot>
      <multiSelect :isIconRotated="isIconRotated" ref="dropdownInputWidth" :inputBasicCssClasses="inputBasicCssClasses"
        :showAvatar="showAvatar" :showDropdown="showDropdown" :hasError="hasError" :inputSize="inputSize"
        :showCollapseTag="showCollapseTag" :disabled="disabled" :filterable="filterable" :collapseTags="collapseTags"
        :maxCollapseTags="maxCollapseTags" :selectedOptionsArray="selectedOptionsArray" :selectedOptions="selectedOptions"
         :selectedValue="selectedValue" :srcLink="srcLink"
        @toggleDropdown="toggleDropdown" @searchQuery="searchQuery" @removeItem="removeItem" v-if="multiple" />
      <singleSelect :placeholder="placeholder" :isIconRotated="isIconRotated" ref="dropdownInputWidth" :inputBasicCssClasses="inputBasicCssClasses"
        :inputModelValue="inputModelValue" :showAvatar="showAvatar" :showDropdown="showDropdown" :hasError="hasError"
        :inputSize="inputSize" :disabled="disabled" :filterable="filterable" :collapseTags="collapseTags"
        :selectedOptions="selectedOptions"  :selectedValue="selectedValue"
        :srcLink="srcLink" @toggleDropdown="toggleDropdown" @searchQuery="searchQuery" v-else />
      <span v-if="errorMessage" class="dd-text-xs dd-text-red-600 dd-capitalize error-message">{{ errorMessage }}</span>
    </div>
    <template v-if="showDropdown" #content>
      <div id="ulList">
      <ul v-if="filteredOptions.length > 0" ref="dropdownList" :style="dropdownStyle"
        class="dd-max-h-60 dd-overflow-auto">
        <li v-for="(item, index) in filteredOptions" :key="item[props.defaultProps.value]"
          :value="item[props.defaultProps.value]"
          class="select-item hover:dd-bg-teal-600 hover:!dd-text-white dd-cursor-pointer dd-select-none dd-relative dd-py-2"
          :class="[
            props.checkIcon == 'left'
              ? ' dd-pl-8 dd-pr-4'
              : ' dd-pl-3 dd-pr-9'
          ]" @click="selectItem(item)">
          <div class="dd-flex dd-items-center">
            <span v-show="!multiple && showOnline && props.checkIcon != 'left'" class="dd-mr-3" :class="[
              (inputModelValue == item[props.defaultProps.name] || (queryPlaceholder == item[props.defaultProps.name]))
                ? 'dd-bg-green-400' : 'dd-bg-gray-200',
              'dd-inline-block dd-h-2 dd-w-2 dd-flex-shrink-0 dd-rounded-full',
            ]" aria-hidden="true">
            </span>
            <ddAvatar size="mini" class="dd-mr-3" v-if="showAvatar" :srcLink="item[props.defaultProps.avatar]" />
            <span :class="[
              !multiple && props.checkIcon != 'none' && (inputModelValue == item[props.defaultProps.name]
                || (queryPlaceholder == item[props.defaultProps.name]))
                ? 'dd-font-semibold' : 'dd-font-normal',
              'dd-block dd-truncate',
            ]">
              {{ item[props.defaultProps.name] }}
            </span>
            <!-- tick icon single select -->
          </div>
          <span v-if="(!multiple && props.checkIcon != 'none' && (inputModelValue == item[props.defaultProps.name]
            || (queryPlaceholder == item[props.defaultProps.name])))" class="custom-tick" :class="[
    `dd-absolute dd-inset-y-0 dd-flex dd-items-center ${props.checkIcon == 'left'
      ? 'dd-left-1 pl-1.5'
      : 'dd-right-0 dd-pr-4'
    }`
  ]">
            <CheckIcon class="dd-h-5 dd-w-5" aria-hidden="true" />
          </span>

          <!----- For multiple select  ----->
          <span v-if="multiple">
            <span v-for="(element, selectedIndex) in selectedOptions" :key="selectedIndex">
              <!---- tick icons ---->
              <span v-if="item.value == selectedOptions[selectedIndex]?.value" class="custom-tick" :class="[
                `dd-absolute dd-inset-y-0 dd-flex dd-items-center ${props.checkIcon == 'left'
                  ? 'dd-left-1 pl-1.5'
                  : 'dd-right-0 dd-pr-4'
                }`
              ]">
                <CheckIcon class="dd-h-5 dd-w-5" aria-hidden="true" />
              </span>
            </span>
          </span>
        </li>
        <!-- add a SLOT here as sajjad bhai suggest and open and close it here on same line -->
      </ul>
      <!-- add new -->
      <ul :style="dropdownStyle" class=" dd-text-center dd-rounded-md add-new"
        v-if="queries !== '' && filteredOptions.length === 0 && addNewItem">
        <li
          class="dd-py-2 dd-px-3  dd-text-sm dd-text-left dd-text-gray-500 dd-text dd-font-semibold hover:dd-bg-teal-600 hover:!dd-text-white dd-cursor-pointer"
          @click="addQuery(queries)">
          Add as new:
          <span class="dd-break-words">{{ queries }}</span>
        </li>
      </ul>
    </div>
      <!-- </template> -->
    </template>
  </dd-popper>
</template>
<script setup>
import { useField } from "vee-validate"
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, watchEffect } from "vue"
import { CheckIcon, ChevronDownIcon } from "@heroicons/vue/solid"
import multiSelect from "./multiSelectView.vue"
import singleSelect from "./singleSelectView.vue"
import ddAvatar from "../avatars/index.vue"
import ddPopper from "../Popper/index.vue"
//emits
const emits = defineEmits( [
  "update:modelValue",
  "change",
  "addnewItem"
] )

//props
const props = defineProps( {
  label: {
    type: String,
    default: "",
  },
  rules: {
    type: [String, RegExp, Function],
    default: "",
  },
  showOnline: {
    type: Boolean,
    default: false,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: () => "Select" + Math.floor( Math.random() * 5000 ),
  },
  itemText: {
    type: String,
    default: 'name'
  },
  itemValue: {
    type: String,
    default: 'value'
  },
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  filterable: {
    type: Boolean,
    default: false,
  },
  collapseTags: {
    type: Boolean,
    default: false,
  },
  maxCollapseTags: {
    type: [Number, String],
    default: null,
  },
  addNewItem: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: null,
  },
  showAvatar: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [Number, String, Array],
    default: null,
  },
  srcLink: {
    type: [String],
    default: null,
  },
  size: {
    type: String,
    validator: function ( value ) {
      // The value must match one of these strings
      return ["xs", "sm", "base", "lg", "xl"].indexOf( value ) !== -1
    },
    default: "base",
  },
  checkIcon: {
    type: String,
    validator: function ( value ) {
      // The value must match one of these strings
      return ["left", "right", "none"].indexOf( value ) !== -1
    },
    default: "right",
  },
  defaultProps: {
    type: Object,
    default: () => ( {
      name: "name",
      value: "value",
      avatar: "avatar",
    } ),
  },
} )

//data properties
const inputValue = ref( '' )
const isIconRotated = ref( false )
const showDropdown = ref( false )
const queries = ref( "" )
const queryPlaceholder = ref( "" )
const componentRef = ref( null )
const dropdownInput = ref( "" )
const dropdownInputWidth = ref( null )
const dropdownList = ref( null )
const selectedOptions = ref( [] )
const inputClass = ref( null )

//computed
const inputModelValue = computed( {
  get () {
    return props.multiple ? '' : props.options.find( item => item[props.itemValue] === props.modelValue )?.[props.itemText]
  },
  set ( val ) {
    emits( "update:modelValue", val )
    emits( "change", val )
  },
} )

const filteredOptions = computed( () => {
  return queries.value == ""
    ? props.options
    : props.options.filter( ( el ) => {
      return el.name.toLowerCase().includes( queries.value.toLowerCase() )
    } )
}
)

const inputSize = computed( () => {
    if (props.multiple) {
      return  props.size === "lg" ? 'dd-min-h-[40px]' : 'dd-min-h-[32px]'
    } else{
      return      props.size === "lg" ? 'dd-h-[40px]' : 'dd-h-[32px]'
    }
} )

const inputBasicCssClasses = " dd-shadow-sm dd-rounded-md select-input dropdown-button  dd-items-center dd-cursor-pointer dd-bg-white dd-relative  dd-pl-3 dd-pr-10 dd-py-2 dd-text-left sm:dd-text-sm !dd-w-full !dd-flex-1"

const selectedValue = computed( () => {
  if ( !props.multiple ) {
    return props.options.find( ( predicate ) => {
      return predicate[props.defaultProps.value] == inputModelValue.value
    } )
  }
} )

const hasError = computed( () => {
  if ( errorMessage.value ) {
    return true
  } else {
    return false
  }
} )

//watcher
watch( [queries, filteredOptions], ( [newVal] ) => {
  filteredOptions.value.filter( ( el ) => {
    return el.name.toLowerCase().includes( newVal.toLowerCase() )
  } )
  if ( newVal ) {
    showDropdown.value = true
  }
} )

//mounted hook
onMounted( () => {
  window.addEventListener( 'click', handleOutsideDropdown )
} )

//destroy hook
onBeforeUnmount( () => {
  window.removeEventListener( 'click', handleOutsideDropdown )
} )

watchEffect( () => {
  let dynamicWidth = null
  if ( dropdownInputWidth.value ) {
    dynamicWidth = dropdownInputWidth.value.dropdownInputWidth
  }
  if ( dynamicWidth ) {
    inputClass.value = `left: ${dynamicWidth.getBoundingClientRect().left}px; width: ${dynamicWidth.getBoundingClientRect().width}px; top: ${dynamicWidth.getBoundingClientRect().top + 30}px`
  } else if ( dropdownInput.value ) {
    inputClass.value = `left: ${dropdownInput.value.getBoundingClientRect().left}px; width: ${dropdownInput.value.getBoundingClientRect().width}px; top: ${dropdownInput.value.getBoundingClientRect().top + 30}px`
  }
} )

const dropdownStyle = computed( () => {

  return inputClass.value

} )
//methods
const handleOutsideDropdown = ( event ) => {
  if(event.composedPath().some((row) => row.id == "ulList")) {
    return false
  }
  /* handled close case of dropdown */
  if ( event.target !== componentRef.value && event.composedPath().includes( componentRef.value ) ) return


  if ( ( queries.value == props.modelValue ) && showDropdown.value && !queryPlaceholder.value ) {
    // emits("update:modelValue", "");
    showDropdown.value = false
    isIconRotated.value = false
    queries.value = ""
    return
  }
  if ( showDropdown.value && queryPlaceholder.value ) {
    showDropdown.value = false
    isIconRotated.value = false
    queries.value = ""
    return
  }
  showDropdown.value = false
  isIconRotated.value = false
  /* Set the last selected item in select dropdown */
  queries.value = ""
  emits( "update:modelValue", props.modelValue )
}

const selectItem = ( item ) => {
  if ( props.multiple ) {
    addAndRemoveItem( item )
    queries.value = ""
    showDropdown.value = true
    return
  }
  else if ( !props.multiple ) {
    showDropdown.value = false
    queries.value = ""
    emits( "update:modelValue", item[props.itemValue] )
    emits( "change", item )
  }
}

const searchQuery = ( val ) => {
  queries.value = val
  console.log( queries, "val" )
}

const selectedOptionsArray = computed( () => {
  if ( props.collapseTags && !props.maxCollapseTags ) {
    return selectedOptions.value.filter( ( _, index ) => index == 0 )
  } else if ( props.collapseTags && props.maxCollapseTags ) {
    return selectedOptions.value.filter( ( _, index ) => index <= props.maxCollapseTags - 1 )
  } else {
    return selectedOptions.value
  }
}
)

const showCollapseTag = computed( () => {
  if ( props.multiple && props.collapseTags && !props.maxCollapseTags && selectedOptions.value.length > 1 ) return true
  else if ( props.multiple && props.collapseTags && props.maxCollapseTags && props.maxCollapseTags < selectedOptions.value.length ) return true
  else return false
} )

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
  isIconRotated.value = !isIconRotated.value
}

const addQuery = ( query ) => {
  queries.value = query
  emits( "addnewItem", query )
  queries.value = ''
  // const queryObj = {
  //   name: query,
  //   value: props.options.length + 1,
  // }
  // if ( props.multiple ) {
  //   props.options.unshift( queryObj )
  //   selectedOptions.value.push( queryObj )
  //   showDropdown.value = true
  //   queries.value = ""
  //   emits( "update:modelValue", selectedOptions.value )
  //   return
  // }
  // props.options.unshift( queryObj )
  // emits( "update:modelValue", queryObj.name )
  // showDropdown.value = false
  // isIconRotated.value = false
  // queries.value = ""
//   const test = ( e ) => {
//   q.value = Date.now()
//   console.log( e, "e" )
//   data.value.push( {
//     name: e,
//     value: q.value
//   } )
// }
}

const findItem = ( val ) => {
  const item = props.options.find( ( predicate ) =>
    predicate[props.defaultProps.value] == val
  )
  return item?.[props.defaultProps.name] ?? queries.value
}

const getRules = () => {
  if ( props.rules instanceof RegExp ) {
    return { regex: props.rules }
  }
  return props.rules
}

const { errorMessage, value, handleChange } = useField( props.name, getRules(), {
  label: props.name,
} )

//For multiselect push and splice from selected array
const addAndRemoveItem = ( item ) => {
  const indexToRemove = selectedOptions.value.findIndex( el => el.value === item.value )
  if ( indexToRemove !== -1 ) {
    selectedOptions.value.splice( indexToRemove, 1 )
    emits( 'update:modelValue', selectedOptions.value )
    console.log( "Inside If", selectedOptions.value )
  }
  else {
    selectedOptions.value.push( item )
    console.log( "Inside else", selectedOptions.value )
    emits( 'update:modelValue', selectedOptions.value )
  }
}

const listChange = () => {
  inputModelValue.value = selectedOptions.value.map( ( row ) => row[props.defaultProps.value] )
}

const removeItem = ( item ) => {
  selectedOptions.value = selectedOptions.value.filter( ( ele ) => ele[props.defaultProps.value] != item[props.defaultProps.value] )
  emits( 'update:modelValue', selectedOptions.value )
}

const focusToInput = ( e ) => {
  inputValue.value = ""
  dropdownInput.value.focus()
}
</script>
