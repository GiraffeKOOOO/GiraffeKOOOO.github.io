import { FC, useRef } from 'react';
import PageContainerGrid from 'Components/Shared/PageContainerGrid';
import Navbar from 'Components/Navbar/Navbar';
import About from 'Components/About/About';
import Footer from 'Components/Footer/Footer';
import Skills from 'Components/Skills/Skills';

const Home: FC = () => {
  const skillSectionRef = useRef<HTMLDivElement>(null);

  return (
    <PageContainerGrid>
      <Navbar skillSectionRef={skillSectionRef} />
      <About skillSectionRef={skillSectionRef} />
      <Skills skillSectionRef={skillSectionRef} />
      <Footer />
    </PageContainerGrid>
  );
};

export default Home;
