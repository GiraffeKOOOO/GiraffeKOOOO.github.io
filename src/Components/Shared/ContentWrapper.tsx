import { FC, ReactNode, RefObject } from 'react';
import { Stack } from '@mui/material';
import bannerImage from 'Assets/pbs-transparent.png';

type ContentWrapperProps = {
  children: ReactNode;
  sectionRef?: RefObject<HTMLDivElement | null>;
  aboutWrapper?: boolean;
  direction?: 'row' | 'column';
  customHeight?: number;
};

const aboutStyling = {
  backgroundImage: `url(${bannerImage})`,
  backgroundSize: '55rem 55rem',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '48% 90%',
};

const ContentWrapper: FC<ContentWrapperProps> = ({
  children,
  sectionRef,
  direction,
  aboutWrapper,
  customHeight,
}) => {
  return (
    <Stack
      ref={sectionRef}
      direction={direction}
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={aboutWrapper ? aboutStyling : null}
      height={customHeight ?? '100vh'}
    >
      {children}
    </Stack>
  );
};

export default ContentWrapper;
