import React from "react"

import Layout from "components/Layout"
import Hero from 'components/Hero'
import { GetStaticProps } from 'next'
import { LanguageType } from "locales/types"
import axios from 'axios';
import { BrazilIOResponseApi } from "types"

export type HomeProps = {
  lang: LanguageType,
  data: BrazilIOResponseApi
}

const Home = ( {lang, data}: HomeProps ) => {
  
  return (
    <Layout lang={lang}>
      
      <Hero lang={lang} data={data} />
     
    </Layout>
  )
 
}

export const getStaticProps: GetStaticProps = async () => {
  /** get language data */
  const lang = require(`../locales/pt.json`)

  /** get covid data */
  const response  = await axios.get(process.env.API_URL as string)
  const data: BrazilIOResponseApi = response.data.results[0]

  
  return  { props: { lang, data } }
  
}

export default Home
 
