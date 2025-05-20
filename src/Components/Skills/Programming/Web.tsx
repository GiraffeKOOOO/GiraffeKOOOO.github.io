import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { Unstable_RadarChart as RadarChart } from '@mui/x-charts/RadarChart';
import { FaReact } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiPhp } from 'react-icons/si';
import { FaLaravel } from 'react-icons/fa';
import { TiHtml5 } from 'react-icons/ti';
import { IoLogoCss3 } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { Colours } from 'Components/Shared/Colours';
import { SkillGraph } from 'Components/Shared/Types';
import BlockGraphRow from 'Components/Skills/BlockGraphRow';

type WebProps = {
  skillView: SkillGraph;
};

const Web: FC<WebProps> = ({ skillView }) => {
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
          series={[{ data: [7, 7, 5, 5, 5, 7, 7, 8], fillArea: true, color: 'rgb(0, 60, 255)' }]}
          radar={{
            max: 10,
            metrics: [
              'Typescript',
              'JavaScript',
              'Tailwind',
              'PHP',
              'Laravel',
              'HTML',
              'CSS',
              'React',
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
        <BlockGraphRow title="React" icon={FaReact} filled={7} empty={3} />
        <BlockGraphRow title="Typescript" icon={BiLogoTypescript} filled={7} empty={3} />
        <BlockGraphRow title="JavaScript" icon={IoLogoJavascript} filled={7} empty={3} />
        <BlockGraphRow title="PHP" icon={SiPhp} filled={5} empty={5} />
        <BlockGraphRow title="Laravel" icon={FaLaravel} filled={5} empty={5} />
        <BlockGraphRow title="HTML" icon={TiHtml5} filled={7} empty={3} />
        <BlockGraphRow title="CSS" icon={IoLogoCss3} filled={7} empty={3} />
        <BlockGraphRow title="Tailwind" icon={RiTailwindCssFill} filled={5} empty={5} />
      </Stack>
    );
  }
};

export default Web;
