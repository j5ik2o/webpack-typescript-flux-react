/**
 * @author Junichi Kato
 */
///<reference path='../../../typings/react/react.d.ts'/>
///<reference path='../../../typings/react-router/react-router.d.ts'/>

import * as React from 'react';
import * as ReactRouter from 'react-router';

/**
 * The property for {@class ApplicationComponent}.
 */
interface ApplicationProps {
  children: any
}

/**
 * The application's main view.
 */
export class ApplicationComponent extends React.Component<ApplicationProps, {}> {
  render(): JSX.Element {
    return <div>
      <ul>
        <li><ReactRouter.Link to="/">Home</ReactRouter.Link></li>
        <li><ReactRouter.Link to="helloWorld">Hello World</ReactRouter.Link></li>
        <li><ReactRouter.Link to="todo">Todo</ReactRouter.Link></li>
      </ul>
      {this.props.children}
    </div>;
  }
}

