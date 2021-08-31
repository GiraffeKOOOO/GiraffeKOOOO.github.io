// import react
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import necessary components
import ProjectCarousel from '../components/ProjectCarousel';
import Intro from '../components/Intro';
// import styling
import '../css/HomePage.css';
// import media


function HomePage() {
    return (
      <Container id="home-page-wrapper" fluid>
        <Row id="row-intro">
          <Col id="col-left" xs={3} md={3} lg={3} xl={3} xxl={3}/>
          <Col id="col-middle" xs={6} md={6} lg={6} xl={6} xxl={6}>
            <Intro/>
          </Col>
          <Col id="col-right" xs={3} md={3} lg={3} xl={3} xxl={3}/>
        </Row>
        <Row id="row-carousel">
          <Col id="col-left" xs={1} md={1} lg={1} xl={1} xxl={1}/>
          <Col id="col-middle" xs={10} md={10} lg={10} xl={10} xxl={10}>
            <ProjectCarousel/>
          </Col>
          <Col id="col-right" xs={1} md={1} lg={1} xl={1} xxl={1}/>
        </Row>
      </Container>
    );
}

export default HomePage;