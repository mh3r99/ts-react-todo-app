import React, { FC } from 'react';
import { TextField } from '@mui/material';

const TaskTitleField: FC = () => {
  return (
    <TextField
      id="title"
      name="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      fullWidth
    />
  );
};

export default TaskTitleField;
