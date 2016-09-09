/**
 * @author Junichi Kato
 */
import * as React from 'react';
import { HelloWorldState } from './HelloWorldState';
import { HelloWorldActionCreator } from './HelloWorldActionCreator';
import { helloWorldStore } from './HelloWorldStore';

/**
 * The React's View Component for HelloWorld.
 */
export class HelloWorldComponent extends React.Component<{}, HelloWorldState> {

  private listenerSubscription: { remove: Function };

  constructor(props: {}) {
    super(props);
    this.state = new HelloWorldState("Hello World!", "");
  }

  handleStateChange() {
    console.log("state change = " + this.state.inputtedMessage);
    const state = new HelloWorldState(this.state.inputtedMessage, helloWorldStore.getState().completedMessage);
    this.setState(state);
  }

  handleValueChange(event: React.SyntheticEvent) {
    const message = (event.target as HTMLInputElement).value;
    this.setState(new HelloWorldState(message, this.state.completedMessage));
  }

  handleClick() {
    HelloWorldActionCreator.doHelloWorld(this.state.inputtedMessage);
  }

  componentDidMount() {
    this.listenerSubscription = helloWorldStore.addListener(this.handleStateChange.bind(this));
  }

  componentWillUnmount() {
    this.listenerSubscription.remove();
  }

  /**
   * @override method.
   *
   * @see {React.Component#render}
   *
   * @returns {JSX.Element}
   */
  render(): JSX.Element {
    return <div>
      <input type='input' value={this.state.inputtedMessage} onChange={this.handleValueChange.bind(this)}/>
      <button onClick={this.handleClick.bind(this)}>Update</button>
      <div>
        preview: <span>{this.state.inputtedMessage}</span>
      </div>
      <div>
        commit: <span>{this.state.completedMessage}</span>
      </div>
    </div>;
  }
}
