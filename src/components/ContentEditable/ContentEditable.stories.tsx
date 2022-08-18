import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContentEditable as ContentEditableComponent } from './ContentEditable'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ContentEditable',
  component: ContentEditableComponent
} as ComponentMeta<typeof ContentEditableComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentEditableComponent> = (args) => (
  <ContentEditableComponent {...args} />
)

export const ContentEditable = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ContentEditable.args = {
  html: '',
  placeholder: 'Content editable',
}
