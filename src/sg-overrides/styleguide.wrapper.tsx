import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './sg-config';

import { FC, useEffect, useState } from 'react';
import {ThemeType} from '../index';

const StyleguideWrapper: FC = ({ children }) => {
  const [getTheme, setTheme] = useState<{}>(window.SelectedTheme || defaultTheme.value);
  const themeChange = (theme: ThemeType | undefined): void => {
    setTheme(theme || defaultTheme.value);
  };
  useEffect(() => {
    if (typeof window.ListenerThemeChange === 'undefined') {
      window.ListenerThemeChange = [];
    }
    window.ListenerThemeChange.push(themeChange);
    return () => {
      const index = window.ListenerThemeChange.indexOf(themeChange);
      if (index > -1) {
        window.ListenerThemeChange.splice(index, 1);
      }
    };
  }, []);
  return (
    <div style={{ position: 'relative' }}>
      <ThemeProvider theme={getTheme}>{children}</ThemeProvider>
    </div>
  );
};

export default StyleguideWrapper;
