import * as S from './styles'
import StatsBar from 'components/StatsBar'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Checkbox from 'components/CheckBox'

export type PokemonStatsProps = {
  atk: number
  def: number
  sta: number
  totalStats: number
  weather: string
  weather2?: string | ''
  evolutionStage: number
  evolved: boolean
  generation: number
  familyID: number
  crossGen: boolean
  legendary: boolean
  aquireable: number
  spawns: boolean
  regional: boolean
  raidable: boolean
  hatchable: number
  shiny: boolean
  nest: boolean
  notGettable: boolean
  futureEvolve: boolean
  cp40: number
  cp39: number
  new: boolean
}

const PokemonStats = ({
  atk,
  def,
  sta,
  totalStats,
  weather,
  weather2,
  evolutionStage,
  evolved,
  generation,
  aquireable,
  crossGen,
  cp39,
  cp40,
  familyID,
  futureEvolve,
  hatchable,
  legendary,
  nest,
  notGettable,
  raidable,
  regional,
  shiny,
  spawns,
}: PokemonStatsProps) => {
  return (
    <S.Wrapper>
      <Tabs>
        <TabList>
          <Tab>
            <h1>Stats</h1>
          </Tab>
          <Tab>
            <h1>More Info</h1>
          </Tab>
        </TabList>

        <TabPanel>
          <S.WeatherWrapper>
            <S.WeatherColumn>
              <span>Weather:</span>
              {weather}
            </S.WeatherColumn>
            <S.WeatherColumn>
              <span>Weather2:</span>
              {weather2}
            </S.WeatherColumn>
          </S.WeatherWrapper>

          <S.WrapperStatsBar>
            <span>ATK</span>
            <StatsBar bgColor={'red'} completed={atk} totalStats={totalStats} />
            <span>DEF</span>
            <StatsBar
              bgColor={'blue'}
              completed={def}
              totalStats={totalStats}
            />
            <span>STA</span>
            <StatsBar
              bgColor={'green'}
              completed={sta}
              totalStats={totalStats}
            />
          </S.WrapperStatsBar>
          <S.AditionalInfo>
            <S.AditionalInfoColumn>
              <span>FamilyID</span>
              {familyID}
            </S.AditionalInfoColumn>
            <S.AditionalInfoColumn>
              <span>Hatchable</span>
              {hatchable}
            </S.AditionalInfoColumn>
            <S.AditionalInfoColumn>
              <span>EvolutionStage</span>
              {evolutionStage}
            </S.AditionalInfoColumn>
            <S.AditionalInfoColumn>
              <span>Generation</span>
              {generation}
            </S.AditionalInfoColumn>
            <S.AditionalInfoColumn>
              <span>Aquireable</span>
              {aquireable}
            </S.AditionalInfoColumn>
          </S.AditionalInfo>
        </TabPanel>
        <TabPanel>
          <S.CPWrapper>
            <S.CPColumn>
              <span>100% CP @ 40</span>
              {cp40}
            </S.CPColumn>
            <S.CPColumn>
              <span>100% CP @ 39</span>
              {cp39}
            </S.CPColumn>
          </S.CPWrapper>
          <S.CheckboxWrapper>
            <Checkbox label="Evolved" labelColor="black" isChecked={evolved} />
            <Checkbox
              label="Cross Gen"
              labelColor="black"
              isChecked={crossGen}
            />
            <Checkbox
              label="Legendary"
              labelColor="black"
              isChecked={legendary}
            />
            <Checkbox label="Spaws" labelColor="black" isChecked={spawns} />
            <Checkbox
              label="Regional"
              labelColor="black"
              isChecked={regional}
            />
            <Checkbox
              label="Raidable"
              labelColor="black"
              isChecked={raidable}
            />
            <Checkbox label="Shiny" labelColor="black" isChecked={shiny} />
            <Checkbox label="Nest" labelColor="black" isChecked={nest} />
            <Checkbox
              label="Not-Gettable"
              labelColor="black"
              isChecked={notGettable}
            />
            <Checkbox
              label="Future Evolve"
              labelColor="black"
              isChecked={futureEvolve}
            />
          </S.CheckboxWrapper>
        </TabPanel>
      </Tabs>
    </S.Wrapper>
  )
}

export default PokemonStats
