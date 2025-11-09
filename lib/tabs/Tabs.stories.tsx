import { Tab, TabGroup, TabList, TabPanel } from './Tabs'
import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

const meta = {
  component: TabGroup,
} satisfies Meta<typeof TabGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
  args: {
    defaultIndex: 0,
    children: (
      <>
        <TabList>
          <Tab>Deine Mumbles</Tab>
          <Tab>Deine Likes</Tab>
        </TabList>

        <TabPanel>
          <div className="p-4">Mumbles</div>
        </TabPanel>
        <TabPanel>
          <div className="p-4">Likes</div>
        </TabPanel>
      </>
    ),
  },
  parameters: {
    controls: {
      exclude: ['children', 'onChange'],
    },
  },
}

export const WithOnChangeEvent: Story = {
  args: {
    defaultIndex: 0,
    onChange: (index: number) => {
      alert(`Tab changed to index: ${index}`)
    },
    children: (
      <>
        <TabList>
          <Tab>Deine Mumbles</Tab>
          <Tab>Deine Likes</Tab>
          <Tab>Deine Follower</Tab>
        </TabList>

        <TabPanel>
          <div className="p-4">Mumbles</div>
        </TabPanel>
        <TabPanel>
          <div className="p-4">Likes</div>
        </TabPanel>
        <TabPanel>
          <div className="p-4">Follower</div>
        </TabPanel>
      </>
    ),
  },
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
}
