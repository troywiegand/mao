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


    handleString = ()=>{
       
        this.setState({export: this.props.importExportString})
        console.log(this.props.importExportString)

    }

    copyText = ()=>{
        const copyText = document.getElementById("exportString")
        copyText.select()
        document.execCommand('copy')
    }

   

    render(){

        return(
            <div className="ImportExportRules">
            <h3> Export/Import Rules Lists </h3>
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
                <button className="export" onClick={this.handleClick}>
                    Generate String to Export
                </button>

                <input id="exportString" value={this.state.export} onClick={this.copyText}></input>

            </span>

            </div>
        )
    }
}

export default ImportExportRules;