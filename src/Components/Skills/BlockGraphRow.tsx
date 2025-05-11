import { FC } from 'react';
import { Stack } from '@mui/material';
import { IconType } from 'react-icons/lib';
import Title from 'Components/Skills/BlockGraph/Title';
import FilledBlock from 'Components/Skills/BlockGraph/FilledBlock';
import EmptyBlock from 'Components/Skills/BlockGraph/EmptyBlock';

type BlockGraphRowProps = {
  title: string;
  filled: number;
  empty: number;
  icon?: IconType;
};

const BlockGraphRow: FC<BlockGraphRowProps> = ({ title, icon, filled, empty }) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{ marginLeft: '1rem', height: '2rem' }}
    >
      <Title title={title} icon={icon} />
      <Stack direction="row" spacing={1} sx={{ width: '20rem' }}>
        {Array.from({ length: filled }).map((_, index) => {
          return <FilledBlock key={index} />;
        })}
        {Array.from({ length: empty }).map((_, index) => {
          return <EmptyBlock key={index} />;
        })}
      </Stack>
    </Stack>
  );
};

export default BlockGraphRow;
