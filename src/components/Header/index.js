// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="image"
      />
      <h1 className="name">Wave</h1>
    </div>
    <ul className="links-container">
      <Link to="/">
        <li className="heading">Home</li>
      </Link>
      <Link to="/about">
        <li className="heading">About</li>
      </Link>
      <Link to="/contact">
        <li className="heading">Contact</li>
      </Link>
    </ul>
  </div>
)

export default Header
