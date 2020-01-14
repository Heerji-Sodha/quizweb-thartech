import React from 'react';
import Navbar from './../../components/Drawer/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Home.css'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar/>
      <Grid container >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBX-Jp1I5Oi3KenqyeXbkzG_FKco1jfeTOVoRL84yxSsAP6GcGSA&s" alt="Pic"  width="100%" height="280px"/>
       <Grid item xs={12}>  
       <Grid>

         <h1 id="classsection"> Classes Section's</h1>
       </Grid>






        </Grid>
       
      </Grid>
    </div>
  );
}