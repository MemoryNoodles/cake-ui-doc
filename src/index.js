import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,  Route, Switch, Redirect } from "react-router-dom";

import "antd/dist/antd.css"
import Contanier from './contanier';
import * as serviceWorker from './serviceWorker';

class App extends React.Component{
   
    render(){
        return <HashRouter>
                      <Switch>
                          <Route path="/" component={Contanier}></Route>
                      </Switch>
                </HashRouter>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();


