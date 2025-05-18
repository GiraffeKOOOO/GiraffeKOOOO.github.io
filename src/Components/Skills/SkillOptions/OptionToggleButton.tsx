import { FC } from 'react';
import { ToggleButton } from '@mui/material';
import { Colours } from 'Components/Shared/Colours';
import { SkillOption } from 'Components/Shared/Types';

type SkillToggleButtonProps = {
  skillOption: SkillOption;
  onChangeHandler: (value: SkillOption) => void;
};

const OptionToggleButton: FC<SkillToggleButtonProps> = ({ skillOption, onChangeHandler }) => {
  return (
    <ToggleButton
      value={skillOption}
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
      {skillOption}
    </ToggleButton>
  );
};

export default OptionToggleButton;
