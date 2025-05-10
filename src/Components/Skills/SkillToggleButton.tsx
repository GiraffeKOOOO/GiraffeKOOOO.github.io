import { FC } from 'react';
import { ToggleButton } from '@mui/material';
import { Colours } from 'Components/Shared/Colours';
import { SkillGraph } from 'Components/Shared/Types';

type SkillToggleButtonProps = {
  skill: SkillGraph;
  onChangeHandler: (value: SkillGraph) => void;
};

const SkillToggleButton: FC<SkillToggleButtonProps> = ({ skill, onChangeHandler }) => {
  return (
    <ToggleButton
      value={skill}
      onChange={(_, value) => onChangeHandler(value)}
      sx={{
        color: Colours.white,
        '&.Mui-selected': {
          backgroundColor: Colours.navButton,
          '&:hover': {
            backgroundColor: Colours.navButton,
          },
        },
        '&:hover': {
          backgroundColor: Colours.skillToggleHover,
        },
      }}
    >
      {skill}
    </ToggleButton>
  );
};

export default SkillToggleButton;
