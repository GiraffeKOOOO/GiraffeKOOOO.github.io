import '../App.css';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Envelope, Linkedin } from 'react-bootstrap-icons';
import LinkedinLogo from '../media/linkedin.png'; 
import ProfilePicture from '../media/face.jpeg';

function Contact() {
  return (
    <>    
      <NavigationBar/>
      <div className='container mt-3 h-fit md:h-full'>
        <p className='text-center text-[40px] border-b'>Contact information</p>
        <p className='text-center text-[20px] text-gray-400 mb-0'>Please find below is my email information</p>
        <p className='text-center text-[20px] text-gray-400'>or alternatively, feel free to contact me on Linked In</p>

        <div className='flex grid grid-cols-1 gap-2 md:grid-cols-2 md:mt-10'>
          <Card style={{ width: '18rem' }} className='mx-auto mb-3'>
            <Card.Header>
              <span className='inline-flex'>
                <div><Envelope size={30} color='black'/></div>
                <div><Card.Title className='text-black ml-1 mt-1'>Email</Card.Title></div>
              </span>
            </Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                <a href='mailto:pstepien+portfoliopage@hotmail.co.uk?subject=Portfolio page enquiry' className='text-[19px]'>pstepien@hotmail.co.uk</a>
                </Card.Subtitle>
              <Card.Text className='text-black'>
                For business or other enquiries, please contact me via email.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className='mx-auto mb-10'>
            <Card.Header>
                <img
                  alt='linkedin'
                  src={LinkedinLogo}
                  className='w-20'
                />
            </Card.Header>
            <Card.Body>
                <img
                  alt='profile'
                  src={ProfilePicture}
                  className='w-20 rounded-full border-solid border border-white'
                />
              <Card.Text className='text-black'>
                <p className='text-[20px] font-semi-bold mb-[2px]'>Paskal Stepien</p>
                <p className='mb-[2px]'>First class graduate with Honours in Software Engineering</p>
                <p className='text-[13px] mb-[7px]'>University of Southampton</p>
                <a 
                  href='https://www.linkedin.com/in/paskal-stepien-432161174/'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <Button variant="outline-primary" style={{borderRadius: '20px'}}>View profile</Button>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Contact;