/**
 * @author Junichi Kato
 */
///<reference path='../../../../../typings/flux/flux.d.ts'/>
import * as Flux from 'flux';
import * as FluxUtils from 'flux/utils';
import { TodoState } from './TodoState';
import { TodoAction } from '../application/TodoAction';
import { TodoRepository } from '../domain/TodoRepository';
import { TodoAggregate } from '../domain/TodoAggregate';
import { Guid } from '../infrastructure/Guid';
import { todoDispatcher } from './TodoDispatcher';
import { CreateTodo } from '../ui/TodoActions';

/**
 * The ReducerStore for the {@class TodoState} and {@class TodoAction}.
 */
export class TodoStore extends FluxUtils.ReduceStore<TodoState, TodoAction> {
  constructor(dispatcher: Flux.Dispatcher<TodoAction>) {
    super(dispatcher);
  }

  /**
   * @override method.
   *
   * @see {FluxUtils.ReduceStore#getInitialState}
   *
   * @returns {TodoState}
   */
  getInitialState(): TodoState {
    return new TodoState('', new TodoRepository());
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
  reduce(state: TodoState, action: TodoAction): TodoState {
    switch (action.type) {
      case 'CreateTodo':
        return this.createTodo(state, action as CreateTodo);
      default:
        throw Error('no match error');
    }
  }

  /**
   * The method for creating todo.
   *
   * @param state {TodoState}
   * @param action {CreateTodo}
   * @returns {TodoState}
   */
  private createTodo(state: TodoState, action: CreateTodo): TodoState {
    console.log(action);
    const currentTodo = state.currentTodo;
    const repository = new TodoRepository(state.getRepository().resolveAll());
    const aggregate = new TodoAggregate(new Guid().toString(), action.text, new Date());
    repository.store(aggregate);
    return new TodoState(currentTodo, repository);
  }

}

export const todoStore = new TodoStore(todoDispatcher);
