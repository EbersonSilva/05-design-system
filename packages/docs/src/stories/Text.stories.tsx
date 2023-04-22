import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rem quaerat culpa blanditiis doloribus veritatis, est inventore magni labore, voluptas nobis, pariatur porro expedita. Quam perferendis in dicta repellendus vitae.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicin',
    as: 'strong',
  },
}
