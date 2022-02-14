import {ThemeType} from '../index';
import {JcTheme} from '../themes/jc.theme';

export type StyleguideThemeList = { value: {}; label: string };
export const themesList: StyleguideThemeList[] = [
  {value : JcTheme, label: "defaultTheme"}
];
export const defaultTheme = themesList[0];
declare global {
  interface Window {
    ListenerThemeChange: ((theme: ThemeType | undefined) => void)[];
    SelectedTheme: ThemeType | undefined;
  }
}
