import * as S from './styles'
import Footer from "components/Footer"
import {NextSeo} from "next-seo"
import { LanguageType } from 'locales/types'

export type LayoutProps = {
  children?: React.ReactNode | HTMLCollection | string
  lang: LanguageType
}

const Layout = ({children, lang}: LayoutProps) => (
  <S.Wrapper>

  
      <NextSeo
        title={lang.title}
        description={lang.description}
        canonical="https://covidtaubate.vercel.app/"
        openGraph={{
          url: 'https://covidtaubate.vercel.app/',
          title: `Covid Taubaté - ${lang.title}`,
          description:
           lang.description,
          images: [{ url: 'https://covidtaubate.vercel.app/img/cover.png' }],
          site_name: 'Covid Taubaté',
          locale: lang.locale
        }}
      />


    {children}
    <Footer />
  </S.Wrapper>
)

export default Layout
