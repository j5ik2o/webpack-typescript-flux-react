import { todoDispatcher } from './TodoDispatcher';
import { CreateTodo } from './TodoActions';

/**
 * The action creator for Todo.
 */
export class TodoActionCreator {

    /**
     * Create todo action.
     *
     * @param text text that represent todo.
     */
    static createTodo(text: string): void {
        todoDispatcher.dispatch(new CreateTodo(text));
    }

}
