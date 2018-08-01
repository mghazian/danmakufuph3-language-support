import {IPattern} from '../interface/IPattern';

export let Flow = [
{
	name: "case",
	pattern: "\\b(alternative|case|others)\\b"
},
{
	name: "conditional",
	pattern: "\\b(if|else)\\b"
},
{
	name: "loop.bounded",
	pattern: "\\b(ascent|descent|in)\\b"
},
{
	name: "loop",
	pattern: "\\b(while|loop)\\b"
},
{
	name: "other",
	pattern: "\\b(return|sub|times|continue|break|yield)\\b"
}];