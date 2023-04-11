<template>
  <div aria-live="assertive"
    class="dd-pointer-events-none dd-fixed dd-inset-0 dd-flex dd-items-end dd-px-4 dd-py-6 sm:dd-items-start sm:dd-p-6">
    <div class="dd-flex dd-w-full dd-flex-col dd-items-center dd-space-y-4 sm:dd-items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition enter-active-class="dd-transform dd-ease-out dd-duration-300 dd-transition"
        enter-from-class="dd-translate-y-2 dd-opacity-0 sm:dd-translate-y-0 sm:dd-translate-x-2"
        enter-to-class="dd-translate-y-0 dd-opacity-100 sm:dd-translate-x-0"
        leave-active-class="transition ease-in duration-100" leave-from-class="dd-opacity-100"
        leave-to-class="dd-opacity-0">
        <div ref="root" v-show="show"
          class="dd-mt-5 dd-pointer-events-auto dd-w-[350px] dd-overflow-hidden dd-rounded-lg dd-bg-white dd-shadow-lg dd-ring-1 dd-ring-black dd-ring-opacity-5">
          <div class="dd-p-4">
            <div class="dd-flex dd-items-start">
              <div class="dd-flex-shrink-0">
                <component v-if="conditionalIcons" :is="conditionalIcons.icon" :class="conditionalIcons.class"
                  class="dd-h-6 dd-w-6" aria-hidden="true" />

              </div>
              <div class="dd-ml-3 dd-w-0 dd-flex-1 dd-pt-0.5">
                <p class="dd-text-sm dd-font-medium dd-text-gray-900">{{ title }}</p>
                <p class="dd-mt-1 dd-text-sm dd-text-gray-500"> {{ message }}</p>
              </div>
              <div class="dd-ml-4 dd-flex dd-flex-shrink-0">
                <button type="button" @click="closeNotification()"
                  class="dd-inline-flex dd-rounded-md dd-bg-white dd-text-gray-400 hover:dd-text-gray-700 ">
                  <span class="dd-sr-only">Close</span>
                  <XIcon class="dd-h-4 dd-w-4 " aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup>
import { computed, onBeforeMount, onMounted, ref, watch } from "vue"
import { CheckCircleIcon, XIcon, XCircleIcon, InformationCircleIcon, ExclamationIcon } from '@heroicons/vue/outline'
import { removeElement } from "./helpers"
const props = defineProps( {
  show: Boolean,
  timeout: Number,
  message: String,
  type: String,
  title: String,
  placement: String,
  offSet:{
    type: [Number],
    default: 2
  } 
} )

const bgClasses = {
  Success: "teal-50",
  Error: "red-50",
  Info: "red-50", //ToDo: change class
  Warning: "red-50", //ToDo: change class
}

const textClasses = {
  Success: "teal-600",
  Error: "red-600",
  Info: "red-600", //ToDo: change class
  Warning: "red-600", //ToDo: change class
}

const borderClasses = {
  Success: "teal-900",
  Error: "red-900",
  Info: "red-900", //ToDo: change class
  Warning: "red-900", //ToDo: change class
}


const alertOptions = computed( () => {
  return {
    status: props.type,
    showClose: true,
    bgClass: bgClasses[props.type],
    textClass: textClasses[props.type],
    borderClass: borderClasses[props.type],
    rounded: true,
  }
} )
const conditionalIcons = computed( () => {
  switch ( props.type ) {
    case "Success":
      return {
        icon: CheckCircleIcon,
        class: "dd-text-green-500"
      }

    case "Warning":
      return {
        icon: ExclamationIcon,
        class: "dd-text-yellow-500"
      }
    case "Error":
      return {
        icon: XCircleIcon,
        class: "dd-text-red-500"
      }
    case "Info":
      return {
        icon: InformationCircleIcon,
        class: "dd-text-blue-400"
      }

    default:
      return null
      break
  }
} )

const emit = defineEmits( ["update:show", "removeElement"] )
const closeNotification =() =>{
  emit('update:show', false)
} 
const parentTop = ref( null )
const root = ref( null )
onBeforeMount( () => {
  parentTop.value = document.getElementById( props.placement )
  if ( !parentTop.value ) {
    parentTop.value = document.createElement( "div" )
    parentTop.value.id = props.placement
    switch ( props.placement ) {
      case 'topLeft':
        parentTop.value.style
        parentTop.value.className = `dd-absolute dd-left-[3%] dd-top-[${props.offSet}%]`
        break
      case 'bottomLeft':
        parentTop.value.className = "dd-absolute dd-left-[3%] dd-bottom-[5%]"
        break
      case 'bottomRight':
        parentTop.value.className = "dd-absolute dd-right-[3%] dd-bottom-[5%]"
        break
      case 'topRight':
      default:
        parentTop.value.className = "dd-absolute dd-right-[3%] dd-top-[11%]"
        break
    }

    document.body.appendChild( parentTop.value )
  }
} )
onMounted( () => {
  const wrapper = root.value.parentElement
  parentTop.value.insertAdjacentElement( "afterbegin", root.value )
  removeElement( wrapper )
} )

watch(
  () => props.show,
  ( sum ) => {
    if ( sum ) {
      setTimeout( () => {
        close()
      }, props.timeout )
    }
  }
)

const close = () => {
  emit( "update:show", false )
  emit( "removeElement" )
}
</script>