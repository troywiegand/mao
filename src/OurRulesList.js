import React, { Component } from 'react';
import ListItemMaker from './ListItemMaker';
import ImportExportRules from './ImportExportRules'

class OurRulesList extends Component{



    render(){
        return ( 
        <div>
       
        <ul id="rulesList">
       { this.props.RulesArray.map((currentRule,i)=>{
           return <ListItemMaker removeRule={this.props.removeRule} title={currentRule.title} ruleObj={currentRule} rule={currentRule.rule} key={i} />
       }) }
        </ul>
        <button onClick={(ev)=>{
            ev.preventDefault()
            this.props.fillOld()}} id="ourRules">Add Our Rules to Your List!</button>
        <ImportExportRules RulesArray={this.props.RulesArray}
        importRules={this.props.importRules}
        importExportString={this.props.stringForImportExport}/>
        </div>)}

 
}




export default OurRulesList