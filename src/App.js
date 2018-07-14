import React, { Component } from 'react';
import {Route , Switch, Redirect} from 'react-router-dom'


import MainList from './MainList';

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
            render={()=>{
                return(
                    <Redirect to='/rules-list'/>
                )
            }}
            />
        </Switch>
    )
}

}

export default App