// Geneviève file in which the translation from .Gertrude ratios to TS code.

import { GertrudeInstruction } from './GertrudeInstruction';

// Take Gertrude instructions as a list of instructions to generate TS code.
export default function genevieve(gertrude: GertrudeInstruction[]): string {
	let code = '';

	// Iterate over Gertrude instructions.
	for (const instruction of gertrude) {
		// Generate TS code from Gertrude instruction.
		switch (instruction) {
			case GertrudeInstruction.DefFun:
				code += 'function ';
				break;
			case GertrudeInstruction.CallFun:
				code += '()';
				break;
			case GertrudeInstruction.BeginCodeBlock:
				code += ' {';
				break;
			case GertrudeInstruction.EndCodeBlock:
				code += '}';
				break;
			case GertrudeInstruction.DefVar:
				code += 'let ';
				break;
			case GertrudeInstruction.Assignment:
				code += ' = ';
				break;
			case GertrudeInstruction.PlusEqual:
				code += ' += ';
				break;
			case GertrudeInstruction.Plus:
				code += ' + ';
				break;
			case GertrudeInstruction.MinusEqual:
				code += ' -= ';
				break;
			case GertrudeInstruction.Minus:
				code += ' - ';
				break;
			case GertrudeInstruction.TimesEqual:
				code += ' *= ';
				break;
			case GertrudeInstruction.Times:
				code += ' * ';
				break;
			case GertrudeInstruction.DivideEqual:
				code += ' /= ';
				break;
			case GertrudeInstruction.Divide:
				code += ' / ';
				break;
			case GertrudeInstruction.ModuloEqual:
				code += ' %= ';
				break;
			case GertrudeInstruction.Modulo:
				code += ' % ';
				break;
			case GertrudeInstruction.OrEqual:
				code += ' ||= ';
				break;
			case GertrudeInstruction.Or:
				code += ' || ';
				break;
			case GertrudeInstruction.AndEqual:
				code += ' &&= ';
				break;
			case GertrudeInstruction.And:
				code += ' && ';
				break;
			case GertrudeInstruction.NandEqual:
				code += ' ^= ';
				break;
			case GertrudeInstruction.Nand:
				code += ' ^^ ';
				break;
			case GertrudeInstruction.BitOrEqual:
				code += ' |= ';
				break;
			case GertrudeInstruction.BitOr:
				code += ' | ';
				break;
			case GertrudeInstruction.BitAndEqual:
				code += ' &= ';
				break;
			case GertrudeInstruction.BitAnd:
				code += ' & ';
				break;
			case GertrudeInstruction.Inf:
				code += ' < ';
				break;
			case GertrudeInstruction.EqEq:
				code += ' == ';
				break;
			case GertrudeInstruction.Sup:
				code += ' > ';
				break;
			case GertrudeInstruction.InfEq:
				code += ' <= ';
				break;
			case GertrudeInstruction.NotEq:
				code += ' != ';
				break;
			case GertrudeInstruction.SupEq:
				code += ' >= ';
				break;
			case GertrudeInstruction.DefineLiteral:
				code += 'const ';
				break;
			case GertrudeInstruction.PrintIntAsChar:
				code += 'console.log(String.fromCharCode(';
				break;
			case GertrudeInstruction.PrintString:
				code += 'console.log(';
				break;
			case GertrudeInstruction.Not:
				code += '!';
				break;
			case GertrudeInstruction.IfThen:
				code += 'if (';
				break;
			case GertrudeInstruction.WhileDo:
				code += 'while (';
				break;
			case GertrudeInstruction.UntilDo:
				code += 'while (!(';
				break;
			default:
				code += '';
				break;
		}
	}

	return code;
}
