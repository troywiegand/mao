import React, { Component } from 'react';
import {Route , Switch, Redirect} from 'react-router-dom'


import MainList from './MainList';
import About from './About'

class App extends Component {
constructor()
{
super()
}

render(){
    return(
        <Switch>
            <Route
            path='/rules-list'
            component={MainList}
            />
            <Route
            path='/about'
            component={About}
            />
            <Route
            render={()=>{
                return(
                    <Redirect to='/about'/>
                )
            }}
            />
        </Switch>
    )
}

}

export default App