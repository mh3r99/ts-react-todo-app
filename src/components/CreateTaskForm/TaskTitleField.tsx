import React, { FC } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';

const TaskTitleField: FC<ITextField> = ({
  onChange = (e) => console.log(e),
  disabled = false,
}) => {
  return (
    <TextField
      id="title"
      name="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default TaskTitleField;
