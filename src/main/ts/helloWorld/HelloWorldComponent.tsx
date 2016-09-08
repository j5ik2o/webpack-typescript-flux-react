import * as React from 'react';
import { HelloWorldState } from './HelloWorldState';
import { HelloWorldActionCreator } from './HelloWorldActionCreator';
import { helloWorldStore } from './HelloWorldStore';

export class HelloWorldComponent extends React.Component<{}, HelloWorldState> {

    private listenerSubscription: { remove: Function };

    constructor(props: {}) {
        super(props);
        this.state = new HelloWorldState("Hello World!", "");
    }

    handleValueChange(event: React.SyntheticEvent) {
        const message = (event.target as HTMLInputElement).value;
        this.setState(new HelloWorldState(message, this.state.completedMessage));
    }

    handleStateChange() {
        console.log("state change = " + this.state.message);
        const state = new HelloWorldState(this.state.message, helloWorldStore.getState().completedMessage);
        this.setState(state);
    }

    handleClick() {
        HelloWorldActionCreator.doHelloWorld(this.state.message);
    }

    componentDidMount() {
        this.listenerSubscription = helloWorldStore.addListener(this.handleStateChange.bind(this));
    }

    componentWillUnmount() {
        this.listenerSubscription.remove();
    }


    render(): JSX.Element {
        return <div>
            <input type='input' value={this.state.message} onChange={this.handleValueChange.bind(this)}/>
            <button onClick={this.handleClick.bind(this)}>Update</button>
            <div>
                preview: <span>{this.state.message}</span>
            </div>
            <div>
                commit: <span>{this.state.completedMessage}</span>
            </div>
        </div>;
    }
}