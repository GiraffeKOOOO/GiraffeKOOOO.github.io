import { FC, useState } from 'react';
import { ToggleButtonGroup } from '@mui/material';
import { Colours } from 'Components/Shared/Colours';
import SkillToggleButton from 'Components/Skills/SkillToggleButton';
import { SkillGraph } from 'Components/Shared/Types';

const SkillsToggle: FC = () => {
  const [skillView, setSkillView] = useState<SkillGraph>(SkillGraph.spider);

  const handleChange = (value: SkillGraph) => {
    if (value === skillView) return;
    setSkillView(value);
  };

  return (
    <>
      <ToggleButtonGroup
        aria-label="skill selection"
        value={skillView}
        exclusive
        sx={{
          border: `1px solid ${Colours.navButton}`,
          borderRadius: 2,
        }}
      >
        <SkillToggleButton onChangeHandler={handleChange} skill={SkillGraph.spider} />
        <SkillToggleButton onChangeHandler={handleChange} skill={SkillGraph.bar} />
        <SkillToggleButton onChangeHandler={handleChange} skill={SkillGraph.overview} />
      </ToggleButtonGroup>
    </>
  );
};

export default SkillsToggle;
