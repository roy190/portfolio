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
                'MS (ORTHO), DNB (ORTHO), MNAMS, MBBS MacNep Arthroplasty Fellow, AOA Accredited, Sydney Australia Shoulder Fellow Derby UK',
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
                  inserted into the knee joint. An arthroscope is a device that
                  Professor Waller uses to see inside your knee joint. It
                  includes a camera that is connected a screen.
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Dual Mobility Hip Replacement</h3>
                <p>
                  Dual Mobility Hip Replacement is a high performance hip
                  replacement implant and is an advance on standard hip
                  replacement methods.
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
                <h3>Acute Knee Injury Clinic</h3>
                <p>
                  To cater for the sports enthusiast Professor Waller runs
                  regular Acute Knee Injury Clinics. Knee injuries can be quite
                  painful and debilitating. In my practice we keep specific
                  appointments for urgent knee injuries so patients can be seen
                  urgently.
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
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet pharetra et feugiat tempus.
              </p>
              <h4>International Experience</h4>
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
