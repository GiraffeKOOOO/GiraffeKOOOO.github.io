import { FC, RefObject } from 'react';
import NameSection from 'Components/About/NameSection';
import DescriptionSection from 'Components/About/DescriptionSection';
import ContentWrapper from 'Components/Shared/ContentWrapper';

type HomePageContentProps = {
  skillSectionRef: RefObject<HTMLDivElement | null>;
};

const About: FC<HomePageContentProps> = ({ skillSectionRef }) => {
  return (
    <ContentWrapper direction="row" aboutWrapper>
      <NameSection skillSectionRef={skillSectionRef} />
      <DescriptionSection />
    </ContentWrapper>
  );
};

export default About;
