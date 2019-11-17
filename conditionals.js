import { True, False } from './booleanLogic.js';

export const If = Condition => Then => Else => Condition(Then)(Else);

export const isZero = n => n(x => False)(True);