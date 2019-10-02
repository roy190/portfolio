import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => {
  const togleWithPreventDefault = event => {
    event.preventDefault()
    if (typeof props.onToggleMenu === 'function') {
      props.onToggleMenu()
    }
  }
  return (
    <nav id="menu">
      <div className="inner">
        <ul className="links">
          <li>
            <Link onClick={props.onToggleMenu} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={props.onToggleMenu} to="/landing">
              Blogs
            </Link>
          </li>
          <li>
            <Link onClick={props.onToggleMenu} to="/generic">
              Research Paper
            </Link>
          </li>
          {/*<li><Link onClick={props.onToggleMenu} to="/elements">Elements</Link></li>*/}
        </ul>
        <ul className="actions vertical">
          <li>
            <a href="" className="button special fit">
              Book Appointment
            </a>
          </li>
          {/* <li><a href="#" className="button fit">Log In</a></li> */}
        </ul>
      </div>
      <a className="close" onClick={togleWithPreventDefault} href="">
        Close
      </a>
    </nav>
  )
}

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
