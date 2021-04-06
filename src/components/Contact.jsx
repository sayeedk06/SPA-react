import React from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
export default function Contact(){
    return(
        <div className='contact'>
        <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
            Contact Us
        </Typography>            
           <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Email" />
            <TextField id="standard-basic" label="Name" /> <br/>
            <div className='multi-text'>
            <TextField id="standard-basic" multiline={true} rows='10' fullWidth={true} label="Your Query" variant="outlined" />
            </div>
            
        </form> 
        </div>
    )}