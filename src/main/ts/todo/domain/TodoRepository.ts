/**
 * @author Junichi Kato
 */
import { Todo } from './TodoAggregate';

/**
 * The repository of DDD for `TodoAggregate`.
 */
export class TodoRepository {

    private _todos: {[id: string]: Todo} = {}

    constructor() {
    }

    /**
     * the method for storing an aggregate.
     *
     * @param aggregate
     */
    store(aggregate: Todo): void {
        this._todos[aggregate.id] = aggregate;
    }

    /**
     * the method for storing aggregates.
     *
     * @param aggreates
     */
    storeMulti(aggreates: Todo[]): void {
        aggreates.forEach((a) => this.store(a));
    }

    /**
     * the method for resolving an aggregate.
     *
     * @param id
     * @returns {Todo}
     */
    resoleBy(id: string): Todo {
        return this._todos[id];
    }

    /**
     * the method for resolving aggregates.
     *
     * @returns {Todo[]}
     */
    resolveAll(): Todo[] {
        const result = Object.keys(this._todos).map((id) => this._todos[id]);
        console.log(result);
        return result;
    }

}