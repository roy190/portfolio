import React from 'react'

class Contact extends React.Component {

  constructor(props) {
    super(props)

    this.mapContainer = null;
    this.initMap = this.initMap.bind(this)
    this.importGoogleMap = this.importGoogleMap.bind(this)
  }

  componentDidMount() {
    this.importGoogleMap()
      .then(this.initMap)
  }

  initMap() {
    const uluru = {lat: -25.344, lng: 131.036};
    const map = new window.google.maps.Map(
      this.mapContainer, {zoom: 4, center: uluru});
    const marker = new window.google.maps.Marker({position: uluru, map: map});
  }

  importGoogleMap() {
    return new Promise((resolve, reject) => {
      if (window.google) {
        resolve();
        return;
      }

      const scriptTag = document.createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.onload = resolve;
      scriptTag.onerror = reject;
      scriptTag.src = 'https://maps.googleapis.com/maps/api/js?key=&';
      document.body.appendChild(scriptTag);
    });
  }

  render() {
    const { props } = this
    return (
      <section id="contact">
        <div className="inner">
          <section className="map-container" ref={ref => this.mapContainer = ref}></section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon alt fa-envelope"></span>
                <h3>Email</h3>
                <a href="mailto:chakraboneandjointcenter@gmail.com">chakraboneandjointcenter@gmail.com</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-phone"></span>
                <h3>Phone</h3>
                <a href="tel:+918076973819">(+91) 8076973819</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-home"></span>
                <h3>Address</h3>
                <span>
                    B27/92-62A, Ravindrapuri
                  <br />
                  Varanasi, Uttar Pradesh
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>
    )
  }
}

export default Contact
