import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Calendar,
  Cross,
  Eye,
  Fullscreen,
  Heart,
  HeartEmpty,
  IconProps,
  Location,
  Logout,
  Mumble,
  Pen,
  Profile,
  Repost,
  Send,
  Settings,
  Share,
  SpeechBubble,
  SpeechBubbleEmpty,
  Tick,
  Time,
  Upload,
} from '@/icon'
import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

const IconList = function (props: IconProps) {
  return (
    <div className={'flex max-w-sm gap-2 flex-wrap'}>
      <ArrowDown {...props} />
      <ArrowLeft {...props} />
      <ArrowRight {...props} />
      <ArrowUp {...props} />
      <Calendar {...props}></Calendar>
      <Cross {...props} />
      <Eye {...props} />
      <Fullscreen {...props} />
      <Heart {...props} />
      <HeartEmpty {...props} />
      <Location {...props} />
      <Logout {...props} />
      <Mumble {...props} />
      <Pen {...props} />
      <Profile {...props} />
      <Repost {...props} />
      <Send {...props} />
      <Settings {...props} />
      <Share {...props} />
      <SpeechBubble {...props} />
      <SpeechBubbleEmpty {...props} />
      <Tick {...props} />
      <Time {...props} />
      <Upload {...props} />
    </div>
  )
}

const meta = {
  component: IconList,
} satisfies Meta<typeof IconList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'var(--color-primary)',
    size: 'l',
  },
}
export const Default: Story = {
  args: {},
}
