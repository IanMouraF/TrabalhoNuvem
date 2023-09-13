import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Carrossel.css'

class BannerCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSlide: 0,
    };
  }

  handleSlideChange = (index) => {
    this.setState({ selectedSlide: index });
  };

  render() {
    const { selectedSlide } = this.state;
    const banners = [
      '/public/images/banner1.jpg',
      '/public/images/banner2.jpg',
      '/public/images/banner3.jpg',
    ];

    return (
      <div className="banner-carousel">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          selectedItem={selectedSlide}
          onChange={this.handleSlideChange}
          showIndicators={false}
          autoPlay={true}
          interval={6000}
        
        >
          {banners.map((banner, index) => (
            <div href='/' key={index}>
              <a to='/components/Carrinho'>
                <img className='image'  src={banner} alt={`Banner ${index + 1}`} />
              </a>
            </div>
          ))}
        </Carousel>
        <div className="radio-buttons">
          {banners.map((_, index) => (
            <input
              key={index}
              type="radio"
              name="carousel-radio"
              checked={selectedSlide === index}
              onChange={() => this.handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BannerCarousel;

