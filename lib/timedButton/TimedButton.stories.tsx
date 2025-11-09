import TimedButton from './TimedButton'
import { Cross, Repost, Tick } from '@/icon'
import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

const meta = {
  component: TimedButton,
} satisfies Meta<typeof TimedButton>

export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
  args: {
    animationDuration: 1500,
    onClick: (_e) => {
      console.log('hello world')
    },
    childrenOnClick: (
      <>
        <Tick size={'xs'} />
        {'Button Copied!'}
      </>
    ),
    children: (
      <>
        <Repost size={'xs'} />
        {'Button Label'}
      </>
    ),
  },
}

export const Async: Story = {
  args: {
    animationDuration: 1500,
    onClick: async (_e) => {
      return await new Promise((resolve) => {
        setTimeout(() => {
          console.log('hello world async')
          resolve()
        }, 1500)
      })
    },
    childrenOnClick: (
      <>
        <Tick size={'xs'} />
        {'Button Copied!'}
      </>
    ),
    children: (
      <>
        <Repost size={'xs'} />
        {'Button Label'}
      </>
    ),
  },
}

export const AsyncWithError: Story = {
  args: {
    animationDuration: 1500,
    onClick: async (_e) => {
      return await new Promise((_, reject) => {
        setTimeout(() => {
          reject()
        }, 1500)
      })
    },
    childrenOnError: (
      <span className={'text-red-400 flex items-center gap-2'}>
        <Cross color={'text-red-400'} size={'xs'} />
        <span>Button Error</span>
      </span>
    ),
    childrenOnClick: (
      <>
        <Tick size={'xs'} />
        {'Button Copied!'}
      </>
    ),
    children: (
      <>
        <Repost size={'xs'} />
        {'Button Label'}
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    animationDuration: 1500,
    disabled: true,
    onClick: () => {},
    childrenOnClick: (
      <>
        <Tick size={'xs'} />
        {'Button Copied!'}
      </>
    ),
    children: (
      <>
        <Repost size={'xs'} />
        {'Button Label'}
      </>
    ),
  },
}
