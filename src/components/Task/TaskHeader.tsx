import React, { FC } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { ITaskHeader } from './interfaces/ITaskHeader';
import { format } from 'date-fns';

const TaskHeader: FC<ITaskHeader> = ({
  title = 'Default Title',
  date = new Date(),
}) => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mb={4}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip
          variant="outlined"
          label={format(date, 'PPP')}
        />
      </Box>
    </Box>
  );
};

export default TaskHeader;
