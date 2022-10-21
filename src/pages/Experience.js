import '../App.css';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer';
import WorkAccordion from '../components/WorkAccordion';
import CanaryImage from '../media/canary.jpg';
import DentalPracticeImage from '../media/dental-practice.png';
import CoolEarthImage from '../media/cool-earth.jpg';
import WestlanImage from '../media/westlan.jpg';

function Experience() {
    const accordionData = 
    [

        {
            id: 1,
            title: 'Canary Care: Junior Full Stack Web Developer',
            image: CanaryImage,
            content: `During my 3rd year of University, I worked for Canary Care Global Ltd. as a Junior Full Stack Web Developer. I had several 
            responsibilities most of which were technical, and some of which were customer based. My technical responsibilities included 
            developing new features to the company web application, as well as developing new features for the internal systems and 
            testing newly developed features. Teaching and explaining how new features operated to other less technical colleagues, to 
            allow for better understanding and technical support to clients. Finally, providing customer support with any issues that 
            customers faced, or answering any queries or requests they may have had regarding purchasing products.`
        },
        {
          id: 2,
          title: 'Cool Earth: IT Support Technician',
          image: CoolEarthImage,
          content: `In my short summer part time job at Cool Earth as an IT Support Technician, I was presented with several responsibilities which 
          varied in difficulty and complexity. Most were simpler tasks such as provide help and provide support to the staff with IT 
          related issues. However, there were also more complex tasks which varied in importance also, such as assembling a backup 
          server and scheduling regular backups of virtual machines on a dedicated server cluster. Furthermore, whilst working at Cool 
          Earth I have also acquired knowledge in the aspect of web programming, web development with agile methodologies, and 
          practice in virtualisation with VMWares ESXi and vSphere.`
        },
        {
          id: 3,
          title: 'WestLAN: Staff Member',
          image: WestlanImage,
          content: `As a member of staff at WestLAN I am often tested on my organizational and time management skills, as well as practice my 
          technical abilities. This is done by organising events and tournaments, making sure they are running on time and helping in 
          setting up the events. One major aspect that I enjoy the most at WestLAN is being presente d with a problem whether it is a 
          hardware or a software issue, as this allows me to practice my problem-solving skills. Additionally, being a part of a team of 
          experienced IT professionals, the biggest benefit is the ability to learn many ways of solving problems.`
        },
        {
            id: 4,
            title: 'St.Blazey Dental Practice: Receptionist & IT Technician',
            image: DentalPracticeImage,
            content: `As a receptionist in a busy dental practice, I was the first point of contact and interaction for current and prospective patients 
            and to answer their queries efficiently and effectively. In addition, I had also taken responsibility over the regular maintenance of 
            the computers in the entire dental surgery as well as any potential troubleshooting whether it was hardware or software based. 
            Furthermore, I was later given the opportunity to fix the dedicated server in the practice as well as replacing the old Network 
            hardware which allowed the practice to have a faster connection between clients and server, as well as replacing dead hard 
            drives and recovering raid arrays which prevented very important data loss. In more recent work, I have been tasked with the 
            replacement of all computer stations and increasing the security measures. This was achieved with the use of magnetic stripe 
            cards and card readers on the workstations. Furthermore, with the current situation of the global pandemic, I have proven 
            flexibility to provide proficient technical support to the employees of the dental practice despite working remotely.`
        },
    ]

  return (
    <>
      <NavigationBar/>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 mt-4 lg:ml-20 lg:mr-20 mb-[50px]'>
            <p className='text-center text-[40px] border-b mb-10'>Work Experience</p>
            <div className="accordion">
              {accordionData.map(({ id, title, image, content }) => (
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