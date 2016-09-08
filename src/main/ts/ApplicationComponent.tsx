import * as React from 'react';
import * as ReactRouter from 'react-router';

interface Props {
    children: any
}

export class ApplicationComponent extends React.Component<Props, {}> {
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

