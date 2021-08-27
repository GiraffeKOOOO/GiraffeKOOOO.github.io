// import react
import React from 'react';
// import necessary components
import { Col, Container, Row } from 'react-bootstrap';
// import styling
import '../../css/Header/Header.css';
// import media
import tempLogo from '../../media/logo192.png';

function Header() {
    return (
      <Container id="header-container" fluid>
        <Row>
          <Col id="col-left">
            <img
              id="logo"
              alt="header logo"
              src={tempLogo}
            />
            <p>Paskal Stepien</p>
          </Col>
          <Col id="col-right">
            2
          </Col>
        </Row>
      </Container>
    );
}

export default Header;