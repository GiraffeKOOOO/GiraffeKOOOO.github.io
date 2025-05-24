import { WorkExperience } from 'Components/Shared/Types';
import redwoodImage from 'Assets/work-experience-redwood.jpeg';
import canaryCareImage from 'Assets/work-experience-canary.jpg';
import coolEarthImage from 'Assets/work-experience-cool-earth.jpg';
import westLanImage from 'Assets/work-experience-westlan.jpg';
import dentalPracticeImage from 'Assets/work-experience-dental-practice.png';

const WorkExperienceList: WorkExperience[] = [
  {
    company: 'Redwood Technologies Ltd.',
    image: redwoodImage,
    imageBottomOffset: {
      sm: 80,
      md: 110,
      lg: 150,
      xl: 260,
    },
    role: 'Software Developer',
    description: `In my most recent employment at Redwood Technologies, I was presented with opportunities to work across a range of
    products, allowing me to learn a wide variety of software development tools and practices. As a software developer I had
    many responsibilities, ranging from developing features for web-based products such as conferencing tools, recording tools,
    and customer web chatting tools. Many of the features being developed were held to high standards, and more importantly
    has taught me to be WCAG compliant. As part of feature development, I have also gained a lot of experience in progressing
    features using project management tools such as Jira, and ascertaining features are developed correctly through feature
    refinement meetings. My duties also included reporting and fixing issues in products using Jira, reviewing other developer’s
    work, and most importantly collaborate with other developers on improving internal processes. Additionally, I had the
    opportunity to work alongside some of our customers with providing testing for client sites software products. This would also
    involve discussing the development with our clients and ensuring that the customers are satisfied and that we had met all of
    our contractual obligations.`,
  },
  {
    company: 'Canary Care',
    image: canaryCareImage,
    imageBottomOffset: {
      sm: 80,
      md: 110,
      lg: 150,
      xl: 260,
    },
    role: 'Junior Full Stack Web Developer',
    description: `During my 3rd year of University, I worked for Canary Care Global Ltd. as a Junior Full Stack Web Developer. I had several responsibilities most of which were technical, and some of which were customer based. My technical responsibilities included developing new features to the company web application, as well as developing new features for the internal systems and testing newly developed features. Teaching and explaining how new features operated to other less technical colleagues, to allow for better understanding and technical support to clients. Finally, providing customer support with any issues that customers faced, or answering any queries or requests they may have had regarding purchasing products.`,
  },
  {
    company: 'Cool Earth',
    image: coolEarthImage,
    imageBottomOffset: {
      sm: 140,
      md: 220,
      lg: 300,
      xl: 350,
    },
    role: 'IT Support Technician',
    description: `In my short summer part time job at Cool Earth as an IT Support Technician, I was presented with several responsibilities which varied in difficulty and complexity. Most were simpler tasks such as provide help and provide support to the staff with IT related issues. However, there were also more complex tasks which varied in importance also, such as assembling a backup server and scheduling regular backups of virtual machines on a dedicated server cluster. Furthermore, whilst working at Cool Earth I have also acquired knowledge in the aspect of web programming, web development with agile methodologies, and practice in virtualisation with VMWares ESXi and vSphere.`,
  },
  {
    company: 'WestLAN',
    image: westLanImage,
    imageBottomOffset: {
      sm: 100,
      md: 110,
      lg: 270,
      xl: 350,
    },
    role: 'Staff Member',
    description: `As a member of staff at WestLAN I am often tested on my organizational and time management skills, as well as practice my technical abilities. This is done by organising events and tournaments, making sure they are running on time and helping in setting up the events. One major aspect that I enjoy the most at WestLAN is being presente d with a problem whether it is a hardware or a software issue, as this allows me to practice my problem-solving skills. Additionally, being a part of a team of experienced IT professionals, the biggest benefit is the ability to learn many ways of solving problems.`,
  },
  {
    company: 'St.Blazey Dental Practice',
    image: dentalPracticeImage,
    imageBottomOffset: {
      sm: 140,
      md: 220,
      lg: 300,
      xl: 350,
    },
    role: 'Receptionist & IT Technician',
    description: `As a member of staff at WestLAN I am often tested on my organizational and time management skills, as well as practice my technical abilities. This is done by organising events and tournaments, making sure they are running on time and helping in setting up the events. One major aspect that I enjoy the most at WestLAN is being presente d with a problem whether it is a hardware or a software issue, as this allows me to practice my problem-solving skills. Additionally, being a part of a team of experienced IT professionals, the biggest benefit is the ability to learn many ways of solving problems.`,
  },
];

export default WorkExperienceList;
