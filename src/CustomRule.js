import React, { Component } from 'react';
import './App.css';

class CustomRule extends Component {

state={
    title: '',
    body: ''
}

handleSubmit= (ev) => {
    ev.preventDefault()
    this.props.addRule(this.createRule(ev))
}

createRule = (ev) => {
    const rule= {
        title: ev.target.title.value,
        rule: ev.target.rule.value,
    }
    
    return rule
}

handleChangeTitle = (ev) => {
    this.setState({title: ev.target.value})
}

handleChangeBody = (ev) => {
    this.setState({body: ev.target.value})
}


  render() {
    return (
      <div className="CustomRule">
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" 
                autoFocus
                placeholder="Rule Title... "
                value={this.state.title}
                onChange={this.handleChangeTitle}
                />
                <input type="text" name="rule" 
                placeholder="Rule Text... "
                value={this.state.body}
                onChange={this.handleChangeBody}
                />
                <button type="submit" >Add Your Rule!</button>


            </form>
      </div>
      
    );
  }
}

export default CustomRule;
