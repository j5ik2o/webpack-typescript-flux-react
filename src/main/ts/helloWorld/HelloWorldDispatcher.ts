import * as Flux from 'flux';
import { Action } from '../Action';

export const helloWorldDispatcher = new Flux.Dispatcher<Action>();
