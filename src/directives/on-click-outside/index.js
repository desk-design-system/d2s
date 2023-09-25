export const onClickOutside = {
    mounted(el, binding) {
        const clickHandler = ( event )=>{
            if(!el || el == event.target || event.composedPath().includes(el)) return
            binding.value()
        }
        el._clickOutsideHandler = clickHandler;
        document.addEventListener('click',clickHandler)
    },
    unmounted(el) {
        document.removeEventListener('click', el._clickOutsideHandler);
        delete el._clickOutsideHandler;
    }
  }