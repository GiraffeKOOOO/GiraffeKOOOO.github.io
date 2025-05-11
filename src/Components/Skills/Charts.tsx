import { FC } from 'react';
import { SkillOption } from 'Components/Shared/Types';
import Programming from 'Components/Skills/Programming/Programming';
import Development from 'Components/Skills/Development/Development';

type ChartsProps = {
  skillOption: SkillOption;
};

const Charts: FC<ChartsProps> = ({ skillOption }) => {
  switch (skillOption) {
    case SkillOption.programming:
      return <Programming />;
    case SkillOption.development:
      return <Development />;
    case SkillOption.general:
      //   return <General />;
      return <></>;
    default:
      return <Programming />;
  }
};

export default Charts;
