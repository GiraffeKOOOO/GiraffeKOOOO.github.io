import { FC, useRef } from 'react';
import PageContainerGrid from 'Components/Shared/PageContainerGrid';
import Navbar from 'Components/Navbar/Navbar';
import About from 'Components/About/About';
import Footer from 'Components/Footer/Footer';
import Skills from 'Components/Skills/Skills';
import Projects from 'Components/Projects/Projects';

const Home: FC = () => {
  const skillSectionRef = useRef<HTMLDivElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);

  return (
    <PageContainerGrid>
      <Navbar skillSectionRef={skillSectionRef} projectSectionRef={projectSectionRef} />
      <About skillSectionRef={skillSectionRef} />
      <Skills skillSectionRef={skillSectionRef} />
      <Projects projectSectionRef={projectSectionRef} />
      <Footer />
    </PageContainerGrid>
  );
};

export default Home;
