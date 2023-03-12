import _ from "lodash";
import type { GertrudeRatio } from "./types";


const computeRatio = (words: string[]): GertrudeRatio => {
  const averageLength = _(words)
    .map((word) => word.length)
    .sum();
  
  const smaller = _(words)
    .map((word) => +(word.length < averageLength))
    .sum();
  
  const longer = _(words)
    .map((word) => +(word.length > averageLength))
    .sum();
  
  return `${longer}/${smaller}`;
}

const codeToRatios = (code: string): GertrudeRatio[] => {
  const ratios = code
    .split("\n")
    .map((sentence) => {
      const words = sentence.split(/\s+/i);
      
      const ratio = computeRatio(words);
      return ratio;
    });

  return ratios;
}

export {
  codeToRatios
}
