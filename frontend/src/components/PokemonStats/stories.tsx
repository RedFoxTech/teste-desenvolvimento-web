import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonStats, { PokemonStatsProps } from '.'

export default {
  title: 'PokemonStats',
  component: PokemonStats,
} as Meta

export const Default: Story<PokemonStatsProps> = (args) => (
  <PokemonStats {...args} />
)

Default.args = {
  atk: 10,
  def: 30,
  sta: 25,
  totalStats: 65,
  evolutionStage: 1,
  generation: 1,
  weather2: 'Frio',
  weather: 'Quente',

  familyID: 21,
  hatchable: 4,

  evolved: true,
  crossGen: false,
  legendary: true,
  aquireable: 3,
  spawns: false,
  regional: true,
  raidable: false,
  shiny: false,
  nest: true,
  notGettable: false,
  futureEvolve: true,
  cp39: 1345,
  cp40: 596,
}
