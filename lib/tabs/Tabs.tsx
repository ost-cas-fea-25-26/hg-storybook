import { Tab, TabGroup, TabList, TabPanel } from '@headlessui/react';
import React from 'react';

export interface TabsProps {
  defaultIndex?: number;
  children: React.ReactNode;
}

export function TabsGroup({ defaultIndex = 0, children }: TabsProps) {
  return <TabGroup defaultIndex={defaultIndex}>{children}</TabGroup>;
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <TabList className="flex flex-row p-1 group transition-all duration-300 ease-in-out rounded-sm w-fit bg-secondary-200">{children}</TabList>;
}

export function Tabs({
  children
}: { children: React.ReactNode }) {
  return (
    <Tab className="
      font-semibold rounded-sm leading-none text-lg 
      px-3 py-2.5
      text-nowrap text-secondary 
      data-selected:bg-white data-selected:text-primary
      group-hover:text-secondary-700 
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
    "> 
      {children}
    </Tab>
  );
}

export function TabsContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <TabPanel className={className}>{children}</TabPanel>;
}
