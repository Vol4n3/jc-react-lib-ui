import * as React from 'react';
import { FC, useState } from 'react';
import { defaultTheme, StyleguideThemeList, themesList } from './sg-config';

const StyleguideHeader: FC = () => {
  const [getSel, setSel] = useState<StyleguideThemeList>(defaultTheme);
  const selectChange = (ev: React.ChangeEvent) => {
    const target = ev.target as HTMLSelectElement;
    const find = themesList.find(f => f.label === target.value);
    if (!find) {
      return;
    }
    onSelect(find);
  };
  const onSelect = (item: StyleguideThemeList) => {
    if (typeof window.ListenerThemeChange === 'undefined') {
      return;
    }
    window.SelectedTheme = item.value;
    setSel(item);
    window.ListenerThemeChange.forEach(cb => {
      cb(item.value);
    });
  };
  return (
    <div style={{fontFamily: 'sans-serif'}}>
      <h3>JC components</h3>
      <hr />
      <select value={getSel.label} onBlur={() => {}} onChange={selectChange}>
        {themesList.map(item => (
          <option key={item.label} value={item.label}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StyleguideHeader;
