import { computed } from "vue";
import { ref } from "vue";

export const useSelect = (props, emits, update) => {
  const showDropdown = ref(false);
  const query = ref("");
  const optionsClone = ref([...props.options]);
  const placeholder = ref(false)

  const queryModelValue = computed({
    get() {
      return query.value
        ? query.value
        : optionsClone.value.find(
            (item) => item[props.itemValue] === props.modelValue
          )?.[props.itemText];
    },
    set(val) {
      query.value = val;
    },
  });


  const selectItem = (item) => {
    hideDropdown();
    query.value = "";
    emits("update:modelValue", item[props.itemValue]);
    emits("change", item[props.itemValue]);
  };

  const filteredOptions = computed(() => {
    if (query.value?.length && props.filterable) {
      return optionsClone.value.filter((option) =>
        option.name.toLowerCase().includes(query.value.toLowerCase())
      );
    } else {
      return optionsClone.value;
    }
  });


  const searchQuery = (event) =>{
    query.value = event.target.value
  }

  const addItem = (val) => {
    const item = { name: val, value: val };
    optionsClone.value.push(item);
     emits("update:modelValue", item[props.itemValue]);
    emits("change", item[props.itemValue]);
  };

  const hideDropdown = () => {
    query.value = null;
    showDropdown.value = false;
    placeholder.value = false
  };

  const openDropdown = () => {
   showDropdown.value = !showDropdown.value;
   placeholder.value = true
    update()

  };

  return {
    showDropdown,
    query,
    queryModelValue,
    filteredOptions,
    placeholder,
    searchQuery,
    selectItem,
    addItem,
    hideDropdown,
    openDropdown,
  };
};
