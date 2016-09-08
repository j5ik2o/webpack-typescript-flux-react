import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRouter from 'react-router';
import { HelloWorldComponent } from './helloWorld/HelloWorldComponent';
import { ApplicationComponent } from './ApplicationComponent';
import { HomeComponent } from './HomeComponent';

ReactDOM.render((
    <ReactRouter.Router history={ReactRouter.browserHistory}>
        <ReactRouter.Route path="/" component={ApplicationComponent}>
            <ReactRouter.IndexRoute component={HomeComponent}/>
            <ReactRouter.Route path="helloWorld" component={HelloWorldComponent}/>
        </ReactRouter.Route>
    </ReactRouter.Router>
), document.getElementById('app'));

