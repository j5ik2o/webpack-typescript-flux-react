import * as Flux from 'flux';
import * as FluxUtils from 'flux/utils';
import { TodoState } from './TodoState';
import { TodoAction, CreateTodo } from './TodoActions';
import { TodoRepository } from '../domain/TodoRepository';
import { Todo } from '../domain/TodoAggregate';
import { Guid } from '../infrastructure/Guid';
import { todoDispatcher } from './TodoDispatcher';

export class TodoStore extends FluxUtils.ReduceStore<TodoState, TodoAction> {
    constructor(dispatcher: Flux.Dispatcher<TodoAction>) {
        super(dispatcher);
    }

    getInitialState(): TodoState {
        return new TodoState("", new TodoRepository());
    }

    reduce(state: TodoState, action: TodoAction): TodoState {
        switch (action.type) {
            case 'CreateTodo':
                console.log(action);
                const repository = new TodoRepository();
                const currentTodo = this.getState().currentTodo;
                repository.storeMulti(this.getState().getRepository().resolveAll());
                repository.store(new Todo(new Guid().toString(), (action as CreateTodo).text, new Date()));
                return new TodoState(currentTodo, repository);
        }
    }
}

export const todoStore = new TodoStore(todoDispatcher);
