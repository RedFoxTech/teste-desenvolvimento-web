import { Story, Meta } from '@storybook/react/types-6-0'
import StatsBar, { StatsBarProps } from '.'

export default {
  title: 'StatsBar',
  component: StatsBar,
} as Meta

export const Default: Story<StatsBarProps> = (args) => <StatsBar {...args} />

Default.args = {
  completed: 21,
  bgColor: 'red',
  statTotal: 100,
}
