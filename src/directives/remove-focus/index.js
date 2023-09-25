export const removeFocus = (el, binding) => {
  if (!el || !binding.value) return;
  if (binding.value) {
    el.blur();
  }
  return;
};
