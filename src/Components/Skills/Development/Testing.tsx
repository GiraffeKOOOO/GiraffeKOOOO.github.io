import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { Unstable_RadarChart as RadarChart } from '@mui/x-charts/RadarChart';
import { SiCypress } from 'react-icons/si';
import { SiJest } from 'react-icons/si';
import { SiVitest } from 'react-icons/si';
import { SiSelenium } from 'react-icons/si';
import { SiJunit5 } from 'react-icons/si';
import { SiPhp } from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';
import { FaFileSignature } from 'react-icons/fa';
import { Colours } from 'Components/Shared/Colours';
import { SkillGraph } from 'Components/Shared/Types';
import BlockGraphRow from 'Components/Skills/BlockGraphRow';

type TestingProps = {
  skillView: SkillGraph;
};

const Testing: FC<TestingProps> = ({ skillView }) => {
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
          series={[
            { data: [7, 7, 7, 5, 2, 3, 4, 4, 8], fillArea: true, color: 'rgb(204, 0, 255)' },
          ]}
          radar={{
            max: 10,
            metrics: [
              'Cypress',
              'Jest',
              'Vitest',
              'Selenium',
              'JUnit',
              'PHP Unit',
              'C# .NET Unit',
              'C# .NET Integration',
              'Manual Testing',
            ],
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
        <BlockGraphRow title="Cypress" icon={SiCypress} filled={5} empty={5} />
        <BlockGraphRow title="Jest" icon={SiJest} filled={5} empty={5} />
        <BlockGraphRow title="Vitest" icon={SiVitest} filled={4} empty={6} />
        <BlockGraphRow title="Selenium" icon={SiSelenium} filled={3} empty={7} />
        <BlockGraphRow title="JUnit" icon={SiJunit5} filled={3} empty={7} />
        <BlockGraphRow title="PHP Unit" icon={SiPhp} filled={3} empty={7} />
        <BlockGraphRow title="C# .NET Unit" icon={FaMicrosoft} filled={4} empty={6} />
        <BlockGraphRow title="C# .NET Integration" icon={FaMicrosoft} filled={4} empty={6} />
        <BlockGraphRow title="Manual Testing" icon={FaFileSignature} filled={4} empty={6} />
      </Stack>
    );
  }
};

export default Testing;
