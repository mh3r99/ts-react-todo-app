import React, { FC } from 'react';
import { TextField } from '@mui/material';

const TaskDescriptionField: FC = () => {
  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
    />
  );
};

export default TaskDescriptionField;
