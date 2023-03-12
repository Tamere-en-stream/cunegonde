/*
6/3
Define a new function
2/7
Call a function
3/6
Begin a new code block
4/12
End of a code block
16/15
Define a Variable
18/16
Assignment Statement
10/20
+=
14/10
+
4/14
-=
11/7
-
23/14
*=
6/16
*
8/12
/=
5/8
/
14/8
%=
24/17
%
23/10
Or=
22/23
Or
19/22
And=
18/14
And
10/18
Nand=
15/15
Nand
14/12
BitOr=
15/26
BitOr
6/11
BitAnd=
17/11
BitAnd
15/19
<
18/15
==
13/13
>
13/15
<=
15/14
!=
10/15
>=
3/1
Define a literal
7/14
Print an integer value as a character
7/15
Print a string
23/20
not
6/10
if-then
20/18
while-do
14/20
until-do
12/12
if-then-else
10/19
if-then-unless
1/6
if-then-provided
25/15
while-do-unless
*/

export enum GertrudeInstructions {
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
