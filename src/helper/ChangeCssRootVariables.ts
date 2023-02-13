import { ThemeEnum } from "../redux/themeSlice";

export function changeCssRootVariables(theme: ThemeEnum) {

  const root = document.querySelector(':root') as HTMLElement;

  const components = [
    'body-background',
    'components-background',
    'popup-background',
    'card-background',
    'card-shadow',
    'text-color',
  ];

  components.forEach(component => {
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${theme})`
    );
  });
}
