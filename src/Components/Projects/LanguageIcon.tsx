import { FC } from 'react';
import { Tech } from 'Components/Shared/Types';
import { FaReact } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiVite } from 'react-icons/si';
import { SiMui } from 'react-icons/si';
import { SiReactrouter } from 'react-icons/si';
import { SiRecoil } from 'react-icons/si';
import { SiReactbootstrap } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';

type LanguageIconProps = {
  tech: Tech;
};

const LanguageIcon: FC<LanguageIconProps> = ({ tech }) => {
  switch (tech) {
    case Tech.react:
      return <FaReact />;
    case Tech.typescript:
      return <BiLogoTypescript />;
    case Tech.vite:
      return <SiVite />;
    case Tech.mui:
      return <SiMui />;
    case Tech.reactRouter:
      return <SiReactrouter />;
    case Tech.reactRecoil:
      return <SiRecoil />;
    case Tech.reactBootstrap:
      return <SiReactbootstrap />;
    case Tech.tailwind:
      return <RiTailwindCssFill />;
  }
};

export default LanguageIcon;
