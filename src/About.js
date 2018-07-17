import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class About extends Component {

 

  render() {
    return (
      <div className="About">
    <center><h1>The Game of Mao</h1>
    <p> 
        The game of Mao is very unconventional. 
        Imagine playing Uno, but with a standard 52 card deck. 
        There's some extra rules, but you'll figure them out as you go. 
    </p>
        
        <br />
        
        <p> If you would like to manage a Rules List:
           <NavLink to={"/rules-list"}>  
             Click Here 
            </NavLink>
        </p>
    </center>
      </div>
      
    );
  }

  
}






export default About;
