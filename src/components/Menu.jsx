import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/menu.css'

// Context
import MyContext from '../context'

// Icons
import burger from '../assets/icons/burger.png'

function Menu() {
  const [menuHidden, setMenuHidden] = useState(true)
  const {language} = useContext(MyContext)
  
  return (
    <>
      <div className="titleContainer">
        <img 
          src={burger} 
          className={"burgerButton "+(menuHidden ? 'turned' : '')} 
          onClick={()=> setMenuHidden(!menuHidden)}
          title={menuHidden ? 'Mostrar menú' : 'Ocultar menú'}
        />
        <div className="title">
          <h1>Nicolas Pardo Machett's</h1>
          {language === 'es' ? <p>Ing. de Sistemas y Computación</p>:<p>Systems and Computing Engineer</p>}
        </div>
      </div>

      <div className={"menu " +(menuHidden ? 'hidden' : '')}>
        <Link to= "/" className="menuItem" onClick={()=> setMenuHidden(true)}>{language === 'es' ? 'Inicio' : 'Home'}</Link>
        <Link to= "/about" className="menuItem" onClick={()=> setMenuHidden(true)}>{language === 'es' ? 'Acerca de' : 'About'}</Link>
        <Link to= "/contact" className="menuItem" onClick={()=> setMenuHidden(true)}>{language === 'es' ? 'Contacto' : 'Contact'}</Link>
      </div>
    </>
  )
}

export default Menu