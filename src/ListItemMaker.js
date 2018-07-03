import React, { Component } from 'react';

class ListItemMaker extends Component{

    render(){
        return ( 
        <div>
        <li>
            <h3>{this.props.title} </h3>
            <p>{this.props.rule}</p>
            <button> Remove Rule</button>

        </li>
        </div>)}




}


export default ListItemMaker