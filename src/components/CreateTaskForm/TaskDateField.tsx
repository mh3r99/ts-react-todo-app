import React, { FC } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';
import { IDateField } from './interfaces/IDateField';
import { DesktopDatePicker } from '@mui/x-date-pickers';

const TaskDateField: FC<IDateField> = ({
  value = new Date(),
  onChange = (date) => console.log(date),
  disabled = false,
}) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          format="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          disabled={disabled}
          slots={{
            textField: TextField,
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default TaskDateField;
