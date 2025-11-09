import '../lib/styles/index.css';
import type { Decorator, StoryContext } from '@storybook/react';
import React from 'react';

const frameDecorator: Decorator = (Story: React.FC, context: StoryContext) => {
  const storyName = context.name;
  const autoDescription = `This preview shows the “${storyName}” variant of the component.`;
  document.body.style.margin = '0';
  document.body.style.padding = '0';

  return (
    <div className="w-full flex justify-center p-10 bg-gray-100 min-h-[100dvh] h-auto">
      <div className="w-full max-w-3xl bg-white rounded-2xl p-8 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{storyName}</h2>
        <p className="text-sm text-gray-500 mb-6">{autoDescription}</p>
        <Story />
      </div>
    </div>
  );
};

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'error',
    },
  },

  decorators: [frameDecorator],
};

export default preview;
