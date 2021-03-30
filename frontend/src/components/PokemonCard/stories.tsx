import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonCard, { PokemonCardProps } from '.'

export default {
  title: 'PokemonCard',
  component: PokemonCard,
} as Meta

export const Default: Story<PokemonCardProps> = (args) => (
  <PokemonCard {...args} />
)

Default.args = {
  id: 123,
  name: 'Picachu',

  pokemonType: 'eletric',
  image:
    'https://www.pinclipart.com/picdir/big/355-3552131_pikachu-sticker-transparent-background-pikachu-emoji-clipart.png',
}
