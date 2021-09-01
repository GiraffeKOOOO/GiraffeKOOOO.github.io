// import react
import React from 'react';
// import necessary components
import Carousel from 'react-bootstrap/Carousel'
// import styling
import '../css/ProjectCarousel.css';
// import media

function ProjectCarousel() {
    return (
        <div id="carousel-wrapper">
            <p id="carousel-title">Recent Projects</p>
            <Carousel variant="dark">
                <Carousel.Item>
                    <div id="white-rectangle"/>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div id="white-rectangle"/>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div id="white-rectangle"/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
}

export default ProjectCarousel;