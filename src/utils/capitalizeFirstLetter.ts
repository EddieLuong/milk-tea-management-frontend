export const capitalizeFirstLetter = (string) => {
  return string.replace(/(^|\s)\S/g, (l) => l.toUpperCase());
};
