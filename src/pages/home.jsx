import { useContext, useEffect, useState } from 'react'
import '../styles/home.css'

import MyContext from '../context'

function Home() {
  const [cardHidden, setCardHidden] = useState(localStorage.getItem('visited') || false)
  const {language} = useContext(MyContext)

  useEffect(()=>{
    localStorage.setItem('visited', 'true');
  }, [])

  return (
    <div className={"containerBackground " + (cardHidden ? 'hidden': '')}>
      <div className={"card " + (cardHidden ? 'hidden': '')}>
        {language === 'es' ?
        <p>Bienvenido a <b>mi página</b></p>:
        <p>Welcome to <b>my website</b></p>
        }
      </div>

      <div onClick={()=> setCardHidden(true)} className={"startButton " + (cardHidden ? 'hidden': '')}>
        {language === 'es' ? 'Explorar' : 'Explore'}
      </div>
    </div>
  )
}

export default Home