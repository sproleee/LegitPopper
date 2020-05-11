const LEGIT_POPPER_CLOSE = "legitpopper";

export const getDataFromStorage = () => JSON.parse(localStorage.getItem(LEGIT_POPPER_CLOSE));

export const setDataInStorage = val =>
  localStorage.setItem(LEGIT_POPPER_CLOSE, JSON.stringify(val));
