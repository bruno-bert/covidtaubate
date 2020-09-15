import { Story, Meta } from '@storybook/react/types-6-0'
import Layout from '.'

export default {
  title: 'Layout',
  component: Layout,
  args: {
    lang: {}
  }
} as Meta

export const Default: Story = (args) => <Layout lang={args.lang} {...args}  />
