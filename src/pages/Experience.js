import '../App.css';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer';
import WorkAccordion from '../components/WorkAccordion';
import ExperienceAccordionData from '../components/ExperienceAccordionData';

function Experience() {
  return (
    <>
      <NavigationBar/>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 mt-4 lg:ml-20 lg:mr-20 mb-[50px]'>
            <p className='text-center text-[40px] border-b mb-10'>Work Experience</p>
            <div className="accordion">
              {ExperienceAccordionData.map(({ id, title, image, content }) => (
                <WorkAccordion 
                  title={title} 
                  image={image} 
                  content={content} 
                  key={id}
                />
              ))}
            </div>
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default Experience;