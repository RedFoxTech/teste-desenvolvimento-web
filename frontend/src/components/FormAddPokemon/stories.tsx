import { Story, Meta } from '@storybook/react/types-6-0'
import FormAddPokemon from '.'

export default {
  title: 'FormAddPokemon',
  component: FormAddPokemon,
} as Meta

export const Default: Story = () => (
  <div style={{ width: 695, margin: 'auto' }}>
    <FormAddPokemon />
  </div>
)
