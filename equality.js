import { isZero } from './conditionals.js';
import { Sub } from './churchNumerals.js';
import { And, Not } from './booleanLogic.js';

export const lessThanOrEqual = a => b => isZero(Sub(a)(b));
export const isEqual         = a => b => And(lessThanOrEqual(a)(b))(lessThanOrEqual(b)(a));
export const greaterThan     = a => b => Not(lessThanOrEqual(a)(b));