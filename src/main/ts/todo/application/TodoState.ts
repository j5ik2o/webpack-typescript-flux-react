import { TodoRepository } from '../domain/TodoRepository';
import * as _ from 'lodash';
import { TodoVM } from './TodoVM';

export class TodoState {

    constructor(public currentTodo: string, private _repository: TodoRepository) {
    }

    getRepository = (): TodoRepository => {
        return _.cloneDeep(this._repository);
    };

    getTodoVMs = (): TodoVM[] => {
        return this.getRepository().resolveAll().map((a) => {
            return new TodoVM(a.id, a.text, a.createAt.toLocaleDateString() + " " + a.createAt.toLocaleTimeString());
        });
    };

}