import { TodoRepository } from '../domain/TodoRepository';
import * as _ from 'lodash';

export class TodoState {

    constructor(public currentTodo: string, private _repository: TodoRepository) {
    }

    getRepository = (): TodoRepository => {
        return _.cloneDeep(this._repository);
    };

}