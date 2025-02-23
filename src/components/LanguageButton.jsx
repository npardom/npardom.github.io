import React from 'react'
import '../styles/signature.css'

import { useContext } from 'react'
import MyContext from '../context'

import spa from '../assets/icons/spa.png'
import eng from '../assets/icons/eng.png'

function LanguageButton() {
  const {language, changeLanguage} = useContext(MyContext)

  return (
    <img 
      src={language === 'es' ? spa : eng} 
      onClick={()=> changeLanguage(language === 'es' ? 'en' : 'es')}
      className="languageButton"
      title="English/Español"
      />
  )
}

export default LanguageButton