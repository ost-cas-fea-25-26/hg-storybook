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

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
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
