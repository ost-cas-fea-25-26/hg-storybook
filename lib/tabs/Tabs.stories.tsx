import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Tabs, TabsContent, TabsGroup, TabsList, } from './Tabs';

const meta = {
  component: TabsGroup,
} satisfies Meta<typeof TabsGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    defaultIndex: 0,
    children: (
      <>
        <TabsList>
          <Tabs>Deine Mumbles</Tabs>
          <Tabs>Deine Likes</Tabs>
        </TabsList>

        <TabsContent>
          <div className="p-4">Content for first tab</div>
        </TabsContent>
        <TabsContent>
          <div className="p-4">Content for second tab</div>
        </TabsContent>
      </>
    ),
  },
};