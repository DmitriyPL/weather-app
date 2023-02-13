import { ThemeEnum } from "../redux/themeSlice";

export const storage = {
  setItem: (name: string, item: any) => {
    return new Promise<void>((resolve, reject) => {
      try {
        localStorage.setItem(name, item);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  },

  getItem: (name: string) => {
    const item = localStorage.getItem(name);
    if (item) {
      try {
        const theme = JSON.parse(item);
        return theme === "dark" ? ThemeEnum.DARK : ThemeEnum.LIGHT;
      } catch (e) {
        return ThemeEnum.DARK;
      }
    }
    return ThemeEnum.DARK;
  },

  getCities: (name: string) => {
    const items = localStorage.getItem(name);
    if (items) {
      return JSON.parse(items);
    }
    return [{ value: "", label: "" }];
  },
};
