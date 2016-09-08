import { todoDispatcher } from './TodoDispatcher';
import { CreateTodo } from './TodoActions';

export class TodoActionCreator {
    static createTodo(text: string): void {
        todoDispatcher.dispatch(new CreateTodo(text));
    }
}
