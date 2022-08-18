import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select as SelectComponent } from './Select'
import { Option } from './Option'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Select',
  component: SelectComponent
} as ComponentMeta<typeof SelectComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectComponent> = (args) => (
  <SelectComponent {...args} />
)

export const Select = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Select.args = {
  defaultValue: { label: 'One', value: 'one' },
  placeholder: 'Choose an option',
  children: [
    <Option data={{ label: 'One', value: 'one' }} />,
    <Option data={{ label: 'Two', value: 'two' }} />,
    <Option data={{ label: 'Three', value: 'three' }} />
  ]
}
