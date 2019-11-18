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
