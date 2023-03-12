import {
	type GertrudeRatio,
	GertrudeInstructions,
	GertrudeInstruction,
	isVarName,
	type VarName,
	isValidRatio,
	type Ratio
} from './GertrudeInstruction';

let code = '';
let instructionIndex = 0;
let read: () => GertrudeRatio | VarName;

const Reader = (programme: any): (() => GertrudeRatio | VarName) => {
	const read = (): GertrudeRatio | VarName => {
		instructionIndex += 1;
		return programme[instructionIndex];
	};

	return read;
};

const write = (tsCode: string) => {
	code += tsCode;
};

const getRegister = () => {
	const ratio = read();
	if (!isVarName(ratio)) {
		throw 'non';
	}
	return ratio.split('/')[1];
};

const readRegister = () => {
	const register = getRegister();
	write(`${register}`);
};

const readFunArguments = () => {
	const ratio = read();

	if (!isValidRatio(ratio)) {
		throw 'non';
	}
	const registers = [];
	while (GertrudeInstructions[ratio] === GertrudeInstruction.DefVar) {
		write('var_');
		registers.push(getRegister());
	}
	write(registers.map((register) => `var_${register}`).join(', '));
};

const readInstruction = () => {};

const readFunBlock = () => {
	readInstruction();
};

const readDefFun = () => {
	write('const func_');
	readRegister();
	write(' = (');
	readFunArguments();
	write(') => {\n');
	write('let var_0;\n');
	readFunBlock();
	write('return var_0;\n');
	write('}\n');
};

const readFunParams = () => {
	const ratio = read();

	if (!isValidRatio(ratio)) {
		throw 'non';
	}
	while (GertrudeInstructions[ratio] === GertrudeInstruction.DefVar) {
		readDefVar();
	}
};

const readCallFun = () => {
	write('func_');
	readRegister();
	write('(');
	readFunParams();
	write(');\n');
};

const readDefVar = () => {
	write('let var_');
	readRegister();
	write(';\n');
};

const readVarAffectation = () => {
	write('var_');
	readRegister();
};

const instructionToFunctionMap: { [key in GertrudeInstruction]: () => void } = {
	[GertrudeInstruction.DefFun]: readDefFun,
	[GertrudeInstruction.CallFun]: readCallFun,
	[GertrudeInstruction.BeginCodeBlock]: () => write('{'),
	[GertrudeInstruction.EndCodeBlock]: () => write('}'),
	[GertrudeInstruction.DefVar]: readDefVar
};

const readProgram = (instructions: (GertrudeInstruction | Ratio)[]) => {
	read = Reader(instructions);
	code = '';

	while (instructionIndex < instructions.length) {
		if (isVarName(instructions[instructionIndex] as Ratio)) {
			readVarAffectation();
		} else {
			instructionToFunctionMap[instructions[instructionIndex] as GertrudeInstruction]();
		}
	}
};
