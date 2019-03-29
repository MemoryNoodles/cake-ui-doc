import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import "antd/dist/antd.css"
import Contanier from './contanier';
import * as serviceWorker from './serviceWorker';

class App extends React.Component{
    render(){
        return <BrowserRouter >
                        <Route  path="/" component={Contanier}></Route>
                        {/* <Route exact path="/searchForm" component={Contanier}></Route> */}
                </BrowserRouter>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();


