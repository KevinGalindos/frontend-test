import LogoWaco from '../../assets/Logo-horizontal.png'


export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={LogoWaco} alt="WacoServices LogoWaco" />
      </div>

      <div className="navbar_links">
        <ul className="navbar_links_list">
          <li className="item-link">INICIO</li>
          <li className="item-link">BENEFICIOS</li>
          <li className="item-link">Login</li>
        </ul>
      </div>
      
    </nav>
  )
}
