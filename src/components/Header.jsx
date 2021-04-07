import React from "react";
import Pulse from 'react-reveal/Pulse';
export default function Header() {
    return (
        <div>
            <div className='overlay'>    
            </div>
            <div className='header-content'>
            <Pulse>
            <h1>All the world’s a stage, and all the men and women merely players.</h1>
            <h1> They have their exits and their entrances;</h1> 
            <h1>And one man in his time plays many parts.</h1>
            </Pulse>
            </div>
        </div>
        
    )
}