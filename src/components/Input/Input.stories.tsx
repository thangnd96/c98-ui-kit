import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input as InputComponent } from './Input'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  component: InputComponent
} as ComponentMeta<typeof InputComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
)

export const Input = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Input.args = {
  className: '',
  name: '',
  title: 'Input',
  titleClassName: '',
  labelClassName: '',
  leftIconWrapper: '',
  wrapperClassName: '',
  rightIconWrapper: '',
  leftIcon: null,
  rightIcon: null,
  inputSize: 'medium'
}
