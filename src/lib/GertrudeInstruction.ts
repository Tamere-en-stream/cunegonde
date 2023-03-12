type NumericString = `${number}`;

export type Ratio = `${NumericString}/${NumericString}`;

export enum GertrudeInstruction {
	DefFun,
	CallFun,
	BeginCodeBlock,
	EndCodeBlock,
	DefVar,
	Assignment,
	PlusEqual,
	Plus,
	MinusEqual,
	Minus,
	TimesEqual,
	Times,
	DivideEqual,
	Divide,
	ModuloEqual,
	Modulo,
	OrEqual,
	Or,
	AndEqual,
	And,
	NandEqual,
	Nand,
	BitOrEqual,
	BitOr,
	BitAndEqual,
	BitAnd,
	Inf,
	EqEq,
	Sup,
	InfEq,
	NotEq,
	SupEq,
	DefineLiteral,
	PrintIntAsChar,
	PrintString,
	Not,
	IfThen,
	WhileDo,
	UntilDo,
	IfThenElse,
	IfThenUnless,
	IfThenProvided,
	WhileDoUnless
}

export const GertrudeInstructions = {
	'6/3': GertrudeInstruction.DefFun,
	'2/7': GertrudeInstruction.CallFun,
	'3/6': GertrudeInstruction.BeginCodeBlock,
	'4/12': GertrudeInstruction.EndCodeBlock,
	'16/15': GertrudeInstruction.DefVar,
	'18/16': GertrudeInstruction.Assignment,
	'10/20': GertrudeInstruction.PlusEqual,
	'14/10': GertrudeInstruction.Plus,
	'4/14': GertrudeInstruction.MinusEqual,
	'11/7': GertrudeInstruction.Minus,
	'23/14': GertrudeInstruction.TimesEqual,
	'6/16': GertrudeInstruction.Times,
	'8/12': GertrudeInstruction.DivideEqual,
	'5/8': GertrudeInstruction.Divide,
	'14/8': GertrudeInstruction.ModuloEqual,
	'24/17': GertrudeInstruction.Modulo,
	'23/10': GertrudeInstruction.OrEqual,
	'22/23': GertrudeInstruction.Or,
	'19/22': GertrudeInstruction.AndEqual,
	'18/14': GertrudeInstruction.And,
	'10/18': GertrudeInstruction.NandEqual,
	'15/15': GertrudeInstruction.Nand,
	'14/12': GertrudeInstruction.BitOrEqual,
	'15/26': GertrudeInstruction.BitOr,
	'6/11': GertrudeInstruction.BitAndEqual,
	'17/11': GertrudeInstruction.BitAnd,
	'15/19': GertrudeInstruction.Inf,
	'18/15': GertrudeInstruction.EqEq,
	'13/13': GertrudeInstruction.Sup,
	'13/15': GertrudeInstruction.InfEq,
	'15/14': GertrudeInstruction.NotEq,
	'10/15': GertrudeInstruction.SupEq,
	'3/1': GertrudeInstruction.DefineLiteral,
	'7/14': GertrudeInstruction.PrintIntAsChar,
	'7/15': GertrudeInstruction.PrintString,
	'23/20': GertrudeInstruction.Not,
	'6/10': GertrudeInstruction.IfThen,
	'20/18': GertrudeInstruction.WhileDo,
	'14/20': GertrudeInstruction.UntilDo,
	'12/12': GertrudeInstruction.IfThenElse,
	'10/19': GertrudeInstruction.IfThenUnless,
	'1/6': GertrudeInstruction.IfThenProvided,
	'25/15': GertrudeInstruction.WhileDoUnless
} as const;

export type GertrudeRatio = Array<keyof typeof GertrudeInstructions>[number];
//export type GertrudeInstruction = (typeof GertrudeInstructions)[GertrudeRatio];

export const isValidRatio = (ratio: string): ratio is GertrudeRatio => {
	return GertrudeInstructions.hasOwnProperty(ratio);
};

export type VarName = `1/${NumericString}`;

export const isVarName = (name: Ratio): name is VarName => {
	return name.split('/')[0] === '1';
};
