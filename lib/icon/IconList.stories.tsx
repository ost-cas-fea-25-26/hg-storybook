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

const IconList = function ({ size = 's', color = '#475569' }: IconProps) {
  return (
    <div className={'flex max-w-sm gap-2 flex-wrap'}>
      <ArrowDown size={size} color={color} />
      <ArrowLeft size={size} color={color} />
      <ArrowRight size={size} color={color} />
      <ArrowUp size={size} color={color} />
      <Calendar size={size} color={color}></Calendar>
      <Cross size={size} color={color} />
      <Eye size={size} color={color} />
      <Fullscreen size={size} color={color} />
      <Heart size={size} color={color} />
      <HeartEmpty size={size} color={color} />
      <Location size={size} color={color} />
      <Logout size={size} color={color} />
      <Mumble size={size} color={color} />
      <Pen size={size} color={color} />
      <Profile size={size} color={color} />
      <Repost size={size} color={color} />
      <Send size={size} color={color} />
      <Settings size={size} color={color} />
      <Share size={size} color={color} />
      <SpeechBubble size={size} color={color} />
      <SpeechBubbleEmpty size={size} color={color} />
      <Tick size={size} color={color} />
      <Time size={size} color={color} />
      <Upload size={size} color={color} />
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
