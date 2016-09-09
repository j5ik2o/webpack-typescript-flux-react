/**
 * @author Junichi Kato
 */
import { Action } from '../../Action';

/**
 * The super type for each action.
 */
export interface TodoAction extends Action {
}

/**
 * The action for creating {@class TodoAggregate}.
 */
export class CreateTodo implements TodoAction {

  type: string = "CreateTodo";

  /**
   * @constructor
   *
   * @param text a text that represent todo.
   */
  constructor(public text: string) {
  }

}
