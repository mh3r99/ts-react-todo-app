import React, { FC } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ISelectField } from './interfaces/ISelectField';

const TaskSelectField: FC<ISelectField> = ({
  value = '',
  label = 'Select Box',
  name = 'selectBox',
  items = [{ value: '', label: 'Add Items' }],
  disabled = false,
  onChange = (e) => console.log(e),
}) => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item, i) => (
          <MenuItem key={item.value + i} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TaskSelectField;
