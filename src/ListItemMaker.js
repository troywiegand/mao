import React, { Component } from 'react';

class ListItemMaker extends Component{
    constructor(){
        super()
        this.state={alive: true}
    }



    render(){
        return ( 
        <div>
        <li>
            <h3>{this.props.title} </h3>
            <p>{this.props.rule}</p>
            <button onClick={(ev) =>{
                ev.preventDefault()
                this.props.removeRule(this.props.ruleObj)}}> 
                Remove Rule</button>

        </li>
        </div>)
    }




}


export default ListItemMaker