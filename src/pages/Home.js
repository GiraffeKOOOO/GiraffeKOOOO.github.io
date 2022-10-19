import '../App.css';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer';
import ProfilePicture from '../media/face.jpeg';
import ProjectCarousel from '../components/ProjectCarousel';
import NavigationButton from '../components/NavigationButton';

function Home() {
  return (
    <>
      <NavigationBar/>
      <div className='container mx-auto'>

      {/** name & picture */}
      <div className='grid grid-cols-3 gap-1 mt-3 md:ml-5 md:mr-5 lg:ml-20 lg:mr-20'>
        <div className='ml-auto'>
          <img
            alt='profile'
            src={ProfilePicture}
            className='w-60 rounded-full border-solid border border-white'
          />
        </div>
        <div className='col-span-2 text-center mt-auto mb-auto mr-auto md:ml-5 lg:ml-12'>
          <h1 className='Abel text-3xl md:text-5xl border-b'>Paskal Stepien</h1>
          <p className='text-base md:text-2xl'>Junior Software Developer</p>
          <p className='text-base md:text-xl'>First Class BSc (Hons) in Software Engineering</p>
        </div>
      </div>

      {/** recent projects */}
      <div className='grid grid-cols-1 mt-4 lg:ml-20 lg:mr-20 mb-[50px]'>
        <h2 className='Abel text-center md:text-4xl'>Recent Projects</h2>
        <ProjectCarousel/>
      </div>

      {/** navigation buttons */}
      <div className='grid grid-cols-1 mt-4 md:grid-cols-2 lg:ml-20 lg:mr-20 mb-[50px] gap-4'>
        <NavigationButton name={'Projects'}/>
        <NavigationButton name={'Work Experience'}/>
        <NavigationButton name={'Academia'}/>
        <NavigationButton name={'CV'}/>
        <NavigationButton name={'Contact Me'}/>
        <NavigationButton name={'About Me'}/>
      </div>

      </div>
      <Footer/>
    </>
  )
}

export default Home;