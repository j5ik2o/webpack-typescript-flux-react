import { Todo } from './Todo';

export class TodoRepository {

    private _todos: {[id: string]: Todo} = {}

    constructor() {
    }

    store(aggregate: Todo): void {
        this._todos[aggregate.id] = aggregate;
    }

    storeMulti(aggreates: Todo[]): void {
        aggreates.forEach((a) => this.store(a));
    }

    resoleBy(id: string): Todo {
        return this._todos[id];
    }

    resolveAll(): Todo[] {
        const result = Object.keys(this._todos).map((id) => this._todos[id]);
        console.log(result);
        return result;
    }
    
}