import '../App.css';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';

function Academia() {
  return (
    <>
      <NavigationBar/>
        <div className='container mx-auto'>

          <div className='grid grid-cols-1 mt-4 lg:ml-20 lg:mr-20 mb-[50px]'>
            <p className='text-center text-[40px] border-b mb-10'>Academia</p>

            <Card className='mb-[20px]'>
            <Card.Body>
              <Card.Title className='text-black'>University of Southampton</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">MSc Software Engineering</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">September 2021 - September 2022</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Grade: Awaiting</Card.Subtitle>
              <Card.Text className='text-black'>
                <p className='mb-0 pl-[8px]'>Course Units</p>
                <ul className='pl-[8px]'>
                  <li>• Software Project Management and Secure Development</li>
                  <li>• Automated Software Verification</li>
                  <li>• Software Modelling Tools and Techniques for Critical Systems</li>
                  <li>• Research Methods and Project Preparation</li>
                  <li>• Open Data Innovation</li>
                  <li>• Mobile Applications Development</li>
                  <li>• Web and Cloud Applications Development</li>
                  <li>• Software Security</li>
                  <li>• Dissertation Project: Gaze Tracking Control Framework</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='my-[20px]'>
            <Card.Body>
              <Card.Title className='text-black'>Bournemouth University</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">BSc (hons) Software Engineering</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">September 2017 - September 2021</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Grade: First class</Card.Subtitle>
              <Card.Text className='text-black'>
                <p className='mb-0'>Course Units</p>

                <p className='mb-0'>4th Year:</p>
                <ul>
                  <li>• Ubiquitous Computing</li>
                  <li>• Software Quality & Testing</li>
                  <li>• Advanced Development</li>
                  <li>• Dissertation Project: Designing Contactless Solutions for self-checkout</li>
                </ul>

                <p className='mb-0'>3rd Year:</p>
                <ul>
                  <li>• Industrial Placement with Canary Care Global Ltd. as a Junior Full Stack Web Developer</li>
                </ul>

                <p className='mb-0'>2nd Year:</p>
                <ul>
                  <li>• Advanced Development</li>
                  <li>• Web Programming</li>
                  <li>• Systems Design</li>
                  <li>• Software & Network Engineering</li>
                  <li>• Infrastructure Strategy</li>
                  <li>• Project Management & Teamwork</li>
                </ul>

                <p className='mb-0'>1st Year:</p>
                <ul>
                  <li>• Principles of Programming</li>
                  <li>• Relational Databases</li>
                  <li>• User-Centred Web Development</li>
                  <li>• Computers and Networks</li>
                  <li>• Systems Analysis and Design</li>
                  <li>• Business & Professional Issues</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='mb-[20px]'>
            <Card.Body>
              <Card.Title className='text-black'>Truro College</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">BTEC Level 3 Extended Diploma in Applied Science</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">September 2014 - September 2017</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Grade: D*D*D*</Card.Subtitle>
            </Card.Body>
          </Card>

          </div>

        </div>
      <Footer/>
    </>
  )
}

export default Academia;