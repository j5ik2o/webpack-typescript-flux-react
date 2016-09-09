/**
 * @author Junichi Kato
 */
///<reference path='../../../typings/react/react.d.ts'/>
///<reference path='../../../typings/react/react-dom.d.ts'/>
///<reference path='../../../typings/react-router/react-router.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRouter from 'react-router';
import { HelloWorldComponent } from './helloWorld/HelloWorldComponent';
import { ApplicationComponent } from './ApplicationComponent';
import { HomeComponent } from './HomeComponent';
import { TodoComponent } from './todo/ui/TodoComponent';

/**
 * The entry point of this application.
 */
ReactDOM.render((
  <ReactRouter.Router history={ReactRouter.browserHistory}>
    <ReactRouter.Route path="/" component={ApplicationComponent}>
      <ReactRouter.IndexRoute component={HomeComponent}/>
      <ReactRouter.Route path="helloWorld" component={HelloWorldComponent}/>
      <ReactRouter.Route path="todo" component={TodoComponent}/>
    </ReactRouter.Route>
  </ReactRouter.Router>
), document.getElementById('app'));

