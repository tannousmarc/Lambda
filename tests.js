import { I, K, w } from './combinators.js';
import { True, False, And, Or, Not } from './booleanLogic.js';
import { If, isZero } from './conditionals.js';
import { Zero, Add, Sub, Succ } from './churchNumerals.js';
import { lessThanOrEqual, isEqual, greaterThan } from './equality.js';
import { displayNumber } from './utils.js';

const assert = (expr, message) => {
    if(expr){
        console.log('\x1b[32m%s\x1b[0m', message); 
    }
    else{
        console.log('\x1b[31m%s\x1b[0m', message); 
    }
}

assert(I(True) === True, "I(True) evaluates to True");
assert(I(False) === False, "I(False) evaluates to False");

assert(K(True)(False) === True, "K(True)(False) evaluates to True");
assert(K(False)(True) === False, "K(False)(True) evaluates to False");

assert(Not(True) === False, "Not(True) evaluates to False");
assert(Not(False) === True, "Not(False) evaluates to True");

assert(And(True)(False) === False, "And(True)(False) evaluates to False");
assert(And(False)(True) === False, "And(False)(True) evaluates to False");
assert(And(False)(False) === False, "And(False)(False) evaluates to False");
assert(And(True)(True) === True, "And(True)(True) evaluates to True");

assert(Or(True)(False) === True, "Or(True)(False) evaluates to True");
assert(Or(False)(True) === True, "Or(False)(True) evaluates to True");
assert(Or(False)(False) === False, "Or(False)(False) evaluates to False");
assert(Or(True)(True) === True, "Or(True)(True) evaluates to True");
