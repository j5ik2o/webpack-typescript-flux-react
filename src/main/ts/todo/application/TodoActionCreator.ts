/**
 * @author Junichi Kato
 */
import { todoDispatcher } from './TodoDispatcher';
import { CreateTodo } from './TodoActions';

/**
 * The action creator for {@class TodoAction}.
 */
export class TodoActionCreator {

  /**
   * The method for sending the action that create todo to {@class HelloWorldStore}.
   *
   * @param text text that represent todo.
   */
  static createTodo(text: string): void {
    todoDispatcher.dispatch(new CreateTodo(text));
  }

}
