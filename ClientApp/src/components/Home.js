import { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='container-body'>
          <Image
            className="carousel-image-size"
            src="https://wallpaperaccess.com/full/695805.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className='container-body'>
          <Image
            className="carousel-image-size"
            src="https://i.pinimg.com/originals/c6/48/87/c6488775ca560ffeaa079f998360e3b7.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className='container-body'>
          <Image
            className="carousel-image-size"
            src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/466545-Pink_Floyd-album_covers.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  return(<ControlledCarousel />);
}
