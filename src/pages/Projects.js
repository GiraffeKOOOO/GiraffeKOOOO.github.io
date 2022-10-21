import '../App.css';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer';

function Projects() {
  return (
    <>
      <NavigationBar/>
        <div className='container mx-auto'>

          <div className='grid grid-cols-1 mt-4 lg:ml-20 lg:mr-20 mb-[50px]'>
            <p className='text-center text-[40px] border-b mb-10'>Projects</p>

            <div className="accordion">
              
            </div>

          </div>

        </div>
      <Footer/>
    </>
  )
}

export default Projects;