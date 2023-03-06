import React, { FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

const TaskCounter: FC = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: 'warning.light',
          }}
        >
          <Typography color="#fff" variant="h4">
            10
          </Typography>
        </Avatar>
        <Typography
          color="#fff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          Subtile
        </Typography>
      </Box>
    </>
  );
};

export default TaskCounter;
