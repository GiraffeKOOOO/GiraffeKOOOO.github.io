import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { Unstable_RadarChart as RadarChart } from '@mui/x-charts/RadarChart';
import { FaGitAlt } from 'react-icons/fa';
import { IoLogoGitlab } from 'react-icons/io5';
import { SiGrafana } from 'react-icons/si';
import { FaDocker } from 'react-icons/fa';
import { SiRancher } from 'react-icons/si';
import { SiArgo } from 'react-icons/si';
import { SiHarbor } from 'react-icons/si';
import { MdNetworkCheck } from 'react-icons/md';
import { LuFileSearch } from 'react-icons/lu';
import { Colours } from 'Components/Shared/Colours';
import { SkillGraph } from 'Components/Shared/Types';
import BlockGraphRow from 'Components/Skills/BlockGraphRow';

type CicdProps = {
  skillView: SkillGraph;
};

const Cicd: FC<CicdProps> = ({ skillView }) => {
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
          series={[{ data: [8, 6, 5, 5, 5, 4, 5, 4, 4], fillArea: true, color: 'rgb(0, 60, 255)' }]}
          radar={{
            max: 10,
            metrics: [
              'Git',
              'GitLab pipelines',
              'Seq',
              'Grafana',
              'Docker',
              'Rancher',
              'ArgoCD',
              'Harbour',
              'ntop',
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
        <BlockGraphRow title="Git" icon={FaGitAlt} filled={7} empty={3} />
        <BlockGraphRow title="GitLab pipelines" icon={IoLogoGitlab} filled={6} empty={4} />
        <BlockGraphRow title="Seq" icon={LuFileSearch} filled={5} empty={5} />
        <BlockGraphRow title="Grafana" icon={SiGrafana} filled={5} empty={5} />
        <BlockGraphRow title="Docker" icon={FaDocker} filled={5} empty={5} />
        <BlockGraphRow title="Rancher" icon={SiRancher} filled={4} empty={6} />
        <BlockGraphRow title="Argo CD" icon={SiArgo} filled={5} empty={5} />
        <BlockGraphRow title="Harbour" icon={SiHarbor} filled={4} empty={6} />
        <BlockGraphRow title="ntop" icon={MdNetworkCheck} filled={4} empty={6} />
      </Stack>
    );
  }
};

export default Cicd;
