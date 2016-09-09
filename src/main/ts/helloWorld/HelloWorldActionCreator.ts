/**
 * @author Junichi Kato
 */
import { HelloWorldAction } from './HelloWorldAction';
import { helloWorldDispatcher } from './HelloWorldDispatcher';

/**
 * The action creator for {@class HelloWorldAction}.
 */
export class HelloWorldActionCreator {

  /**
   *
   * @param name
   */
  static doHelloWorld(name: string): void {
    helloWorldDispatcher.dispatch(new HelloWorldAction(name));
  }

}
