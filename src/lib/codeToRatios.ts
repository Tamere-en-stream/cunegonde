import _ from 'lodash';
import { isValidRatio, isVarName, type GertrudeRatio, type VarName } from './GertrudeInstruction';

const computeRatio = (words: string[]) => {
	const averageLength = Math.round(_(words)
		.map((word) => word.length)
		.sum() / words.length);

	const smaller = _(words)
		.map((word) => +(word.length < averageLength))
		.sum();

	const longer = _(words)
		.map((word) => +(word.length > averageLength))
		.sum();

    console.log('longer', longer)
    console.log('smaller', smaller)
    console.log('averageLength', averageLength)

	if (!isValidRatio(`${longer}/${smaller}`) && !isVarName(`${longer}/${smaller}`)) {
		return null;
	}

	return `${longer}/${smaller}` as GertrudeRatio | VarName;
};

const codeToRatios = (code: string) => {
	const ratios = code.split('.').map((sentence) => {
		const words = sentence.split(/\s+/i);

		const ratio = computeRatio(words);
		return ratio;
	});

	return ratios;
};

export { codeToRatios };
