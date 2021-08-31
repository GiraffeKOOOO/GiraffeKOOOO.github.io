// import react
import React from 'react';
// import necessary components
import { Col, Container, Row } from 'react-bootstrap';
import './HeaderButton';
// import styling
import '../../css/Header/Header.css';
// import media
import tempLogo from '../../media/logo192.png';
import HeaderButton from './HeaderButton';

function Header() {
    return (
      <Container id="header-container" fluid>
        <Row>
          <Col id="col-left">
            <Row>
              <Col id="col-left-logo">
                <img
                  id="logo"
                  alt="header logo"
                  src={tempLogo}
                />
              </Col>
              <Col id="col-left-title">
                <p>Paskal Stepien</p>
              </Col>
            </Row>
          </Col>
          <Col id="col-right">
            <HeaderButton
              name="Home"
              location=""
            />
            <HeaderButton
              name="Projects"
              location="projects"
            />
            <HeaderButton
              name="Academia"
              location="academia"
            />
          </Col>
        </Row>
      </Container>
    );
}

export default Header;