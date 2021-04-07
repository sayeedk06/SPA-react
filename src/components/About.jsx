import React from "react";
// import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Profile from './Profile'
import Zoom from 'react-reveal/Zoom';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(36),
        height: theme.spacing(46),
      },
    },
  }));


function About (){
    const classes = useStyles();
    console.log(Profile)
    return (
            <div className='about' id='about'>
              <Zoom>
                <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
                    The Team
                </Typography>
                <Typography component="p" variant="h6" align="center" color="textSecondary" gutterBottom>
                In tempus hendrerit venenatis. Cras mi ante, sagittis vitae molestie vitae, condimentum id diam.
                </Typography>
                 
            <div className={classes.root} style={{marginLeft:'18%', marginBottom: '5%'}}>
                {Profile.map((person) =>{
                  return <Paper  elevation={3}>
                    <img style={{ height: '90%', width: '100%' }} src={person.img_url} alt="" />
                    <Typography component="h5" variant="h6" align="center" color="textPrimary" gutterBottom>
                    {person.name}
                  </Typography>
                  </Paper>
                  
                  
                })}

            </div>
            <hr style={{width: '80%', align: 'center'}}/>
            </Zoom>
            </div>

        
    )
}

export default About;