import React, { Component } from 'react';

class ListItemMaker extends Component{

    render(){
        return ( 
        <div>
        <li>
            <h3>{this.props.title} </h3>
            <p>{this.props.rule}</p>
             </li>
        </div>)}




}


export default ListItemMaker