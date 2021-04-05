import * as S from './styles'
import StatsBar from 'components/StatsBar'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Checkbox from 'components/CheckBox'

export type PokemonStatsProps = {
  atk: number
  def: number
  sta: number
  statTotal: number
  weather: string
  weather2?: string | ''
  evolutionStage: number
  evolved: string
  generation: number
  familyID?: number
  crossGen: string
  legendary: string
  aquireable: number
  spawns: string
  regional: string
  raidable: string
  hatchable: number
  shiny: string
  nest: string
  notGettable: string
  futureEvolve: string
  cp40: number
  cp39: number
  isNew: string
}

const PokemonStats = ({
  atk,
  def,
  sta,
  statTotal,
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
  isNew,
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
            {!!weather2 && (
              <S.WeatherColumn>
                <span>Weather2:</span>
                {weather2}
              </S.WeatherColumn>
            )}
          </S.WeatherWrapper>

          <S.WrapperStatsBar>
            <span>ATK</span>
            <StatsBar bgColor={'red'} completed={atk} statTotal={statTotal} />
            <span>DEF</span>
            <StatsBar bgColor={'blue'} completed={def} statTotal={statTotal} />
            <span>STA</span>
            <StatsBar bgColor={'green'} completed={sta} statTotal={statTotal} />

            <span>STAT TOTAL</span>
            <StatsBar
              bgColor={'navy'}
              completed={statTotal}
              statTotal={statTotal}
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
            <Checkbox
              label="Evolved"
              labelColor="black"
              checked={evolved === '1' ? true : false}
            />
            <Checkbox
              label="Cross Gen"
              labelColor="black"
              checked={crossGen === '1' ? true : false}
            />
            <Checkbox
              label="Legendary"
              labelColor="black"
              checked={legendary === '1' ? true : false}
            />
            <Checkbox
              label="Spaws"
              labelColor="black"
              checked={spawns === '1' ? true : false}
            />
            <Checkbox
              label="Regional"
              labelColor="black"
              checked={regional === '1' ? true : false}
            />
            <Checkbox
              label="Raidable"
              labelColor="black"
              checked={raidable === '1' ? true : false}
            />
            <Checkbox
              label="Shiny"
              labelColor="black"
              checked={shiny === '1' ? true : false}
            />
            <Checkbox
              label="Nest"
              labelColor="black"
              checked={nest === '1' ? true : false}
            />
            <Checkbox
              label="Not-Gettable"
              labelColor="black"
              checked={notGettable === '1' ? true : false}
            />
            <Checkbox
              label="Future Evolve"
              labelColor="black"
              checked={futureEvolve === '1' ? true : false}
            />
            <Checkbox
              label="New"
              labelColor="black"
              checked={isNew === '1' ? true : false}
            />
          </S.CheckboxWrapper>
        </TabPanel>
      </Tabs>
    </S.Wrapper>
  )
}

export default PokemonStats
