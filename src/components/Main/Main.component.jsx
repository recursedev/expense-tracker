import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import Form from '../../components/Form/Form.component';
import List from '../../components/List/List.component';


import useStyles from './Main.styles';

const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title='Expense Tracker' subheader='Powered by Siri' />
      <CardContent>
        <Typography align='center' variant='h5'>Total Balance $100</Typography>
        <Typography variant='subtitle1' style={{lineHeight:'1.5em', marginTop:'20px'}}>Total Balance $100
          {/* InfoCard */}
          Try saying something to add money into your accound magically....
        </Typography>
        <Divider/>
        <Form/>
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}> 
           <List/>
          </Grid>
        </Grid>

      </CardContent>
      
    </Card>
  )
}

export default Main;
