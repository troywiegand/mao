import React, { Component } from 'react';
import ListItemMaker from './ListItemMaker';

class OurRulesList extends Component{



    render(){
        return ( 
        <div>
        <button onClick={(ev)=>{
            ev.preventDefault()
            this.props.fillOld()}} id="ourRules">Our Rules</button>
        <ul id="rulesList">
       { this.props.RulesArray.map((currentRule,i)=>{
           return <ListItemMaker removeRule={this.props.removeRule} title={currentRule.title} ruleObj={currentRule} rule={currentRule.rule} key={i} />
       }) }
        </ul>
        </div>)}

 
}




export default OurRulesList