import { ThemeEnum } from "../redux/themeSlice";

export const storage = {

  setItem: (name: string, item: any) => {
    localStorage.setItem(name, JSON.stringify(item));
  },

  getItem: (name: string) => {
    const item = localStorage.getItem(name);
    if (item) {
      const theme = JSON.parse(item);
      return theme === 'dark' ? ThemeEnum.DARK : ThemeEnum.LIGHT;
    }
    return ThemeEnum.DARK
  },

  getCities: (name: string) => {
    const items = localStorage.getItem(name);
    if (items) {
      return JSON.parse(items);
    }
    return [{ value: "", label: "" }]
  },
};
