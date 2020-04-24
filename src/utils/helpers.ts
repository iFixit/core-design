export const findItemLabel = (componentEl: HTMLElement) => {
  const itemEl = componentEl.closest("core-input");
  if (itemEl) {
    return itemEl.querySelector("core-label");
  }
  return null;
};
