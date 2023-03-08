import React, { FC } from 'react';
import {
  Switch,
  FormControlLabel,
  Box,
  Button,
} from '@mui/material';

const TaskFooter: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={<Switch color="warning" />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#fff' }}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

export default TaskFooter;
