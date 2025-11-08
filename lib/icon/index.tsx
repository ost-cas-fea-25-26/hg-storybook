/** generated file, do not edit manually - run "npm run generate" instead */
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
import { IconSize } from '@/common/types.ts';
import React from 'react';

export type IconProps = { size?: IconSize; color?: string; className?: string };
const sizes: Record<IconSize, number> = { xs: 16, s: 28, m: 40, l: 64, xl: 80 };

export function ArrowDown({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <ArrowDownSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function ArrowLeft({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <ArrowLeftSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function ArrowRight({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <ArrowRightSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function ArrowUp({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <ArrowUpSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Calendar({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <CalendarSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Cross({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <CrossSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Eye({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <EyeSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Fullscreen({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <FullscreenSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Heart({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <HeartSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function HeartEmpty({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <HeartEmptySvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Location({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <LocationSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Logout({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <LogoutSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Mumble({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <MumbleSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Pen({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <PenSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Profile({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <ProfileSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Repost({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <RepostSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Send({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <SendSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Settings({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <SettingsSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Share({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <ShareSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function SpeechBubble({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <SpeechBubbleSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function SpeechBubbleEmpty({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <SpeechBubbleEmptySvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Tick({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <TickSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Time({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <TimeSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
export function Upload({ size = 'm', color = '#475569', ...rest }: IconProps) {
  return <UploadSvg width={sizes[size]} height={sizes[size]} color={color} {...rest} />;
}
