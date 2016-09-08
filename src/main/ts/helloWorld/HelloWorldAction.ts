import { Action } from '../Action';

export class HelloWorldAction implements Action {
    type: string = "HelloWorld";
    constructor(public message: string){
    }
}