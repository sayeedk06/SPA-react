import React from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import Slide from 'react-reveal/Slide';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


export default function Contact(){
    const classes = useStyles();
    return(
        <Paper elevation={4}  square style={{margin: '10%', padding:'1%'}}>
          <Slide bottom>
        <div className='contact' id='contact'>
        <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
            Contact Us
        </Typography>            
           <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Name" />
            <TextField id="standard-basic" label="Email" /> <br/>
            <div className='multi-text'>
            <TextField id="standard-basic" multiline={true} rows='10' fullWidth={true} label="Your Query" variant="outlined" />
            </div>
            <div className='send-button'> <br/>
            <Button
            variant="contained"
            color="primary"
            className={classes.button}
            size='large'
            endIcon={<SendIcon>send</SendIcon>}
            >
            Send
        </Button>
            </div>

        </form> 
        </div>
        </Slide>
        </Paper>
    )}