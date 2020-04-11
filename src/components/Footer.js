import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://www.youtube.com/channel/UCeG-wxSvjGIMOMFL6FB4Erw/" className="icon alt fa-youtube">
            <span className="label">You Tube</span>
          </a>
        </li>
        {/*<li>
          <a href="#" className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>*/}
      </ul>
      <ul className="copyright">
        <li>&copy; Dr Rohit Pandey</li>
        <li>
          Design: <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
