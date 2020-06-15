import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import VideoGallery from '../components/VideoGallery'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Dr. ROHIT PANDEY"
          meta={[
            {
              name: 'description',
              content:
                'MS (ORTHO), DNB (ORTHO), MNAMS, MBBS, MacNep Arthroplasty Fellow, AOA Accredited, Sydney Australia Shoulder Fellow Derby UK',
            },
            {
              name: 'keywords',
              content:
                'MS (ORTHO), DNB (ORTHO), MNAMS, MBBS MacNep Arthroplasty Fellow, AOA Accredited, Sydney Australia Shoulder Fellow Derby UK',
            },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Knee Arthroscopy</h3>
                <p>
                  Arthroscopy is a surgical procedure in which an arthroscope is
                  inserted into the knee joint. It is a device with is used to see inside of joint. It
                  includes a camera that is connected to a screen.
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3> Anterior Hip Replacement</h3>
                <p>
                  Anterior hip replacement is an approach through which no muscle are cut and it helps in faster recovery 
                  and patient have less pain. Also it is more anatomical way of doing  Hip Replacement. Dr Rohit Pandey
                  has worked with Prof James Sullivan in Sydney and learnt this advance way of replacement.
                  
                  
                
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Knee Replacement</h3>
                <p>
                  Knee joint replacement helps patients in the treatment for
                  severely diseased knee joints. A joint replacement procedure
                  is designed to relieve pain, reduce symptoms, restore
                  mobility, and regain function.
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>ACL Reconstruction</h3>
                <p>
                  The procedure for anterior cruciate ligament reconstruction
                  replaces a patient’s torn anterior cruciate ligament (ACL)
                  tendon with a new tendon to restore knee stability.
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Hip Resurfacing</h3>
                <p>
                  Hip Resurfacing also referred to as Hip Cap Replacement or
                  Bone Conserving Surgery is a procedure that only:
                </p>
                  <ul>
                    <li>Replaces the hip socket and</li>
                    <li>
                      Resurfaces (reshapes) the damaged areas at the top of the
                      thigh bone (femoral head).
                    </li>
                  </ul>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Sport Injuries</h3>
                <p>
                  As we are gaining popularity in sports and developing as sports ethusiast nation. 
                  Dr Rohit Pandey specializes in sports medicine and provides that world class care to atheletes.
                  He specializes in sports related injuries around shoulder, ankle and other joints.
                 
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
          </section>
          <VideoGallery />
          <section id="tow">
            <div className="inner">
              <header className="major">
                <h2>About Me</h2>
              </header>
              <p>
                Dr Rohit Pandey has done his MBBS from GMC, Miraj in Maharashtra through AIPMT, 
                following which he was selected through AIPG having rank AIR-179,
                and took Orthopedics in UCMS & GTB Hospital Delhi.
                He did his Senior residency for 3 years in UCMS and is inclined towards teaching & research.
                He went to Derby in United Kingdom for his Shoulder fellowship.
                Then he got selected for MacNep Arthroplasty fellowship in Sydney, Australia and worked there
                for 1 year with top  4 Arthroplasty Surgeons. 
                His mentor and guide Prof Rami Sorial with whom he learnt different techniques of Arthroplasty specially
                doing PSI CR TKR. He also worked with Dr Simon Coffey, Prof James Sullivan & Prof Craig Waller.
                He learnt Kinematic alignment, Anterior approach to hip, Robotic knee and hip replacement techniques.
              </p>
              <h4>International Affiliations & Experience </h4>
              <ul>
                <li>
                  Clinical Associate lecture Macquarie University, Sydney
                  Australia
                </li>
                <li>UK Derby Shoulder Fellowship</li>
                <li>
                  Worked with top four Arthroplasty and Arthroscopy Surgeons of
                  Sydney for 1 year
                </li>
                <li>
                  Acquainted with all new Robotics TKR such as Mako, Rosa and
                  Omnibot
                </li>
                <li>
                  First Indian to present on Kinematic Alignment in APAS 2019 in
                  Xiamen, China
                </li>
                <li>Trained in Anterior Approach to hip joint</li>
                <li>Trained in Uncemented CR TKR using PSI</li>
                <li>Trained in Oxford and Zuk UKA</li>
                <li>
                  Did all types of Arthroscopic procedures in knee and ankle
                </li>
              </ul>
              <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
