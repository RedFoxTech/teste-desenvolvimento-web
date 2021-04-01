import { Story, Meta } from '@storybook/react/types-6-0'
import { Plus } from '@styled-icons/boxicons-regular/Plus'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
} as Meta

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  children: 'Adicionar',
  icon: <Plus />,
}

export const onlyText: Story = (args) => <Button {...args} />

onlyText.args = {
  onlyText: true,
  children: 'remover',
}
