import { Story, Meta } from '@storybook/react/types-6-0'
import Hero from '.'

export default {
  title: 'Hero',
  component: Hero,
  args: {
    lang: {},
    data: {}
  }
} as Meta

export const Default: Story = (args) => <Hero data={args.data} lang={args.lang} {...args} />
