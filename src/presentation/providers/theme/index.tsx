import dynamic from 'next/dynamic';
import React from 'react';

const EasyProvider = dynamic(() =>
  import('@ccom-easy-design-system/theme.theme-provider').then(
    (module) => module.EasyThemeProvider,
  ),
);

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  return <EasyProvider>{children}</EasyProvider>;
};

export default ThemeProvider;
