const setItem = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key: string) => {
  if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key)!);
  return false;
};

const getItemGeneric = (key: string) => {
  if (localStorage.getItem(key)) return localStorage.getItem(key);
  return false;
};

const setItemGeneric = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

const removeItem = (key: string) => {
  if (getItem(key) === false) return false;
  localStorage.removeItem(key);
};

const clearStorage = () => {
  localStorage.clear();
};

export {
  setItem,
  getItem,
  removeItem,
  clearStorage,
  setItemGeneric,
  getItemGeneric,
};
