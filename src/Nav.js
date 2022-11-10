import React,{useState,useEffect} from 'react'
import './Nav.css'

function Nav() {
    const [show,setShow] = useState([])
    useEffect(() => {
      window.addEventListener("scroll",() => {
        if(window.scrollY > 100){
            setShow(true)
        }else setShow(false)
      })
      return () => {
        window.removeEventListener("scroll",() => {})
      }
    }, [])
    

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"/>
    </div>
  )
}

export default Nav