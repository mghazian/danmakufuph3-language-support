import * as token from './token';
import * as functions from './predefined_keyword/functions';
import * as constants from './predefined_keyword/constants';
import * as declarator from './predefined_keyword/declarator';
import * as flow from './predefined_keyword/flow';
import {IPattern} from './interface/IPattern';

class KeywordPattern
{
	private static kw: KeywordPattern;
	private _pattern: IPattern [];
	
	public constructor ()
	{
		this._pattern = [];
		this._pattern = this._pattern.concat (this._pattern, functions.Function);
		this._pattern = this._pattern.concat (this._pattern, constants.Constant);
		this._pattern = this._pattern.concat (this._pattern, flow.Flow);
		this._pattern = this._pattern.concat (this._pattern, declarator.Declarator);
	}

	public static get pattern () : IPattern[]
	{
		if (this.kw == null || this.kw == undefined)
			this.kw = new KeywordPattern();
		
		return this.kw._pattern;
	}
}

type MutableString = { value: string }

class BaseTokenTester
{
	protected static getFirstMatchLength (stream: string, pattern: RegExp) : number
	{
		let matches = stream.match (pattern);
		return (matches !== null && matches.length > 0) ? matches[0].length : -1;
	}

	protected static isMatch (stream: string) {}
	protected static extract (stream: MutableString) {}
}

class PunctuationTester extends BaseTokenTester
{
	private static pattern: RegExp = /^[;,()\[\]{}]/;

	public static isMatch (stream: string) : boolean
	{
		return this.pattern.test (stream);
	}

	public static extract (stream: MutableString) : token.PunctuationToken
	{
		if ( ! this.isMatch (stream.value) )
			return null;
		
		let endIndex = this.getFirstMatchLength (stream.value, this.pattern);
		let outputString = stream.value.substring (0, endIndex);

		stream.value = stream.value.substring (endIndex);

		return new token.PunctuationToken (outputString);
	}	
}

class OperatorTester extends BaseTokenTester
{
	private static pattern: RegExp = /^(\+{1,2}|-{1,2}|\/|\*|={1,2}|!=|~|&{1,2}|\|{1,2}|>|<|>=|<=|\.\.)/;

	public static isMatch (stream: string) : boolean
	{
		return this.pattern.test (stream);
	}

	public static extract (stream: MutableString) : token.OperatorToken
	{
		if ( ! this.isMatch (stream.value) )
			return null;
		
		let endIndex = this.getFirstMatchLength (stream.value, this.pattern);
		let outputString = stream.value.substring (0, endIndex);

		stream.value = stream.value.substring (endIndex);

		return new token.OperatorToken (outputString);
	}
}

class KeywordTester extends BaseTokenTester
{
	private static matchingIndex: number;
	private static patternIndex: number;

	private static try (stream: string, a: IPattern ) : boolean
	{
		let pat: RegExp = new RegExp ("^" + a.pattern);
		return pat.test (stream);
	}

	public static isMatch (stream: string) : boolean
	{
		for (let i = 0; i < KeywordPattern.pattern.length; i++)
		{
			let index = stream.search (new RegExp ("^" + KeywordPattern.pattern[i].pattern));
			if (index != -1)
			{
				this.matchingIndex = index;
				this.patternIndex = i;
				return true;
			}
		}

		return false;
	}

	public static extract (stream: MutableString) : token.KeywordToken
	{
		if ( ! KeywordTester.isMatch (stream.value) )
			return null;
		
		let regex = new RegExp ("^" + KeywordPattern.pattern[this.patternIndex].pattern);
		let endIndex = this.getFirstMatchLength (stream.value, regex);
		let outputString = stream.value.substring (0, endIndex);

		stream.value = stream.value.substring (endIndex);

		return new token.KeywordToken (outputString);
	}
}

class IdentifierTester extends BaseTokenTester
{
	private static pattern: RegExp = /^[a-zA-Z0-9_]+/;
	
	public static isMatch (stream: string) : boolean
	{
		return this.pattern.test (stream);
	}

	public static extract (stream: MutableString) : token.IdentifierToken
	{
		if ( ! this.isMatch (stream.value) )
			return null;
		
		let endIndex = this.getFirstMatchLength (stream.value, this.pattern);
		let outputString = stream.value.substring (0, endIndex);

		stream.value = stream.value.substring (endIndex);

		return new token.IdentifierToken (outputString);
	}
}

class LiteralTester extends BaseTokenTester
{
	private static pattern: RegExp = /^([0-9]+(\.[0-9]+)?|'.+'|".*"|true|false)/;

	public static isMatch (stream: string) : boolean
	{
		return this.pattern.test (stream);
	}

