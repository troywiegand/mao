import React, { Component } from 'react';

class ImportExportRules extends Component{

   

    constructor(){
        super()
        this.state={
            importString: '',
            export: '',
        }
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.importRules(ev.target.importString.value)
    }

    handleChange =(ev)=>{
        this.setState({importString: ev.target.value})
    }

    handleClick= (ev)=>{
        ev.preventDefault()
        this.handleString()
    }

    test = (ev)=>{
       this.handleClick(ev)
       this.copyText() 
    }

    handleString = ()=>{
        this.setState({export: JSON.stringify(this.props.RulesArray)})
    }

    copyText = ()=>{
        const copyText = document.getElementById("exportString")
        copyText.select()
        document.execCommand('copy')
    }

    render(){

        return(
            <div className="ImportExportRules">
            <span>
            <form onSubmit={this.handleSubmit}>
            <input 
            type="text" name ="importString"
            value={this.state.importString}
            onChange={this.handleChange}
            placeholder="Paste String to Import Rules"
            />
            </form>
            </span>

            <span>
                <button onClick={this.test}>
                    Generate String to Export
                </button>

                <input id="exportString" value={this.state.export}></input>

            </span>

            </div>
        )
    }
}

export default ImportExportRules;