import '../lib/styles/index.css';
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
          <Story />
        </Wrapper>
      );
    },
  ],
};

export default preview;
