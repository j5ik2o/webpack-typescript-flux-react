/**
 * @author Junichi Kato
 */
import { TodoViewModel } from './TodoViewModel';
import { TodoRepository } from '../domain/TodoRepository';

/**
 * The converter to convert from TodoAggregate to TodoViewModel.
 */
export class TodoViewModelConverter {

  constructor(private _repository: TodoRepository) {
  }

  getTodoVMs = (): TodoViewModel[] => {
    return this._repository.resolveAll().map((a) => {
      return new TodoViewModel(a.id, a.text, a.createAt.toLocaleDateString() + " " + a.createAt.toLocaleTimeString());
    });
  };

}
