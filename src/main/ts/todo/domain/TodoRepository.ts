/**
 * @author Junichi Kato
 */
import { TodoAggregate } from './TodoAggregate';

/**
 * The repository of DDD for {@class TodoAggregate}.
 */
export class TodoRepository {

  private _todos: {[id: string]: TodoAggregate} = {};

  constructor(aggreates: TodoAggregate[] = []) {
    this.storeMulti(aggreates);
  }

  /**
   * the method for storing an aggregate.
   *
   * @param aggregate
   */
  store(aggregate: TodoAggregate): void {
    this._todos[aggregate.id] = aggregate;
  }

  /**
   * the method for storing aggregates.
   *
   * @param aggreates
   */
  storeMulti(aggreates: TodoAggregate[]): void {
    aggreates.forEach((a) => this.store(a));
  }

  /**
   * the method for resolving an aggregate.
   *
   * @param id
   * @returns {TodoAggregate}
   */
  resoleBy(id: string): TodoAggregate {
    return this._todos[id];
  }

  /**
   * the method for resolving aggregates.
   *
   * @returns {TodoAggregate[]}
   */
  resolveAll(): TodoAggregate[] {
    const result = Object.keys(this._todos).map((id) => this._todos[id]);
    console.log(result);
    return result;
  }

}
