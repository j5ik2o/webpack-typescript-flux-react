import * as FluxUtils from 'flux/utils';
import { HelloWorldState } from './HelloWorldState';
import { HelloWorldAction } from './HelloWorldAction';
import { helloWorldDispatcher } from './HelloWorldDispatcher';

export class HelloWorldStore extends FluxUtils.ReduceStore<HelloWorldState, HelloWorldAction>  {
    constructor(dispatcher: Flux.Dispatcher<HelloWorldAction>) {
        super(dispatcher);
    }

    getInitialState(): HelloWorldState {
        return new HelloWorldState("", "");
    }

    reduce(state: HelloWorldState, action: HelloWorldAction): HelloWorldState {
        switch(action.type) {
            case 'HelloWorld':
                console.log(action);
                return new HelloWorldState(state.message, action.message);
        }
    }
}

export const helloWorldStore = new HelloWorldStore(helloWorldDispatcher);
