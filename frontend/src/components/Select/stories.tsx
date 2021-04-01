import { Story, Meta } from '@storybook/react/types-6-0'
import TextInputField, { TextInputFieldProps } from '.'

import { FiSearch } from 'react-icons/fi'

export default {
  title: 'TextInputField',
  component: TextInputField,
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

export const Default: Story<TextInputFieldProps> = (args) => (
  <div style={{ maxWidth: 900, padding: 15 }}>
    <TextInputField {...args} />
  </div>
)

Default.args = {
  placeholder: 'Procure o Pokemon, tipo, movimento, habilidade ...',
}

export const WithLabel: Story<TextInputFieldProps> = (args) => (
  <div style={{ maxWidth: 900, padding: 15 }}>
    <TextInputField {...args} />
  </div>
)

WithLabel.args = {
  label: 'Alguma Label Qualquer',
}
