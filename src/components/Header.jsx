import { Link } from 'react-router-dom'
import ButtonIcon from './ButtonIcon'
const Header = () => { //usually the main layout is also homepage, to login and stuff i guess
    return (
      <>
        <header>
          <div className="company-info">
              <img className="logo" src="https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"></img>
            <div className="company-text">
              <h2 className="company-name">Company Name</h2>
              <h3 className="company-slogan">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eaque?</h3>
            </div>
          </div>
          <nav>
            <Link to="/vender"><ButtonIcon icon="./src/assets/icons/cart.svg"></ButtonIcon></Link>
            <Link to="/comprobantes"><ButtonIcon icon="./src/assets/icons/list.svg"> </ButtonIcon></Link>
            <Link to="/productos"><ButtonIcon icon="./src/assets/icons/cube.svg"></ButtonIcon></Link>
            <Link to="/dashboard"><ButtonIcon icon="./src/assets/icons/graph.svg"></ButtonIcon></Link>
            <Link to="/configuracion"><ButtonIcon icon="./src/assets/icons/config.svg"></ButtonIcon></Link>
            <Link to="/"><ButtonIcon icon="./src/assets/icons/logout.svg"></ButtonIcon></Link>
          </nav>
        </header>
      </>
    )
}

export default Header