import React from 'react';
import App from './App';
import { Route, Switch } from 'react-router';
import {Search} from './Search/Search'

function App2() {
    
    return(
        <Switch>
            <Route path='/search' component={Search}/>
            <Route path ='/' component={App}/>
        </Switch>
    )
}



export default App2