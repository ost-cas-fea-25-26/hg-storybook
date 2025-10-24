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
  Location,
  IconProps,
} from '@/icon/index.tsx';
import React from 'react';

export default function IconList(props: IconProps) {
  return (
    <div className={'flex max-w-sm gap-2 flex-wrap'}>
      <ArrowDown {...props} />
      <ArrowLeft {...props} />
      <ArrowRight {...props} />
      <ArrowUp {...props} />
      <Calendar {...props} />
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
  );
}
