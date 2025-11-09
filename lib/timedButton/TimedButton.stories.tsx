import TimedButton from './TimedButton'
import { Cross, Repost, Tick } from '@/icon'
import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { expect, userEvent, waitFor, within } from 'storybook/test'

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
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = await canvas.findByRole('button', { name: 'Button Label' })
    await expect(button).toBeVisible()
    await userEvent.click(button)
    await expect(await canvas.findByText('Button Copied!')).toBeVisible()
    await expect(canvas.queryByText('Button Label')).not.toBeInTheDocument()

    await waitFor(
      async () => {
        await expect(await canvas.findByText('Button Label')).toBeVisible()
        await expect(canvas.queryByText('Button Copied!')).not.toBeInTheDocument()
      },
      { timeout: (args.animationDuration || 1500) + 100 }
    )
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
        {'Pending...'}
      </>
    ),
    children: (
      <>
        <Repost size={'xs'} />
        {'Async Button'}
      </>
    ),
  },
  play: async ({ canvas }) => {
    const button = await canvas.findByRole('button', { name: 'Async Button' })
    await expect(button).toBeVisible()
    await userEvent.click(button)
    await expect(await canvas.findByText('Pending...')).toBeVisible()
    await expect(canvas.queryByText('Async Button')).not.toBeInTheDocument()
    await waitFor(
      async () => {
        await expect(await canvas.findByText('Async Button')).toBeVisible()
        await expect(canvas.queryByText('Pending...')).not.toBeInTheDocument()
      },
      { timeout: 1500 + 100 }
    )
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
      <span className={'flex items-center gap-2 text-red-400'}>
        <Cross color={'text-red-400'} size={'xs'} />
        <span>Button Error</span>
      </span>
    ),
    childrenOnClick: (
      <>
        <Tick size={'xs'} />
        {'Submitting...'}
      </>
    ),
    children: (
      <>
        <Repost size={'xs'} />
        {'Submit Button'}
      </>
    ),
  },
  play: async ({ canvas, args }) => {
    const button = await canvas.findByRole('button', { name: 'Submit Button' })
    await expect(button).toBeVisible()
    await userEvent.click(button)
    await expect(await canvas.findByText('Submitting...')).toBeVisible()
    await waitFor(
      async () => {
        await expect(await canvas.findByText('Button Error')).toBeVisible()
        await expect(canvas.queryByText('Submitting...')).not.toBeInTheDocument()
      },
      { timeout: 1500 + 100 }
    )
    await waitFor(
      async () => {
        await expect(await canvas.findByText('Submit Button')).toBeVisible()
        await expect(canvas.queryByText('Button Error')).not.toBeInTheDocument()
      },
      { timeout: (args.animationDuration || 1500) + 100 }
    )
  },
}

export const Disabled: Story = {
  args: {
    animationDuration: 1500,
    disabled: true,
    onClick: () => {
      console.log('THIS SHOULD NOT BE CALLED')
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
        {'Disabled Button'}
      </>
    ),
  },
  play: async ({ canvas }) => {
    const button = await canvas.findByRole('button', {
      name: 'Disabled Button',
    })
    await expect(button).toBeVisible()
    await userEvent.click(button)
    await new Promise((r) => setTimeout(r, 500))
    await expect(await canvas.findByText('Disabled Button')).toBeVisible()
    await expect(canvas.queryByText('Button Copied!')).not.toBeInTheDocument()
    await expect(button).toHaveClass('cursor-not-allowed')
  },
}
