import * as S from './styles'
import Card from "components/Card"
import { LanguageType } from 'locales/types'

import { BrazilIOResponseApi } from 'types'
import { formatDate } from 'utils'

export type HeroProps = {
  children?: React.ReactNode | HTMLCollection | string,
  lang: LanguageType,
  data: BrazilIOResponseApi
}

const Hero = ({lang, data}: HeroProps) => {

  
  return (
      <S.Wrapper>
      
      <S.Title>Números do Corona Vírus em Taubaté</S.Title>
      <S.Description>Situação atual do corona vírus em Taubaté. 
        .</S.Description>

      {
        data && (<> 
        <S.Dashboard>
            <Card>
              <p className="title">Casos Confirmados</p>
              <p className="value">{data.confirmed}</p>
            </Card>
            <Card>
              <p className="title">Mortes</p>
              <p className="value">{data.deaths}</p>
            </Card>
            <Card>
              <p className="title">Taxa de Letalidade</p>
              <p className="value">{data.death_rate*100} %</p>
            </Card>
           
       
        </S.Dashboard>
        <p className="date">Ultima Atualização: {formatDate(data.date)}</p>
        </>)
        
      }
     
      
    
      </S.Wrapper>
    )
      }

export default Hero
