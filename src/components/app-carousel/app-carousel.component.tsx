import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './app-carousel.styles.scss';

interface IAppCarouselProps {
  images: string[];
}

const AppCarousel = ({ images }: IAppCarouselProps): React.ReactElement => {
  return (
    <div className="app-carousel">
      <Carousel>
        {images.map((url) => (
          <img src={url} key={url} alt="astorun clothes" />
        ))}
      </Carousel>
    </div>
  );
};

export default AppCarousel;
