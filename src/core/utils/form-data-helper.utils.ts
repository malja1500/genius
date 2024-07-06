export const onFormData = (obj: any) => {
  const formData = new FormData();

  Object.keys(obj).forEach((key) => {
    const itemValue = obj[key];
    formData.append(key, itemValue);
  });

  return formData;
};
