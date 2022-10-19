import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo512 from '../media/logo512.png';

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="portfolio-page-logo"
              src={logo512}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Paskal Stepien
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" >Home</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/experience">Experience</Nav.Link>
              <Nav.Link href="/academia">Academia</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1oF8Wgf_10Shti79L1rb5jOjVFJvNj5sT/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;