	public static extract (stream: MutableString) : token.LiteralToken
	{
		if ( ! this.isMatch )
			return null;
		
		let endIndex = this.getFirstMatchLength (stream.value, this.pattern);
		let outputString = stream.value.substring (0, endIndex);

		stream.value = stream.value.substring (endIndex);

		return new token.LiteralToken (outputString);
	}
}

class CmdCharacterTester extends BaseTokenTester
{
	private static pattern: RegExp = /^(\0|\r?\n|#|@)/;

	public static isMatch (stream: string) : boolean
	{
		return this.pattern.test (stream);
	}

	public static extract (stream: MutableString) : token.CmdCharacterToken
	{
		if ( ! this.isMatch (stream.value) )
			return null;
		
		let endIndex = this.getFirstMatchLength (stream.value, this.pattern);
		let outputString = stream.value.substring (0, endIndex);

		stream.value = stream.value.substring (endIndex);

		return new token.CmdCharacterToken (outputString);
	}
}

class WhitespaceTester extends BaseTokenTester
{
	private static pattern: RegExp = /^[ \t]+/;

	public static isMatch (stream: string) : boolean
	{
		return this.pattern.test (stream);
	}

	public static extract (stream: MutableString) : token.WhitespaceToken
	{
		if ( ! this.isMatch (stream.value) )
			return null;

		let endIndex = this.getFirstMatchLength (stream.value, this.pattern);
		let outputString = stream.value.substring (0, endIndex);

		stream.value = stream.value.substring (endIndex);

		return new token.WhitespaceToken (outputString);
	}
}

class CommentTester extends BaseTokenTester
{
	private static readonly NONE: Number = -1;
	private static readonly ONELINE: Number = 0;
	private static readonly MULTILINE: Number = 1;

	private static matchedPattern: Number = -1;
	private static oneLinePattern: RegExp = new RegExp (/^(\/\/.*\n?)/);
	private static multiLinePattern: RegExp = new RegExp (/^(\/\*.*\*\\)/, 'm');

	private static isOneLiner (stream: string) : boolean
	{
		if ( this.oneLinePattern.test (stream) )
		{
			this.matchedPattern = this.ONELINE;
			return true;
		}

		return false;
	}

	private static isMultiLiner (stream: string) : boolean
	{
		if ( this.multiLinePattern.test (stream) )
		{
			this.matchedPattern = this.MULTILINE;
			return true;
		}

		return false;
	}

	private static get properPattern () : RegExp
	{
		if ( this.matchedPattern == this.ONELINE ) return this.oneLinePattern;
		if ( this.matchedPattern == this.MULTILINE ) return this.multiLinePattern;
		return null;
	}

	public static isMatch (stream: string) : boolean
	{
		this.matchedPattern = this.NONE;

		if ( this.isOneLiner (stream) ) return true;
		if ( this.isMultiLiner (stream) ) return true;
		
		return false;
	}

	public static extract (stream: MutableString) : token.CommentToken
	{
		if ( ! this.isMatch (stream.value) )
			return null;
		
		let endIndex = this.getFirstMatchLength (stream.value, this.properPattern);
		let outputString = stream.value.substring (0, endIndex);

		stream.value = stream.value.substring (endIndex);

		return new token.CommentToken (outputString);
	}
}

export class TokenBuilder
{
	private tokenList: token.BaseToken[];

	public constructor ()
	{
		this.tokenList = [];
	}

	public get tokenSequence() : token.BaseToken[]
	{
		return this.tokenList;
	}

	private extractToken (stream: MutableString) : token.BaseToken
	{
		if ( CommentTester.isMatch (stream.value) ) return CommentTester.extract (stream);
		if ( WhitespaceTester.isMatch (stream.value) ) return WhitespaceTester.extract (stream);
		if ( CmdCharacterTester.isMatch (stream.value) ) return CmdCharacterTester.extract (stream);
		if ( PunctuationTester.isMatch (stream.value) ) return PunctuationTester.extract (stream);
		if ( OperatorTester.isMatch (stream.value) ) return OperatorTester.extract (stream);
		if ( LiteralTester.isMatch (stream.value) ) return LiteralTester.extract (stream);
		if ( KeywordTester.isMatch (stream.value) ) return KeywordTester.extract (stream);
		if ( IdentifierTester.isMatch (stream.value) ) return IdentifierTester.extract (stream);
		return null;
	}

	public renewTokenSequence() : void
	{
		this.tokenList = [];
	}

	public readStream (stream: string) : number
	{
		let mutableStream: MutableString = {value: stream};

		while ( mutableStream.value.length > 0 )
		{
			let tok = this.extractToken (mutableStream);
			if ( tok == null )
				break;
			
			//if ( ! (tok instanceof token.WhitespaceToken) )
				this.tokenList.push (tok);
		}

		return this.tokenList.length;
	}
}