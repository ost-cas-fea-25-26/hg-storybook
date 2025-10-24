import ArrowDownSvg from './icons/arrow_down.svg?react';
import ArrowLeftSvg from './icons/arrow_left.svg?react';
import ArrowRightSvg from './icons/arrow_right.svg?react';
import ArrowUpSvg from './icons/arrow_up.svg?react';
import CalendarSvg from './icons/calendar.svg?react';
import CrossSvg from './icons/cross.svg?react';
import EyeSvg from './icons/eye.svg?react';
import FullscreenSvg from './icons/fullscreen.svg?react';
import HeartSvg from './icons/heart.svg?react';
import HeartEmptySvg from './icons/heart_empty.svg?react';
import LocationSvg from './icons/location.svg?react';
import LogoutSvg from './icons/logout.svg?react';
import MumbleSvg from './icons/mumble.svg?react';
import PenSvg from './icons/pen.svg?react';
import ProfileSvg from './icons/profile.svg?react';
import RepostSvg from './icons/repost.svg?react';
import SendSvg from './icons/send.svg?react';
import SettingsSvg from './icons/settings.svg?react';
import ShareSvg from './icons/share.svg?react';
import SpeechBubbleSvg from './icons/speech_bubble.svg?react';
import SpeechBubbleEmptySvg from './icons/speech_bubble_empty.svg?react';
import TickSvg from './icons/tick.svg?react';
import TimeSvg from './icons/time.svg?react';
import UploadSvg from './icons/upload.svg?react';
import React from 'react';

export type IconProps = { size?: 'xs' | 's' | 'm' | 'l' | 'xl'; color?: string };
const getSize = (size: 'xs' | 's' | 'm' | 'l' | 'xl'): number => {
  switch (size) {
    case 'm':
      return 40;
    case 'l':
      return 64;
    case 's':
      return 28;
    case 'xl':
      return 80;
    case 'xs':
      return 16;
  }
};

export function ArrowDown({ size = 'm', color = '#475569' }: IconProps) {
  return <ArrowDownSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function ArrowLeft({ size = 'm', color = '#475569' }: IconProps) {
  return <ArrowLeftSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function ArrowRight({ size = 'm', color = '#475569' }: IconProps) {
  return <ArrowRightSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function ArrowUp({ size = 'm', color = '#475569' }: IconProps) {
  return <ArrowUpSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Calendar({ size = 'm', color = '#475569' }: IconProps) {
  return <CalendarSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Cross({ size = 'm', color = '#475569' }: IconProps) {
  return <CrossSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Eye({ size = 'm', color = '#475569' }: IconProps) {
  return <EyeSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Fullscreen({ size = 'm', color = '#475569' }: IconProps) {
  return <FullscreenSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Heart({ size = 'm', color = '#475569' }: IconProps) {
  return <HeartSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function HeartEmpty({ size = 'm', color = '#475569' }: IconProps) {
  return <HeartEmptySvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Location({ size = 'm', color = '#475569' }: IconProps) {
  return <LocationSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Logout({ size = 'm', color = '#475569' }: IconProps) {
  return <LogoutSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Mumble({ size = 'm', color = '#475569' }: IconProps) {
  return <MumbleSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Pen({ size = 'm', color = '#475569' }: IconProps) {
  return <PenSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Profile({ size = 'm', color = '#475569' }: IconProps) {
  return <ProfileSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Repost({ size = 'm', color = '#475569' }: IconProps) {
  return <RepostSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Send({ size = 'm', color = '#475569' }: IconProps) {
  return <SendSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Settings({ size = 'm', color = '#475569' }: IconProps) {
  return <SettingsSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Share({ size = 'm', color = '#475569' }: IconProps) {
  return <ShareSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function SpeechBubble({ size = 'm', color = '#475569' }: IconProps) {
  return <SpeechBubbleSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function SpeechBubbleEmpty({ size = 'm', color = '#475569' }: IconProps) {
  return <SpeechBubbleEmptySvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Tick({ size = 'm', color = '#475569' }: IconProps) {
  return <TickSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Time({ size = 'm', color = '#475569' }: IconProps) {
  return <TimeSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
export function Upload({ size = 'm', color = '#475569' }: IconProps) {
  return <UploadSvg width={getSize(size)} height={getSize(size)} color={color} />;
}
