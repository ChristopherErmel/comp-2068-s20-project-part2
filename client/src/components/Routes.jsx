import React from "react";
import {Route, Switch} from "react-router-dom";

//imports the components we want to use for routes
import Home from './pages/Home';
import Login from './sessions/Login';
import Logout from './sessions/Logout';

import Trades from './trades/Index';
import NewTrade from './trades/New';
import EditTrade from './trades/Edit';

//routes component
//add props to store the properties
function Routes({user, setUser}){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" render={
                renderProps => <Login
                {...renderProps}
                setUser={setUser}
                />
            }/>
            <Route exact path="/logout" render={
                renderProps => <Logout
                {...renderProps}
                setUser={setUser}
                />
            }/>
            <Route exact path="/trades" render={
             renderProps => <Trades {...renderProps}
             user={user}
             />
             }/>
             <Route exact path="/trades/new" component={NewTrade}/>
            <Route exact path="/trades/edit" component={EditTrade}/> 
        </Switch>
    );
};
//export the routes
export default Routes;