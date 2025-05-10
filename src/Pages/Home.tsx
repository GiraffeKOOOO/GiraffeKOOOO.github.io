import { FC, useRef } from 'react';
import PageContainerGrid from 'Components/Shared/PageContainerGrid';
import Navbar from 'Components/Navbar/Navbar';
import HomePageContent from 'Components/HomePageContent/HomePageContent';
import Footer from 'Components/Footer/Footer';

const Home: FC = () => {
  const skillSectionRef = useRef<HTMLDivElement>(null);

  return (
    <PageContainerGrid>
      <Navbar skillSectionRef={skillSectionRef} />
      <HomePageContent skillSectionRef={skillSectionRef} />
      <Footer />
    </PageContainerGrid>
  );
};

export default Home;
