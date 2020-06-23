import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Dr Rohit Pandey</h1>
      </header>
      <div className="content">
        <p>
          <span className="content__heading">
            Sports Injury & Joint Specialist
          <br />
            Consultant Orthopedics
          </span>
          <br />
          MS (ORTHO), DNB (ORTHO), MNAMS, MBBS, MacNep Arthroplasty Fellow,
          <br />
          AOA Accredited, Sydney, Australia. 
          Shoulder Fellow, Derby, UK,
          Diploma in Football Medicine (FIFA),
          Associate FACS (USA)
        </p>
        <ul className="actions">
          <li>
            <a href="tel:+918882783373" className="button next scrolly">
              Book Appointment
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
