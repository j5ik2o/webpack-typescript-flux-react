import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRouter from 'react-router';
import { HelloWorldComponent } from './helloWorld/HelloWorldComponent';
import { ApplicationComponent } from './ApplicationComponent';
import { HomeComponent } from './HomeComponent';
import { TodoComponent } from './todo/ui/TodoComponent';

ReactDOM.render((
    <ReactRouter.Router history={ReactRouter.browserHistory}>
        <ReactRouter.Route path="/" component={ApplicationComponent}>
            <ReactRouter.IndexRoute component={HomeComponent}/>
            <ReactRouter.Route path="helloWorld" component={HelloWorldComponent}/>
            <ReactRouter.Route path="todo" component={TodoComponent}/>
        </ReactRouter.Route>
    </ReactRouter.Router>
), document.getElementById('app'));

