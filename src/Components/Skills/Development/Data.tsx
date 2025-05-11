import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { Unstable_RadarChart as RadarChart } from '@mui/x-charts/RadarChart';
import { SiMysql } from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';
import { SiSqlite } from 'react-icons/si';
import { SiJson } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import { Colours } from 'Components/Shared/Colours';
import { SkillGraph } from 'Components/Shared/Types';
import BlockGraphRow from 'Components/Skills/BlockGraphRow';

type DataProps = {
  skillView: SkillGraph;
};

const Data: FC<DataProps> = ({ skillView }) => {
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
          series={[{ data: [5, 5, 4, 3, 7, 3, 4], fillArea: true, color: 'rgb(255, 0, 0)' }]}
          radar={{
            max: 10,
            metrics: [
              'MySQL',
              'Microsoft SQL',
              'Oracle SQL',
              'SQLite',
              'JSON',
              'Mongo DB',
              'GraphQL',
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
        <BlockGraphRow title="MySQL" icon={SiMysql} filled={5} empty={5} />
        <BlockGraphRow title="Microsoft SQL" icon={FaMicrosoft} filled={5} empty={5} />
        <BlockGraphRow title="Oracle SQL" icon={SiOracle} filled={4} empty={6} />
        <BlockGraphRow title="SQLite" icon={SiSqlite} filled={3} empty={7} />
        <BlockGraphRow title="JSON" icon={SiJson} filled={7} empty={3} />
        <BlockGraphRow title="Mongo DB" icon={SiMongodb} filled={3} empty={7} />
        <BlockGraphRow title="GraphQL" icon={GrGraphQl} filled={4} empty={6} />
      </Stack>
    );
  }
};

export default Data;
