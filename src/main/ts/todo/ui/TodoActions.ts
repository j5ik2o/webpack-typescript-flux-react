/**
 * @author Junichi Kato
 */

import { TodoAction } from '../application/TodoAction';
/**
 * The action for creating {@class TodoAggregate}.
 */
export class CreateTodo implements TodoAction {

  type: string = 'CreateTodo';

  /**
   * @constructor
   *
   * @param text a text that represent todo.
   */
  constructor(public text: string) {
  }

}
