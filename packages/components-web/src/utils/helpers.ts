export const addEventListener = (
  el: any,
  eventName: string,
  callback: any,
  opts?: any
) => {
  return el.addEventListener(eventName, callback, opts);
};

export const removeEventListener = (
  el: any,
  eventName: string,
  callback: any,
  opts?: any
) => {
  return el.removeEventListener(eventName, callback, opts);
};
