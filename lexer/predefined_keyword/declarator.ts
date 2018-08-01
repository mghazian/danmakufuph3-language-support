import {IPattern} from '../interface/IPattern';

export let Declarator: IPattern[] = [
{
	name: "variable",
	pattern: "\\b(let)\\b"
},
{
	name: "function",
	pattern: "\\b(function|task)\\b"
}];