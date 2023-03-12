import { GertrudeInstruction } from './GertrudeInstruction';

let code = '';
let instructionIndex = 0;
let read;

const Reader = (programme: any): (() => GertrudeInstruction) => {
	const read = (): GertrudeInstruction => {
		instructionIndex += 1;
		return programme[instructionIndex];
	};

	return read;
};

const write = (tsCode: string) => {
	code += tsCode;
};

const readDefFun = () => {
	write('const func_');
	readFunRegister();
	write(' = (');
	readFunArguments();
	write(') => {');
	readFunBlock();
	write('}');
};

const mapper: {} = {
	[GertrudeInstruction.DefFun]: readDefFun
};

const readProgram = (instructions: GertrudeInstruction[]) => {
	read = Reader(instructions);
	code = '';
	while (instructionIndex < instructions.length) {
		mapper[instruction]();
	}
};
