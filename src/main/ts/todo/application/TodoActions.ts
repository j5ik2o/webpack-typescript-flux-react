import { Action } from '../../Action';

export interface TodoAction extends Action {
}

export class CreateTodo implements TodoAction {

    type: string = "CreateTodo";

    constructor(public text: string){
    }

}