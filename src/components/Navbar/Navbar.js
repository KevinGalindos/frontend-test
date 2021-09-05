import { useEffect, useState } from 'react'
import { Link } from '@reach/router'

import WacoServices from '../../assets/logo-h.png'

import './Navbar.scss'

export const Navbar = () => {
  const [button, setButton] = useState(true)
  const [navbar, setNavbar] = useState(false)

  const showButton = () => setButton(window.innerWidth <= 900 ? false : true)

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  const changeBackground = () => {
    if (window.scrollY >= 120) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="navbar_content">
          <div className="navbar_content_logo">
            <Link to="/">
              <img src={WacoServices} alt="Waco services" />
            </Link>
          </div>

          <div className="navbar_content_links">
            <ul className="list-items">
              <li className="item-link">
                <a href="#home" rel="noreferrer">
                  INICIO
                </a>
              </li>
              <li className="item-link">
                <a href="#benefits" rel="noreferrer">
                  BENEFICIOS
                </a>
              </li>
              <li className="item-link">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
