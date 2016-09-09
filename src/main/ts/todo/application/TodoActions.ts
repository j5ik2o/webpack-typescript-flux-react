import { Action } from '../../Action';

/**
 * The super type for each action.
 */
export interface TodoAction extends Action {
}

/**
 * The action for creating todo.
 */
export class CreateTodo implements TodoAction {

    type: string = "CreateTodo";

    constructor(public text: string){
    }

}