import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Feather, Smile, Calendar, AlignCenter } from 'react-feather'

import {NavbarElement, NavbarList, NavbarLogo} from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
          <NavbarLogo>
            <h3>
              <Link to="/">
                <Smile className="align-middle"/> <span className="align-middle"> {siteTitle} </span>
              </Link>
            </h3>
          </NavbarLogo> 
          <div className="main-navigation">
            <NavbarList>
              <li><Link to="/" className="lined-link" activeClassName="active"> <User /> <span> About </span> </Link></li> 
              <li><Link to="/repositories" className="lined-link" activeClassName="active"> <Smile /> <span> Something </span> </Link></li>  
              <li><Link to="/works" className="lined-link" activeClassName="active"> <Calendar /> <span> Appointments </span> </Link></li>  
              <li><Link to="/blog" className="lined-link" activeClassName="active"> <Feather /> <span> Blog </span> </Link></li>
            </NavbarList>
          </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
