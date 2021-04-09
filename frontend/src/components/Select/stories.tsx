import { Story, Meta } from '@storybook/react/types-6-0'
import Select, { SelectProps } from '.'

import { FiSearch } from 'react-icons/fi'

export default {
  title: 'Select',
  component: Select,
  args: {
    name: 'Buscar',
    icon: <FiSearch size={45} />,
    initialValue: '',
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' },
  },
} as Meta

export const Default: Story<SelectProps> = (args) => (
  <div style={{ maxWidth: 900, padding: 15 }}>
    <Select {...args} />
  </div>
)

Default.args = {
  placeholder: 'Procure o Pokemon, tipo, movimento, habilidade ...',
}

export const WithLabel: Story<SelectProps> = (args) => (
  <div style={{ maxWidth: 900, padding: 15 }}>
    <Select {...args} />
  </div>
)

WithLabel.args = {
  label: 'Alguma Label Qualquer',
}
