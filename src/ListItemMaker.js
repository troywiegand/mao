import React, { Component } from 'react';

class ListItemMaker extends Component{
    constructor(){
        super()
        this.state={alive: true}
    }

    ruleKiller(){
        if(this.state.alive){
            this.setState({alive: false})
        }
    }

    render(){
        if(this.state.alive){
        return ( 
        <div>
        <li>
            <h3>{this.props.title} </h3>
            <p>{this.props.rule}</p>
            <button onClick={(ev) =>{
                ev.preventDefault()
                this.ruleKiller()}}> 
                Remove Rule</button>

        </li>
        </div>)}
        return null
    }




}


export default ListItemMaker