import { FC, useRef } from 'react';
import PageContainerGrid from 'Components/Shared/PageContainerGrid';
import Navbar from 'Components/Navbar/Navbar';
import About from 'Components/About/About';
import Footer from 'Components/Footer/Footer';
import Skills from 'Components/Skills/Skills';
import Projects from 'Components/Projects/Projects';
import WorkExperience from 'Components/WorkExperience/WorkExperience';

const Home: FC = () => {
  const skillSectionRef = useRef<HTMLDivElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const workExperienceSectionRef = useRef<HTMLDivElement>(null);

  return (
    <PageContainerGrid>
      <Navbar
        skillSectionRef={skillSectionRef}
        projectSectionRef={projectSectionRef}
        workExperienceSectionRef={workExperienceSectionRef}
      />
      <About skillSectionRef={skillSectionRef} />
      <Skills skillSectionRef={skillSectionRef} />
      <Projects projectSectionRef={projectSectionRef} />
      <WorkExperience workExperienceSectionRef={workExperienceSectionRef} />
      <Footer
        skillSectionRef={skillSectionRef}
        projectSectionRef={projectSectionRef}
        workExperienceSectionRef={workExperienceSectionRef}
      />
    </PageContainerGrid>
  );
};

export default Home;
