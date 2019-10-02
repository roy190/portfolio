import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = props => {
  const togleWithPreventDefault = event => {
    event.preventDefault()
    if (typeof props.onToggleMenu === 'function') {
      props.onToggleMenu()
    }
  }
  return (
    <header id="header" className="alt">
      <Link to="/" className="logo">
        Dr. ROHIT PANDEY
      </Link>
      <nav>
        <a className="menu-link" onClick={togleWithPreventDefault} href="">
          Menu
        </a>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
