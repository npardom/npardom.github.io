import React from 'react'
import '../styles/transparentCard.css'

import { useContext , useState} from 'react'
import MyContext from '../context'
import { useNavigate } from 'react-router-dom'

import CV_eng from '../assets/PardoNicolas_CV.pdf'
import cvMiniature from '../assets/images/cvMiniature.png'

function About() {

  const {language} = useContext(MyContext)
  const navigate = useNavigate();
  const [cardHidden] = useState(false);


  const handleClick = (e) => {
    if (!e.target.classList.contains('containerBackground')) {
      return;
    }
    navigate('/');
  };

  return (

    <div 
      className={"containerBackground " + (cardHidden ? 'hidden': '')}
      onClick={handleClick}
    >
      <div className='transparentCard vertical' onClick={handleClick}>
        <h1>{language === 'es' ? 'Sobre mí' : 'About me'}</h1>
        <p>
          {language === 'es' ? 
            'Descarga mi hoja de vida aquí: ' : 'Download my CV here: '}
          </p>

          <div className='CVContainer'>
            <a href={CV_eng} target="_blank" className='CVindividual'>
              <img src={cvMiniature} className='CV'/>
            </a>

        </div>

      </div>
    </div>
  )
}

export default About