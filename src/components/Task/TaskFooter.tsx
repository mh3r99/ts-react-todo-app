import React, { FC } from 'react';
import {
  Switch,
  FormControlLabel,
  Box,
  Button,
} from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';

const TaskFooter: FC<ITaskFooter> = ({
  onStatusChange = (e) => console.log(e),
  onClick = (e) => console.log(e),
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            color="warning"
            onChange={onStatusChange}
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#fff' }}
        onClick={onClick}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

export default TaskFooter;
