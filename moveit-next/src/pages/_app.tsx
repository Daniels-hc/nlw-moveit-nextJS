import { useState } from 'react'

import '../styles/global.css'

import { ChallengesProvider } from '../Contexts/ChallengesContext'


function MyApp({ Component, pageProps }) {

  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
