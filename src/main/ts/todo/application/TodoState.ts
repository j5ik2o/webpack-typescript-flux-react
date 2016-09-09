/**
 * @author Junichi Kato
 */
///<reference path='../../../../../typings/lodash/lodash.d.ts'/>
import { TodoRepository } from '../domain/TodoRepository';
import * as _ from 'lodash';

/**
 * The state for {@class TodoComponent}.
 */
export class TodoState {

  /**
   * @constructor
   *
   * @param currentTodo current todo value in the input field.
   * @param _repository {@class TodoRepository}
   */
  constructor(public currentTodo: string, private _repository: TodoRepository) {
  }

  /**
   * The method to get {@class TodoRepository}.
   *
   * @returns {TodoRepository}
   */
  getRepository = (): TodoRepository => {
    return _.cloneDeep(this._repository);
  };

}
