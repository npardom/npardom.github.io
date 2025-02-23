import '../styles/canvas.css'

import { useContext } from 'react'
import MyContext from '../context'
import { useNavigate } from 'react-router-dom'

import empty from '../assets/canvas/empty.png'
import outside from '../assets/canvas/outside.png'
import walls from '../assets/canvas/walls.png'
import screenCards from '../assets/canvas/screenCards.png'
import bogoParche from '../assets/canvas/bogoParche.png'
import desk from '../assets/canvas/desk.png'
import computer from '../assets/canvas/computer.png'
import piano from '../assets/canvas/piano.png'
import globe from '../assets/canvas/globe.png'
import tables from '../assets/canvas/tables.png'
import card from '../assets/canvas/card.png'
import photo from '../assets/canvas/photo.png'
import sofa from '../assets/canvas/sofa.png'

function Canvas() {
  const {language} = useContext(MyContext)
  const navigate = useNavigate();

  return (
    <>
    <img src={empty} className = "layerHover" id = "screenCardsArea" title='ScreenCards' onClick={()=> navigate('/projects/screencards')} />
    <img src={empty} className = "layerHover" id = "bogoParcheArea" title='BogoParche' onClick={()=> navigate('/projects/bogoparche')}/>
    <img src={empty} className = "layerHover" id = "computerArea" title={language === 'es' ? 'Sobre mí' : 'About me'} onClick={()=> navigate('/about')}/>
    <img src={empty} className = "layerHover" id = "pianoArea" title='Tiny Piano' onClick={()=> navigate('/projects/piano')}/>
    <img src={empty} className = "layerHover" id = "globeArea" title='Geography Quiz' onClick={()=> navigate('/projects/geography')}/>
    <img src={empty} className = "layerHover" id = "cardArea" title={language === 'es' ? 'Contacto' : 'Contact'} onClick = {()=> navigate('/contact')}/>    
    <img src={empty} className = "layerHover" id = "photoArea" title='Avatar Creator' onClick={()=> navigate('/projects/avatar')}/>

    <img src={outside} className="layerImage" id="outside" />
    <img src={walls} className="layerImage" id="walls"/>
    <img src={screenCards} className="layerImage" id="screenCards"/>
    <img src={bogoParche} className="layerImage" id="bogoParche"/>
    <img src={desk} className="layerImage" id="desk"/>
    <img src={computer} className="layerImage" id="computer"/>
    <img src={piano} className="layerImage" id="piano"/>
    <img src={globe} className="layerImage" id="globe"/>
    <img src={tables} className="layerImage" id="tables"/>
    <img src={card} className="layerImage"  id="card"/>
    <img src={photo} className="layerImage" id="photo"/>
    <img src={sofa} className="layerImage" id="sofa"/>
    </>
  )
}

export default Canvas