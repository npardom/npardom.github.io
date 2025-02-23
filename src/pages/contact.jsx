import React from 'react'
import '../styles/transparentCard.css'

import { useContext , useState} from 'react'
import MyContext from '../context'
import { useNavigate } from 'react-router-dom'

function Contact() {

  const {language} = useContext(MyContext)
  const navigate = useNavigate();
  const [cardHidden, setCardHidden] = useState(false);


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
        <h1>{language === 'es' ? 'Contacto' : 'Contact'}</h1>
        <p><b>Email: </b>
          <a href="mailto:npardom@unal.edu.co" target="_blank">npardom@unal.edu.co</a>
        </p>
        <p><b>LinkedIn: </b>
          <a href="https://www.linkedin.com/in/npardom/" target="_blank">npardom</a>
        </p>
        <p><b>GitHub: </b>
          <a href="https://github.com/npardom" target="_blank">npardom</a>
        </p>
        <p><b>Instagram: </b> 
          <a href="https://www.instagram.com/npardom" target="_blank">@npardom</a>
        </p>
      </div>
    </div>
  )
}

export default Contact