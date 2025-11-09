import {
  Tab as HeadlessTab,
  TabGroup as HeadlessTabGroup,
  TabList as HeadlessTabList,
  TabPanel as HeadlessTabPanel,
} from '@headlessui/react'
import React from 'react'

export interface TabProps {
  defaultIndex?: number
  children: React.ReactNode
  onChange?: (index: number) => void
}

export function TabGroup({ defaultIndex = 0, children, onChange }: TabProps) {
  return (
    <HeadlessTabGroup
      defaultIndex={defaultIndex}
      onChange={(index) => {
        if (onChange) onChange(index)
      }}
    >
      {children}
    </HeadlessTabGroup>
  )
}

export function TabList({ children }: { children: React.ReactNode }) {
  return (
    <HeadlessTabList className="group bg-secondary-200 flex w-fit flex-row rounded p-1 transition-all duration-300 ease-in-out">
      {children}
    </HeadlessTabList>
  )
}

export function Tab({ children }: { children: React.ReactNode }) {
  return (
    <HeadlessTab className="data-selected:text-primary cursor-pointer rounded px-3 py-2.5 text-lg leading-none font-semibold text-nowrap text-slate-600 transition-all duration-300 ease-in-out not-first:not-last:mx-2 not-first:not-last:group-hover:mx-1 not-first:not-last:group-hover:px-4 first:mr-2 last:ml-2 hover:text-slate-700 data-selected:bg-white first:group-hover:data-selected:mr-1 first:group-hover:data-selected:pr-4 last:group-hover:data-selected:ml-1 last:group-hover:data-selected:pl-4">
      {children}
    </HeadlessTab>
  )
}

export function TabPanel({ children, className }: { children: React.ReactNode; className?: string }) {
  return <HeadlessTabPanel className={className}>{children}</HeadlessTabPanel>
}
