import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <Story />
    </div>
  </ThemeProvider>
);
