import React, { FC } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';

const TaskDescriptionField: FC<ITextField> = ({
  onChange = (e) => console.log(e),
  disabled = false,
}) => {
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
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default TaskDescriptionField;
