import React, { FC } from 'react';
import { Box } from '@mui/material';
import TaskHeader from './TaskHeader';
import TaskDescription from './TaskDescription';
import TaskFooter from './TaskFooter';
import { ITask } from './interfaces/ITask';
import { Status } from '../CreateTaskForm/enums/Status';
import { Priority } from '../CreateTaskForm/enums/Priority';
import { renderPriorityBorderColors } from './helpers/renderPriorityBorderColor';

const Task: FC<ITask> = ({
  title = 'Test Title',
  date = new Date(),
  description = 'Lorem, ipsum dolor.',
  priority = Priority.normal,
  status = Status.completed,
  onStatusChange = (e) => console.log(e),
  onClick = (e) => console.log(e),
}) => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColors(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        onStatusChange={onStatusChange}
        onClick={onClick}
      />
    </Box>
  );
};

export default Task;
