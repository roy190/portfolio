import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Landing - Forty by HTML5 UP</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Academic Achievements</h2>
          </header>
          <p>
            •	All Indian Rank 1700 in AIPMT in first attempt
            •	Distinction in Pathology, microbiology and FMT
            •	All India PG rank 170
            •	Australian Orthopedic Association accredited MacNep fellow
            •	Reviewer in Indian Journal of Orthopedics
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Publications</h3>
              </header>
              <p>
                •	Pandey R, Soni N, Bhayana H, Malhotra R, Pankaj A, Arora S: Hand function outcome in closed small bone fractures treated by open reduction & internal fixation by mini plate or closed crossed pinning- a randomized controlled trail: Musculoskeletal Surgery Journal
                • Pandey, Rohit et al. Langerhans cell histiocytosis of the scapula - diagnosis & treatment options. Coluna/Columna, Sept 2017, vol.16, no.3, p.240-243.
                •	Bhayana H, Mishra P, Tandon A, Pankaj A, Pandey R, Malhotra R Ultrasound guided versus landmark guided corticosteroid injection in patients with rotator cuff syndrome: Randomised controlled trial: Article in press: Journal of clinical orthopaedics and trauma
                •	Rajnish R, Haq R, Aggarwal A, Verma N, Pandey R, Bhayana H: Displaced, Comminuted Intracapsular Fracture Neck Femur in Young Adults; Outcome following four screws fixation: In Indian Journal Of Orthopedics
                •	Exposed versus buried Kirschner wires used for fixation of displaced paediatric fractures of lateral condyle of humerus in Indian Journal of orthopedics
                •	Pandey R, Bhayana H, Gupta A, Dhammi IK, Jain AK: Hypoglossal nerve palsy as a rare complication of C1-C2 Pott's spine: in indian journal of orthopaedics
                •	Bhayana H, Pandey R, Dhammi IK, Baumann F, Bhatia U. Comparative study for assessment of functional outcome of intraarticular AO Type C distal humerus fractures treated by parallel plating. Indian J Orthop 2019; 53:190-5.

              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Presentations in International and National conferences</h3>
              </header>
              <p>
                    Presentations
  
                  • Invited as Faculty in NZOA- 2020, AIIMS, Rishikesh
                  • Masterclass in Revision Hip Arthroplasty on OrthoTv with world renowened faculty
                  •	Presented paper in IOACON-2014 titled “Assessment Of Hand Function In Closed Small Bone Fractures Treated By Open Reduction & Internal Fixation By Mini Fragment Plate Or Closed Pinning-A Rct”
                  •	Presented paper in DOACON -2014
                  •	Presented paper in ISKSAA global summit 2017
                  •	Presented paper at APAS 2019 on topic – Kinematic alignment in TKR

                Poster
                  • Presented poster titled “Langerhans Cell Histiocytosis of Scapula- Diagnosis & Treatment Options” in DOACON-2016 
                  • Awarded best poster in section of EFORT Lisbon 2018 conference titled “Impact Of The Australian National Joint Replacement Registry On Implant Selection For Total Hip Arthroplasty In A Solo Practice”

              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Continous Teaching and Learning</h3>
              </header>
              <p>
                •	CME – First Meerut live hip arthroplasty symposium on 23rd dec-2013
                •	Midyear symposium on Pediatric Orthopedics in AIIMS, Rishikesh on 28 sept 2014
                •	Participated in 59th IOACON 2014
                •	Participated in DOACON 2014
                •	KT Dholakia CME on 19 nov 2014
                •	5th Musculoskeletal imaging CME on 7th august 2016
                •	MIDCON 2016 of Delhi orthopedic Association
                •	AO basic trauma course 2016
                •	Fully sponsored by Delhi Government 3rd world trauma congress 2016
                •	Rheumatology update-2017
                •	ISKSAA Global summit 2016
                •	ISKSAA global summit 2017
                •	ISKSAA global summit 2018
                •	Sole Indian invited to Zimmer Biomet Primary Hip & Knee Masterclass 2019 – ANZ held in Melbourne
                •	Only and youngest Indian in User Dinner Persona, Sydney Australia
                •	APAS 2019 Xiamen, China
                •	NZOA -2020

              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing
