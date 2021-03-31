import * as S from './styles'

type StatsColors = 'red' | 'green' | 'blue'

export type StatsBarProps = {
  bgColor: StatsColors
  completed: number
  totalStats: number
}

const StatsBar = ({
  bgColor,
  completed = 1,
  totalStats = 1,
}: StatsBarProps) => {
  return (
    <S.WrapperBar>
      <S.WrapperSpanBar
        bgColor={bgColor}
        completed={completed}
        totalStats={totalStats}
      >
        <S.Progress>{completed}</S.Progress>
      </S.WrapperSpanBar>
    </S.WrapperBar>
  )
}

export default StatsBar
