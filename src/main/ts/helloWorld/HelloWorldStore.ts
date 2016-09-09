/**
 * @author Junichi Kato
 */
import * as Flux from 'flux';
import * as FluxUtils from 'flux/utils';
import { HelloWorldState } from './HelloWorldState';
import { HelloWorldAction } from './HelloWorldAction';
import { helloWorldDispatcher } from './HelloWorldDispatcher';

/**
 * The ReduceStore for {@class HelloWorldState} and {@class HelloWorldAction}.
 */
export class HelloWorldStore extends FluxUtils.ReduceStore<HelloWorldState, HelloWorldAction> {
  constructor(dispatcher: Flux.Dispatcher<HelloWorldAction>) {
    super(dispatcher);
  }

  /**
   * @override method.
   *
   * @see {FluxUtils.ReduceStore#getInitialState}
   *
   * @returns {TodoState}
   */
  getInitialState(): HelloWorldState {
    return new HelloWorldState("", "");
  }

  /**
   * @override method.
   *
   * @see {FluxUtils.ReduceStore#reduce}
   *
   * @param state
   * @param action
   * @returns {TodoState}
   */
  reduce(state: HelloWorldState, action: HelloWorldAction): HelloWorldState {
    switch (action.type) {
      case 'HelloWorld':
        console.log(action);
        return new HelloWorldState(state.inputtedMessage, action.message);
    }
  }
}

export const helloWorldStore = new HelloWorldStore(helloWorldDispatcher);
