export enum tokenType
{
	PUNCTUATION,
	OPERATOR,
	KEYWORD,
	IDENTIFIER,
	LITERAL,
	COMMAND_CHARACTER,
	WHITESPACE,
	COMMENT
}

export abstract class BaseToken
{
	protected _type: tokenType;

	public constructor (type: tokenType)
	{
		this._type = type;
	}

	public get type() : tokenType
	{
		return this._type;
	}

	public abstract get value();
	public abstract set value(val);
}

export class PunctuationToken extends BaseToken
{
	private _punctuation: string;

	public constructor (val: string)
	{
		super (tokenType.PUNCTUATION);
		this._punctuation = val;
	}

	public get value () : string 	{	return this._punctuation;	}
	public set value (val: string) 	{	this._punctuation = val;	}
}

export class OperatorToken extends BaseToken
{
	private _operator: string;

	public constructor (val: string)
	{
		super (tokenType.OPERATOR);
		this._operator = val;
	}

	public get value () : string	{	return this._operator;	}
	public set value (val: string)	{	this._operator = val;	}
}

export class KeywordToken extends BaseToken
{
	private _keyword: string;

	public constructor (val: string)
	{
		super (tokenType.KEYWORD);
		this._keyword = val;
	}

	public get value() : string		{	return this._keyword;	}
	public set value (val: string)	{	this._keyword = val;	}
}

export class IdentifierToken extends BaseToken
{
	private _identifier: string;

	public constructor (val: string)
	{
		super (tokenType.IDENTIFIER);
		this._identifier = val;
	}

	public get value() : string		{	return this._identifier;	}
	public set value (val: string)	{	this._identifier = val;		}
}

export class LiteralToken extends BaseToken
{
	private _literal: string;

	public constructor (val: string)
	{
		super (tokenType.LITERAL);
		this._literal = val;
	}

	public get value() : string		{	return this._literal;	}
	public set value (val: string)	{	this._literal = val;	}
}

export class CmdCharacterToken extends BaseToken
{
	private _character: string;

	public constructor (val: string)
	{
		super (tokenType.COMMAND_CHARACTER);
		this._character = val;
	}

	public get value() : string		{	return this._character;	}
	public set value (val: string)	{	this._character = val;	}
}

export class WhitespaceToken extends BaseToken
{
	private _whitespace: string;

	public constructor (val: string)
	{
		super (tokenType.WHITESPACE);
		this._whitespace = val;
	}

	public get value() : string		{	return this._whitespace;	}
	public set value (val: string)	{	this._whitespace = val;		}
}

export class CommentToken extends BaseToken
{
	private _comment: string;

	public constructor (val: string)
	{
		super (tokenType.COMMENT);
		this._comment = val;
	}

	public get value() : string		{	return this._comment;	}
	public set value (val: string)	{	this._comment = val;	}
}