import * as S from './styles'

type StatsColors = 'red' | 'green' | 'blue' | 'navy'

export type StatsBarProps = {
  bgColor: StatsColors
  completed: number
  statTotal: number
}

const StatsBar = ({ bgColor, completed = 1, statTotal = 1 }: StatsBarProps) => {
  return (
    <S.WrapperBar>
      <S.WrapperSpanBar
        bgColor={bgColor}
        completed={completed}
        statTotal={statTotal}
      >
        <S.Progress>{completed}</S.Progress>
      </S.WrapperSpanBar>
    </S.WrapperBar>
  )
}

export default StatsBar
