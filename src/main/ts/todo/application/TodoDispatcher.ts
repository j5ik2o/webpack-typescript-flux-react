import * as Flux from 'flux';
import { TodoAction } from './TodoActions';

export const todoDispatcher = new Flux.Dispatcher<TodoAction>();