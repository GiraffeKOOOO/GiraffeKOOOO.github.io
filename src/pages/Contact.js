import '../App.css';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import Card from 'react-bootstrap/Card';

function Contact() {
  return (
    <>
      <NavigationBar/>
      <div className='container mx-auto'>

        <div className='flex grid grid-cols-1 md:grid-cols-2 gap-2'>

        <Card style={{ width: '18rem' }} className='mx-auto'>
          <Card.Body>
            <Card.Title className='text-black'>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text className='text-black'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="badge-base LI-profile-badge ml-auto" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="paskal-stepien-432161174" data-version="v1"/>
              
        </div>
      
      </div>
      <Footer/>
    </>
  )
}

export default Contact;