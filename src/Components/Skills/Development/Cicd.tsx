import { FC } from 'react';
import { Box } from '@mui/material';
import { Unstable_RadarChart as RadarChart } from '@mui/x-charts/RadarChart';
import { Colours } from 'Components/Shared/Colours';

const Cicd: FC = () => {
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
            'Ntop',
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
};

export default Cicd;
