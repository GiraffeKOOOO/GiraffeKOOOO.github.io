import { FC } from 'react';
import PageContainerGrid from 'Components/Shared/PageContainerGrid';
import Navbar from 'Components/Navbar/Navbar';
import HomePageContent from 'Components/HomePageContent/HomePageContent';
import Footer from 'Components/Footer/Footer';

const Home: FC = () => {
  return (
    <PageContainerGrid>
      <Navbar />
      <HomePageContent />
      <Footer />
    </PageContainerGrid>
  );
};

export default Home;
