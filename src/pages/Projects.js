import '../App.css';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer';
import WorkAccordion from '../components/WorkAccordion';

function Projects() {
  const accordionData = 
    [

        {
            id: 1,
            title: 'React Portfolio page',
            image: '',
            content: `A simple portfolio page made in React.js to demonstrate my projects, work experiences, and academic achievements.`
        },
        {
          id: 2,
          title: 'Laravel Portfolio page',
          image: '',
          content: `A remake of my react portfolio page made in Laravel 9 to demonstrate my projects, work experiences, and academic achievements`
        },
        {
          id: 3,
          title: 'Gaze Self-Checkout',
          image: '',
          content: `This is a Master's Dissertation project made by Paskal Stepien in 2022.
          The aim of this project is to make a self-checkout using React.js, which is operated with gaze captured by the Tobii Eye Tracker 5. 
          It's a simple React.js project, so simply download the repository, run npm install and npm start to get the self-checkout application. 
          This application was designed to work with an eye tracker and Windows eye control, but apart from that it's just a simple self-checkout web application.`
        },
        {
            id: 4,
            title: 'Contactless Self-Checkout',
            image: '',
            content: `This is a Bachelor's Dissertation project made by Paskal Stepien in 2021.
            The aim of this project is to make a contact-less self-cgeckout prototype application, to prove the possibility of operating a self-checkout through the use of motion gestures.
            This application uses an Xbox Kinect v2.0 as a mouse cursor to operate a self-checkout application. For which the self-checkotu applicatiopn was written in C# and through the use of WinForms.
            This application also combines the use of a Xbox Kinect v2.0 mouse control package for the ability to use the sensor as a desktop mouse.`
        },
        {
          id: 5,
          title: 'Managest',
          image: '',
          content: `A mobile application for managing teams, projects, and tasks within a project. This application allows for clear tracking of task status, addition of members and more.
          The application was developed in Kotlin.`
        },
        {
          id: 6,
          title: 'Hungry Monkey',
          image: '',
          content: `A web application for managing food take-away restaurants, clients, and drivers. This web application has multiple management areas, such as managing restaurants and menu items, as well as drivers. 
          This application also manages users, user profiles, and change of details. Further additional features include the display of the food orders being delivered. The application was 
          made in React, and focuses on responsiveness between mobile and desktop devices. The Key library that made this possible was MUI.`
        },
        {
          id: 7,
          title: 'CornLAN website',
          image: '',
          content: `A newly developed website for the Cornish LAN party. This website was made to replace the previously existing WordPress website.
          This website was written in React.js`
        },
        {
          id: 7,
          title: 'JP Automotive website',
          image: '',
          content: `A website application for JP Automotive. This website was made to primarily display information for the business, such as contact information, services, and operational hours.
          This website was written in React.js`
        },
    ]

  return (
    <>
      <NavigationBar/>
        <div className='container mx-auto'>

          <div className='grid grid-cols-1 mt-4 lg:ml-20 lg:mr-20 mb-[50px]'>
            <p className='text-center text-[40px] border-b mb-10'>Projects</p>

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

export default Projects;