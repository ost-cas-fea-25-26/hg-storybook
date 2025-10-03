import '../lib/index.css';
import '../lib/tailwind.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Wrapper } from '@storybook/addon-docs/blocks';
import React from 'react';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: React.FC) => {
      return (
        <Wrapper className={'w-full'}>
          <Theme accentColor={'blue'}>
            <ThemePanel></ThemePanel>
            <Story />
          </Theme>
        </Wrapper>
      );
    },
  ],
};

export default preview;
