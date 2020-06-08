export const findItemLabel = (componentEl: HTMLElement) => {
  const itemEl = componentEl.closest("div");
  if (itemEl) {
    return itemEl.querySelector("core-field-label");
  }
  return null;
};
