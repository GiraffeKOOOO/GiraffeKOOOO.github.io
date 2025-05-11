import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { Unstable_RadarChart as RadarChart } from '@mui/x-charts/RadarChart';
import { SiKotlin } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { Colours } from 'Components/Shared/Colours';
import { SkillGraph } from 'Components/Shared/Types';
import BlockGraphRow from 'Components/Skills/BlockGraphRow';

type MobileProps = {
  skillView: SkillGraph;
};

const Mobile: FC<MobileProps> = ({ skillView }) => {
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
          series={[{ data: [5, 7, 4], fillArea: true, color: 'rgb(204, 0, 255)' }]}
          radar={{
            max: 10,
            metrics: ['Kotlin', 'React Native', 'Java'],
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
        <BlockGraphRow title="Kotlin" icon={SiKotlin} filled={5} empty={5} />
        <BlockGraphRow title="React Native" icon={FaReact} filled={7} empty={3} />
        <BlockGraphRow title="Java" icon={FaJava} filled={5} empty={5} />
      </Stack>
    );
  }
};

export default Mobile;
