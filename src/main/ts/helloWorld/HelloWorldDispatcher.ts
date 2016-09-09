/**
 * @author Junichi Kato
 */
import * as Flux from 'flux';
import { HelloWorldAction } from './HelloWorldAction';

/**
 * The dispatcher for {@class HelloWorldAction}.
 *
 * @type {Flux.Dispatcher<HelloWorldAction>}
 */
export const helloWorldDispatcher = new Flux.Dispatcher<HelloWorldAction>();
