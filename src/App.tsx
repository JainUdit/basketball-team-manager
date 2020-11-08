import { Grid } from '@material-ui/core';
import * as React from 'react';
import './App.css';
import { TeamManager } from './redux-app/components/TeamManager';

const App = (): React.ReactElement => (
  <Grid container>
    <TeamManager />
  </Grid>
);

export default App;
