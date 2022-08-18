import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tabs as TabsComponent } from './Tabs'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Tabs',
  component: TabsComponent
} as ComponentMeta<typeof TabsComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TabsComponent> = (args) => (
  <TabsComponent {...args} />
)

export const Tabs = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tabs.args = {
  tabs: [
    {
      label: 'Tab 1',
      content: 'Content tab 1'
    },
    {
      label: 'Tab 2',
      content: 'Content tab 2'
    },
    {
      label: 'Tab 3',
      content: 'Content tab 3'
    }
  ],
  defaultTab: 0,
  className: '',
}
