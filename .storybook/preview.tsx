import '../lib/styles/index.css'
import type { Decorator, StoryContext } from '@storybook/react'
import React from 'react'

const frameDecorator: Decorator = (Story: React.FC, context: StoryContext) => {
  const storyName = context.name
  const autoDescription = `This preview shows the “${storyName}” variant of the component.`
  document.body.style.margin = '0'
  document.body.style.padding = '0'

  return (
    <div className="flex h-auto min-h-[100dvh] w-full justify-center bg-gray-100 p-10">
      <div className="w-full max-w-3xl rounded-2xl border border-gray-200 bg-white p-8">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">{storyName}</h2>
        <p className="mb-6 text-sm text-gray-500">{autoDescription}</p>
        <Story />
      </div>
    </div>
  )
}

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
}

export default preview
