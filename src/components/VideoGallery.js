import React from 'react'

class VideoGallery extends React.Component {
  constructor(props) {
    super(props);

    const videoDimension = this.computeVideoDimension()
    this.state = videoDimension
    this.urls = ['https://www.youtube-nocookie.com/embed/XtHWzK-g0_I']

    this.computeVideoDimension = this.computeVideoDimension.bind(this)
  }

  computeVideoDimension() {
    const width = window.screen.width/2;

    return {
      width: width + 'px',
      height: (width/1.777) + 'px'
    }
  }

  render() {
    const { height, width } = this.state
    return (
      <section className="video-gallery">
        <div className="inner">
          <header className="major">
            <h2>Our Videos</h2>
          </header>
          {this.urls.map(url => (
            <div className="video">
              <iframe width={width} height={height} src={url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default VideoGallery;
