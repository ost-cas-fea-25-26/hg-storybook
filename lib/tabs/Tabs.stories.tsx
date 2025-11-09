import { Tab, TabGroup, TabList, TabPanel } from './Tabs';
import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect } from 'storybook/test';

const meta = {
  component: TabGroup,
} satisfies Meta<typeof TabGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

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
          <div className="p-4">Mumbles-Content</div>
        </TabPanel>
        <TabPanel>
          <div className="p-4">Likes-Content</div>
        </TabPanel>
      </>
    ),
  },
  parameters: {
    controls: {
      exclude: ['children', 'onChange'],
    },
  },
  play: async ({ canvas, userEvent }) => {
    const mumblesTab = canvas.getByRole('tab', { name: 'Deine Mumbles' });
    const likeTab = canvas.getByRole('tab', { name: 'Deine Likes' });

    await expect(await canvas.findByText('Mumbles-Content')).toBeVisible();
    await userEvent.click(likeTab);
    await expect(await canvas.findByText('Likes-Content')).toBeVisible();

    await userEvent.click(mumblesTab);
    await expect(await canvas.findByText('Mumbles-Content')).toBeVisible();
    await userEvent.keyboard('{ArrowRight}');
    await expect(await canvas.findByText('Likes-Content')).toBeVisible();
  },
};

export const WithOnChangeEvent: Story = {
  args: {
    defaultIndex: 0,
    onChange: (index: number) => {
      alert(`Tab changed to index: ${index}`);
    },
    children: (
      <>
        <TabList>
          <Tab>Deine Mumbles</Tab>
          <Tab>Deine Likes</Tab>
          <Tab>Deine Follower</Tab>
        </TabList>

        <TabPanel>
          <div className="p-4">Mumbles-Content</div>
        </TabPanel>
        <TabPanel>
          <div className="p-4">Likes-Content</div>
        </TabPanel>
        <TabPanel>
          <div className="p-4">Follower-Content</div>
        </TabPanel>
      </>
    ),
  },

  play: async ({ canvas, userEvent }) => {
    const originalAlert = window.alert;
    let alertMessage = null;

    window.alert = (msg) => {
      alertMessage = msg;
    };

    await expect(await canvas.findByText('Mumbles-Content')).toBeVisible();
    const likeTab = canvas.getByRole('tab', { name: 'Deine Likes' });
    await userEvent.click(likeTab);
    await expect(await canvas.findByText('Likes-Content')).toBeVisible();
    await expect(alertMessage).toBe('Tab changed to index: 1');
    window.alert = originalAlert;
  },
};
