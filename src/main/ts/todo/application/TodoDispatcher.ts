/**
 * @author Junichi Kato
 */
import * as Flux from 'flux';
import { TodoAction } from '../application/TodoAction';

/**
 * The dispatcher for {@class TodoAction}.
 *
 * @type {Flux.Dispatcher<TodoAction>}
 */
export const todoDispatcher = new Flux.Dispatcher<TodoAction>();
