import * as Flux from 'flux';
import { TodoAction } from './TodoActions';

/**
 * The dispatcher for Todo.
 *
 * @type {Flux.Dispatcher<TodoAction>}
 */
export const todoDispatcher = new Flux.Dispatcher<TodoAction>();