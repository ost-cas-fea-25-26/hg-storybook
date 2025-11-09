import {
  Tab as HeadlessTab,
  TabGroup as HeadlessTabGroup,
  TabList as HeadlessTabList,
  TabPanel as HeadlessTabPanel,
} from '@headlessui/react';
import React from 'react';

export interface TabProps {
  defaultIndex?: number;
  children: React.ReactNode;
  onChange?: (index: number) => void;
}

export function TabGroup({ defaultIndex = 0, children, onChange }: TabProps) {
  return (
    <HeadlessTabGroup
      defaultIndex={defaultIndex}
      onChange={(index) => {
        if (onChange) onChange(index);
      }}
    >
      {children}
    </HeadlessTabGroup>
  );
}

export function TabList({ children }: { children: React.ReactNode }) {
  return (
    <HeadlessTabList className="flex flex-row p-1 group transition-all duration-300 ease-in-out rounded w-fit bg-secondary-200">
      {children}
    </HeadlessTabList>
  );
}

export function Tab({ children }: { children: React.ReactNode }) {
  return (
    <HeadlessTab
      className="
      font-semibold rounded leading-none text-lg 
      px-3 py-2.5
      cursor-pointer
      text-nowrap text-slate-600 
      data-selected:bg-white data-selected:text-primary
      hover:text-slate-700 
      first:group-hover:data-selected:pr-4
      first:group-hover:data-selected:mr-1
      first:mr-2
      not-first:not-last:group-hover:px-4
      not-first:not-last:group-hover:mx-1
      not-first:not-last:mx-2
      last:group-hover:data-selected:pl-4
      last:group-hover:data-selected:ml-1
      last:ml-2
      transition-all duration-300 ease-in-out
    "
    >
      {children}
    </HeadlessTab>
  );
}

export function TabPanel({ children, className }: { children: React.ReactNode; className?: string }) {
  return <HeadlessTabPanel className={className}>{children}</HeadlessTabPanel>;
}
