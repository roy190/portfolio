import React from 'react'

class VideoGallery extends React.Component {
  constructor(props) {
    super(props);

    this.isBrowser = typeof window === 'undefined' ? false : true;
    this.state = {}
    if (this.isBrowser) {
      const videoDimension = this.computeVideoDimension()
      this.state = videoDimension
    }

    this.urls = ['https://www.youtube.com/embed/XtHWzK-g0_I', 'https://www.youtube.com/embed/sFbih-ODoNs'];
    this.computeVideoDimension = this.computeVideoDimension.bind(this);
    this.updateIframeDimension = this.updateIframeDimension.bind(this);

  }

  componentDidMount() {
    this.updateIframeDimension();
    window.addEventListener('resize', this.updateIframeDimension, true);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateIframeDimension, true);
  }

  updateIframeDimension() {
    this.setState(this.computeVideoDimension());
  }

  computeVideoDimension() {
    if (!this.isBrowser) { return }

    const element = this.videoContainer || document.body;
    const width = element.clientWidth;
    let iframeWidth;

    if (width > 768) {
      iframeWidth = Math.floor(width/2);
    } else {
      iframeWidth = width;
    }

    return {
      width: iframeWidth + 'px',
      height: (iframeWidth/1.777) + 'px'
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
            <div className="video" ref={ref => this.videoContainer = ref}>
              {this.isBrowser && this.urls.map(url => (
                <iframe width={width} height={height} src={url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              ))}
            </div>
        </div>
      </section>
    )
  }
}

export default VideoGallery;
