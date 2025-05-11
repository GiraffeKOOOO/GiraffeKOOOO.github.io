import { FC } from 'react';
import { SkillGraph, SkillOption } from 'Components/Shared/Types';
import Programming from 'Components/Skills/Programming/Programming';
import Development from 'Components/Skills/Development/Development';

type ChartsProps = {
  skillView: SkillGraph;
  skillOption: SkillOption;
};

const Charts: FC<ChartsProps> = ({ skillView, skillOption }) => {
  switch (skillOption) {
    case SkillOption.programming:
      return <Programming skillView={skillView} />;
    case SkillOption.development:
      return <Development skillView={skillView} />;
    // case SkillOption.general:
    //     return <General skillView={skillView} />;
    default:
      return <Programming skillView={skillView} />;
  }
};

export default Charts;
