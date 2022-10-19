import '../App.css';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProjectImage from '../media/powder.jpg';


function ProjectCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

  return (
    <>
        <Carousel 
            activeIndex={index} 
            onSelect={handleSelect}
            className='mt-2'
        >
            <Carousel.Item>
                <a href='https://github.com/GiraffeKOOOO/GiraffeKOOOO.github.io' target='_blank' rel='noreferrer noopener'>
                    <img
                        className="w-100 h-[300px] rounded-[15px]"
                        src={ProjectImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>React Portfolio Page</h3>
                        <p>My portfolio page made in react, hosted with GitHub pages.</p>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href='https://github.com/GiraffeKOOOO/portfolio-page-laravel' target='_blank' rel='noreferrer noopener'>
                    <img
                        className="w-100 h-[300px] rounded-[15px]"
                        src={ProjectImage}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Laravel Portfolio Page</h3>
                        <p>My portfolio page re-made in Laravel.</p>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href='https://github.com/GiraffeKOOOO/GazeSelfCheckout' target='_blank' rel='noreferrer noopener'>
                    <img
                        className="w-100 h-[300px] rounded-[15px]"
                        src={ProjectImage}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Gaze Self Checkout</h3>
                        <p>The gaze operated self-checkout. This was my Master's dissertation project, made using React.</p>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
        </Carousel>
    </>
  );
}

export default ProjectCarousel;