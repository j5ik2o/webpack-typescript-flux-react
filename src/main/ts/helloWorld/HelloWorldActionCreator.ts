import { HelloWorldAction } from './HelloWorldAction';
import { helloWorldDispatcher } from './HelloWorldDispatcher';

export class HelloWorldActionCreator {
    static doHelloWorld(name: string): void {
        helloWorldDispatcher.dispatch(new HelloWorldAction(name));
    }
}