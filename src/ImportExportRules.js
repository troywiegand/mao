import React, { Component } from 'react';

class ImportExportRules extends Component{

    state={
        importString: '',
        export: '',
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
        console.log(this.props.RulesArray)
        const stringy=JSON.stringify(this.props.RulesArray)
        console.log(stringy)
        this.setState({export: JSON.stringify(this.props.RulesArray)})

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
                <button onClick={this.handleClick}>
                    Get String for Export
                </button>

                <p>{this.state.export}</p>

            </span>

            </div>
        )
    }
}

export default ImportExportRules;