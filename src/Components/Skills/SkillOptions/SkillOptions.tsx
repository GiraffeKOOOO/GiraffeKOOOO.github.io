import { FC } from 'react';
import { ToggleButtonGroup } from '@mui/material';
import { Colours } from 'Components/Shared/Colours';
import { SkillOption } from 'Components/Shared/Types';
import OptionToggleButton from 'Components/Skills/SkillOptions/OptionToggleButton';

type SkillOptionProps = {
  skillOption: SkillOption;
  setSkillOption: (value: SkillOption) => void;
};

const SkillOptions: FC<SkillOptionProps> = ({ skillOption, setSkillOption }) => {
  const handleChange = (value: SkillOption) => {
    if (value === skillOption) return;
    setSkillOption(value);
  };

  return (
    <ToggleButtonGroup
      aria-label="skill option selection"
      value={skillOption}
      orientation="vertical"
      exclusive
      sx={{
        border: `1px solid ${Colours.navButton}`,
        borderRadius: 2,
      }}
    >
      <OptionToggleButton onChangeHandler={handleChange} skillOption={SkillOption.programming} />
      <OptionToggleButton onChangeHandler={handleChange} skillOption={SkillOption.development} />
      <OptionToggleButton onChangeHandler={handleChange} skillOption={SkillOption.general} />
    </ToggleButtonGroup>
  );
};
export default SkillOptions;
