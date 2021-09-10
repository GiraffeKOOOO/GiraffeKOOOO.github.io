// import react
import React from 'react';
// import necessary components
import Carousel from 'react-bootstrap/Carousel'
import SegmentTitle from './SegmentTitle';
// import styling
import '../css/ProjectCarousel.css';
// import media

function ProjectCarousel() {
    return (
        <div id="carousel-wrapper">
            <SegmentTitle 
                title="Recent Projects"
            />
            <Carousel variant="dark">
                <Carousel.Item onClick={() => console.log("redirect to project page")}>
                    <div id="white-rectangle"/>
                    <Carousel.Caption>
                    <h3>Portfolio website</h3>
                    <p>My personal portfolio website for displaying my previous work and academic grades.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item onClick={() => console.log("redirect to project page")}>
                    <div id="white-rectangle"/>
                    <Carousel.Caption>
                    <h3>JP Automotive website</h3>
                    <p>Website for JP Automotive, a simple website for displaying information.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
}

export default ProjectCarousel;