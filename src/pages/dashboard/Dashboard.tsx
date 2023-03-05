import React, { FC } from 'react';
import { Grid } from '@mui/material';
import TaskArea from '../../components/TaskArea/TaskArea';
import Sidebar from '../../components/Sidebar/Sidebar';

const Dashboard: FC = () => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea />
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
