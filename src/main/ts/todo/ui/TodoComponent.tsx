/**
 * @author Junichi Kato
 */

///<reference path='../../../../../typings/flux/flux.d.ts'/>

import * as React from 'react';
import { TodoState } from '../application/TodoState';
import { TodoRepository } from '../domain/TodoRepository';
import { todoStore } from '../application/TodoStore';
import { TodoActionCreator } from './TodoActionCreator';
import { TodoViewModelConverter } from './TodoViewModelConverter';

/**
 * The React's View Component for Todo.
 */
export class TodoComponent extends React.Component<{}, TodoState> {


  private listenerSubscription: { remove: Function };

  constructor(props: {}) {
    super(props);
    this.state = new TodoState('', new TodoRepository());
  }

  componentDidMount() {
    this.listenerSubscription = todoStore.addListener(this.handleStateChange.bind(this));
  }

  componentWillUnmount() {
    this.listenerSubscription.remove();
  }

  handleStateChange() {
    const storeState = todoStore.getState();
    const repository = new TodoRepository(storeState.getRepository().resolveAll());
    const state = new TodoState(storeState.currentTodo, repository);
    this.setState(state);
  }

  handleValueChange(event: React.SyntheticEvent) {
    const todo = (event.target as HTMLInputElement).value;
    this.setState(new TodoState(todo, this.state.getRepository()));
  }

  handleClick() {
    TodoActionCreator.createTodo(this.state.currentTodo);
  }

  render(): JSX.Element {
    const todos = new TodoViewModelConverter(this.state.getRepository()).getTodoVMs();
    return <div>
      <input type='input' value={this.state.currentTodo} onChange={this.handleValueChange.bind(this)}/>
      <button onClick={this.handleClick.bind(this)}>Update</button>
      <div>
        {todos.map((a) => {
          return <p key={a.key}>{a.text} : {a.dateString}</p>;
        })}
      </div>
    </div>;
  }
}
