import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { Unstable_RadarChart as RadarChart } from '@mui/x-charts/RadarChart';
import { FaMicrosoft } from 'react-icons/fa';
import { PiFileCppDuotone } from 'react-icons/pi';
import { PiFileCBold } from 'react-icons/pi';
import { FaJava } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { Colours } from 'Components/Shared/Colours';
import { SkillGraph } from 'Components/Shared/Types';
import BlockGraphRow from 'Components/Skills/BlockGraphRow';

type DesktopProps = {
  skillView: SkillGraph;
};

const Desktop: FC<DesktopProps> = ({ skillView }) => {
  if (skillView === SkillGraph.spider) {
    return (
      <Box
        sx={{
          '& svg text': {
            fill: Colours.white,
          },
        }}
      >
        <RadarChart
          height={350}
          stripeColor={(index: number) =>
            index % 2 === 0 ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 1)'
          }
          series={[{ data: [6, 4, 2, 5, 6], fillArea: true, color: 'rgb(255, 0, 0)' }]}
          radar={{
            max: 10,
            metrics: ['C#', 'C++', 'C', 'Java', 'Node.js'],
          }}
          sx={{
            '.MuiRadarGrid-stripe': {
              stroke: 'rgba(255, 255, 255, 1)',
              fillOpacity: 1,
            },
            '.MuiRadarGrid-divider': {
              stroke: 'rgb(0, 0, 0)',
            },
            '.MuiRadarSeriesPlot-area': {
              fill: 'rgba(255, 255, 255, 1))',
            },
          }}
        />
      </Box>
    );
  }

  if (skillView === SkillGraph.blocks) {
    return (
      <Stack direction="column" alignItems="center" spacing={2} sx={{ marginTop: '2rem' }}>
        <BlockGraphRow title="C#" icon={FaMicrosoft} filled={6} empty={4} />
        <BlockGraphRow title="C++" icon={PiFileCppDuotone} filled={4} empty={6} />
        <BlockGraphRow title="C" icon={PiFileCBold} filled={2} empty={8} />
        <BlockGraphRow title="Java" icon={FaJava} filled={5} empty={5} />
        <BlockGraphRow title="Node.js" icon={FaNodeJs} filled={6} empty={4} />
      </Stack>
    );
  }
};

export default Desktop;
