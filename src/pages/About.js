import '../App.css';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer';
import AirsoftPic from '../media/airsoft.jpg';
import WestlanPic from '../media/westlan.jpg';


function About() {
  return (
    <>
      <NavigationBar/>
        <div className='container mx-auto'>

          <div className='grid grid-cols-1 mt-4 lg:ml-20 lg:mr-20 mb-[50px]'>
            <p className='text-center text-[40px] border-b mb-10'>About me</p>

            <div className='flex text-center'>
              <img className='w-[200px] h-[200px] flex-none rounded-xl' src='https://avatars.githubusercontent.com/u/33908517?v=4' alt='about-page-face'/>
              <p className='flex-1 my-auto'>Hello, my name is Paskal Stepien and I'm a recently graduated student, going on to start work in the Software Engineering industry. 
              <br/> I was born in Poland and I have lived most of my life in England. I have spent most of my life so far in education, completing a BTEC qualification, and more recently two degrees a Bachelors and a Masters degree.
              <br/> I chose to work in the Software industry, as I am very passionate when it comes to all things related to IT. I love building computers, playing video games, and creating software to solve really silly and insignifcant problems that I come across.
              </p>
            </div>

            <div className='flex text-center my-[20px]'>
              <p className='flex-1 my-auto'>In my spare time, there's a couple of things I like to do. I'm a huge fan of american football and I'm a San Francisco 49ers fan, go 49ers!
              That being said I also follow other teams such as the Kansas City Chiefs mostly because Patrick Mahomes and his throwing arm is wild. 
              As for myself, I've recently started playing american football with the Wembley Stallions, go Stallions! 
              </p>
              <img className='w-[200px] h-[200px] flex-none rounded-xl' src='https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTg2MTY1MTM3MDU5NjIwNTQ3/george-kittle.png' alt='about-page-face'/>
            </div>

            <div className='flex text-center my-[20px]'>
              <p className='flex-1 my-auto'> Apart from american football, I also like to play Airsoft.
              <br/>
                <blockquote className="italic text-gray-900 dark:text-white bg-slate-700 mx-[10px] my-0">
                  <svg aria-hidden="true" className="w-[20px] h-[20px] text-gray-500 dark:text-gray-400 mx-0" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                  <p className='mb-0'>"Airsoft is a team game in which participants eliminate opposing players by tagging them out of play with spherical plastic projectiles shot with mock air weapons called airsoft guns." - Wikipedia definition</p>
                </blockquote>
                <br/> It's a sport I picked up to try and get a bit more in to shape and to get out the flat a bit more, as it involves a lot of walking around in the forest. But I ended up thoroughly enjoying it, and getting more in to the sport.
              </p>
              <img className='w-[280px] h-[190px] flex-none rounded-xl' src={AirsoftPic} alt='airsoft'/>
            </div>

            <div className='flex text-center'>
              <img className='w-[280px] h-[190px] flex-none rounded-xl' src={WestlanPic} alt='about-page-face'/>
              <p className='flex-1 my-auto'>Sports aside, I also spend my time playing video games and attending LAN parties. My most commonly attended LAN party is WestLAN as I am a staff member at this event. 
              WestLAN is a LAN party located in the quiet village of Budleigh Salterton, where the events run from Friday to Sunday, providing a weekend of gaming.
              In my spare time I also enjoy working on developing simple web applications, bots or other software solutions that help me in managing my tasks during the events.
              </p>
            </div>

          </div>

        </div>
      <Footer/>
    </>
  )
}

export default About;