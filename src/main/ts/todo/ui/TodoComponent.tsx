import * as React from 'react';
import { TodoState } from '../application/TodoState';
import { TodoRepository } from '../domain/TodoRepository';
import { todoDispatcher } from '../application/TodoDispatcher';
import { CreateTodo } from '../application/TodoActions';
import { todoStore } from '../application/TodoStore';
import { TodoActionCreator } from '../application/TodoActionCreator';

export class TodoComponent extends React.Component<{}, TodoState> {

    private listenerSubscription: { remove: Function };

    constructor(props: {}) {
        super(props);
        this.state = new TodoState("", new TodoRepository());
    }

    componentDidMount() {
        this.listenerSubscription = todoStore.addListener(this.handleStateChange.bind(this));
    }

    componentWillUnmount() {
        this.listenerSubscription.remove();
    }

    handleStateChange() {
        const _state = todoStore.getState();
        const todos = _state.getRepository().resolveAll();
        const repository = new TodoRepository();
        repository.storeMulti(todos);
        const state = new TodoState(_state.currentTodo, repository);
        this.setState(state);
    }

    handleValueChange(event: React.SyntheticEvent){
        const todo = (event.target as HTMLInputElement).value;
        this.setState(new TodoState(todo, this.state.getRepository()));
    }

    handleClick() {
        TodoActionCreator.createTodo(this.state.currentTodo);
    }

    render(): JSX.Element {
        return <div>
            <input type='input' value={this.state.currentTodo} onChange={this.handleValueChange.bind(this)}/>
            <button onClick={this.handleClick.bind(this)}>Update</button>
            <div>
            {this.state.getTodoVMs().map((a) => {
                return <p key={a.key}>{a.text} : {a.dateString}</p>;
            })}
            </div>
        </div>;
    }
}