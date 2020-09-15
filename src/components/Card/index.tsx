import * as S from './styles'

export type CardProps = {
  children?: React.ReactNode | HTMLCollection | string
}

const Card = ({ children}: CardProps) => (
  <S.Wrapper>
    {children}
  </S.Wrapper>
)

export default Card
