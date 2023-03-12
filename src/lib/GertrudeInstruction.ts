<<<<<<< Updated upstream
export enum GertrudeInstruction {
	DefFun = '6/3',
	CallFun = '2/7',
	BeginCodeBlock = '3/6',
	EndCodeBlock = '4/12',
	DefineVar = '16/15',
	Assignment = '18/16',
	PlusEqual = '10/20',
	Plus = '14/10',
	MinusEqual = '4/14',
	Minus = '11/7',
	TimesEqual = '23/14',
	Times = '6/16',
	DivideEqual = '8/12',
	Divide = '5/8',
	ModuloEqual = '14/8',
	Modulo = '24/17',
	OrEqual = '23/10',
	Or = '22/23',
	AndEqual = '19/22',
	And = '18/14',
	NandEqual = '10/18',
	Nand = '15/15',
	BitOrEqual = '14/12',
	BitOr = '15/26',
	BitAndEqual = '6/11',
	BitAnd = '17/11',
	Inf = '15/19',
	EqEq = '18/15',
	Sup = '13/13',
	InfEq = '13/15',
	NotEq = '15/14',
	SupEq = '10/15',
	DefineLiteral = '3/1',
	PrintIntAsChar = '7/14',
	PrintString = '7/15',
	Not = '23/20',
	IfThen = '6/10',
	WhileDo = '20/18',
	UntilDo = '14/20',
	IfThenElse = '12/12',
	IfThenUnless = '10/19',
	IfThenProvided = '1/6',
	WhileDoUnless = '25/15'
}
=======
type NumericString = `${number}`

type Ratio = `${NumericString}/${NumericString}`

export const GertrudeInstructions = {
    '6/3': "DefFun",
    '2/7': "CallFun",
    '3/6': "BeginCodeBlock",
    '4/12': "EndCodeBlock",
    '16/15': "DefineVar",
    '18/16': "Assignment",
    '10/20': "PlusEqual",
    '14/10': "Plus",
    '4/14': "MinusEqual",
    '11/7': "Minus",
    '23/14': "TimesEqual",
    '6/16': "Times",
    '8/12': "DivideEqual",
    '5/8': "Divide",
    '14/8': "ModuloEqual",
    '24/17': "Modulo",
    '23/10': "OrEqual",
    '22/23': "Or",
    '19/22': "AndEqual",
    '18/14': "And",
    '10/18': "NandEqual",
    '15/15': "Nand",
    '14/12': "BitOrEqual",
    '15/26': "BitOr",
    '6/11': "BitAndEqual",
    '17/11': "BitAnd",
    '15/19': "Inf",
    '18/15': "EqEq",
    '13/13': "Sup",
    '13/15': "InfEq",
    '15/14': "NotEq",
    '10/15': "SupEq",
    '3/1': "DefineLiteral",
    '7/14': "PrintIntAsChar",
    '7/15': "PrintString",
    '23/20': "Not",
    '6/10': "IfThen",
    '20/18': "WhileDo",
    '14/20': "UntilDo",
    '12/12': "IfThenElse",
    '10/19': "IfThenUnless",
    '1/6': "IfThenProvided",
    '25/15': "WhileDoUnless"
} as const

export type GertrudeRatio = Array<keyof typeof GertrudeInstructions>[number]
export type GertrudeInstruction = typeof GertrudeInstructions[GertrudeRatio]

export const isValidRatio = (ratio: string): ratio is GertrudeRatio => {
    return GertrudeInstructions.hasOwnProperty(ratio)
}

export type VarName = `1/${NumericString}`

export const isVarName = (name: Ratio): name is VarName => {
    return name.split('/')[0] === '1'
}
>>>>>>> Stashed changes
