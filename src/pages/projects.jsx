import  { useEffect, useContext, useState } from 'react'
import '../styles/transparentCard.css'
import '../styles/home.css'

import { useNavigate, useParams } from 'react-router-dom'

import MyContext from '../context';

import bogoparche from '../assets/images/bogoParcheScreenshot.png'
import screencards from '../assets/images/screenCardsScreenshot.png'
import geography from '../assets/images/geographyScreenshot.png'
import avatar from '../assets/images/avatarScreenshot.png'
import piano from '../assets/images/pianoScreenshot.png'

function Projects() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const {language} = useContext(MyContext);
  const [cardHidden, setCardHidden] = useState(false);

  const projectsArray = [
    "bogoparche",
    "screencards",
    "geography",
    "avatar",
    "piano"
  ]

  const projects = {
    "bogoparche": {
      "title": "BogoParche",
      "year": "2023",
      "descriptionEs": "Gestor de planes en la ciudad de Bogotá",
      "descriptionEn": "Event manager in Bogotá city",
      "link": "https://bogo-parche-front-end.vercel.app/"
    },
    "screencards": {
      "title": "ScreenCards",
      "year": "2024",
      "descriptionEs": "Gestor de tus películas y series favoritas",
      "descriptionEn": "Manager for your favorite movies and series",
      "link": "https://screencards.vercel.app/"
    },
    "geography": {
      "title": "Geography Quiz",
      "year": "2023",
      "descriptionEs": "Juego para probar tus conocimientos de división política en diferentes países",
      "descriptionEn": "A game to test your knowledge of political division in different countries",
      "link": "https://npardom.github.io/geographyQuiz/"
    },
    "avatar": {
      "title": "Avatar Creator",
      "year": "2021 - 2023",
      "descriptionEs": "Creador de avatares personalizados",
      "descriptionEn": "Custom avatar creator",
      "link": "https://npardom.github.io/AvatarCreator/"
    },
    "piano": {
      "title": "Tiny Piano",
      "year": "2023",
      "descriptionEs": "Pequeño piano virtual",
      "descriptionEn": "Tiny virtual piano",
      "link": "https://npardom.github.io/tinyPiano/"
    }
  }

  useEffect(()=>{
    if(!projectsArray.includes(slug.toLowerCase())){
      navigate('/My-Website/');
    }
  }, [])

  const handleClick = (e) => {
    if (!e.target.classList.contains('containerBackground')) {
      return;
    }
    navigate('/My-Website/');
  };

  return (
    <>
    {projectsArray.includes(slug.toLowerCase()) ?
    <div 
      className={"containerBackground " + (cardHidden ? 'hidden': '')}
      onClick={handleClick}
    >
      <div className='transparentCard' onClick={handleClick}>
        <div className='screenshotContainer'>

          <a className="projectLink" href={projects[slug.toLowerCase()].link} target="_blank">{language === 'es' ? 'Ver proyecto' : 'View project'}</a>
          
          <img 
            src={slug.toLowerCase() === 'bogoparche' ? bogoparche : 
                slug.toLowerCase() === 'screencards' ? screencards : 
                slug.toLowerCase() === 'geography' ? geography : 
                slug.toLowerCase() === 'avatar' ? avatar : piano
                }
            className='screenshot'
          />
        </div>
      
        <div className='textContainer'>
          <h1>{projects[slug.toLowerCase()].title}</h1>
          <h2>{projects[slug.toLowerCase()].year}</h2>
          <p>{language === 'es' ? projects[slug.toLowerCase()].descriptionEs : projects[slug.toLowerCase()].descriptionEn}</p>
        </div>
      </div>
    </div>: <></>}
    </>
  )
}

export default Projects