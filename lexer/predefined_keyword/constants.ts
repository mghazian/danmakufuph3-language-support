import {IPattern} from '../interface/IPattern';

export let Constant: IPattern[] = [
{
	name: "stage-type",
	pattern: "\\b(Single|Plural|Stage|Package)\\b"
},
{
	name: "header",
	pattern: "\\b(TouhouDanmakufu|ScriptVersion|ID|Title|Text|Image|System|Background|BGM|Player|ReplayName|include)\\b"
},
{
	name: "routine",
	pattern: "\\b(Initialize|MainLoop|Event|Finalize|Loading)\\b"
}];