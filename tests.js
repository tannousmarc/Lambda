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

assert(displayNumber(Zero) === 0, "displayNumber(Zero) evaluates to 0");
assert(displayNumber(Succ(Zero)) === 1, "displayNumber(Succ(Zero)) evaluates to 1");

assert(isZero(Zero) === True, "isZero(Zero) evaluates to True");
assert(isZero(Succ(Zero)) === False, "isZero(Succ(Zero)) evaluates to False");

assert(displayNumber(Add(Zero)(Zero)) === 0, "displayNumber(Add(Zero)(Zero)) evaluates to 0");
assert(displayNumber(Add(Zero)(Succ(Zero))) === 1, "displayNumber(Add(Zero)(Succ(Zero))) evaluates to 1");
assert(displayNumber(Add(Succ(Zero))(Zero)) === 1, "displayNumber(Add(Succ(Zero))(Zero)) evaluates to 1");

assert(displayNumber(Sub(Zero)(Zero)) === 0, "displayNumber(Sub(Zero)(Zero)) evaluates to 0");
assert(displayNumber(Sub(Zero)(Succ(Zero))) === 0, "displayNumber(Sub(Zero)(Succ(Zero))) evaluates to 0");
assert(displayNumber(Sub(Succ(Zero))(Zero)) === 1, "displayNumber(Sub(Succ(Zero))(Zero)) evaluates to 1");

assert(isZero(Zero) === True, "isZero(Zero) evaluates to True");
assert(isZero(Succ(Zero)) === False, "isZero(Succ(Zero))) evaluates to False");

assert(If(True)(True)(False) === True, "If(True)(True)(False) evaluates to True");
assert(If(False)(True)(False) === False, "If(False)(True)(False) evaluates to False");

assert(lessThanOrEqual(Zero)(Succ(Zero)) === True, "lessThanOrEqual(Zero)(Succ(Zero)) evaluates to True");
assert(lessThanOrEqual(Zero)(Zero) === True, "lessThanOrEqual(Zero)(Zero) evaluates to True");
assert(lessThanOrEqual(Succ(Zero))(Zero) === False, "lessThanOrEqual(Succ(Zero))(Zero) evaluates to False");

assert(isEqual(Zero)(Succ(Zero)) === False, "isEqual(Zero)(Succ(Zero)) evaluates to False");
assert(isEqual(Zero)(Zero) === True, "isEqual(Zero)(Zero) evaluates to True");
assert(isEqual(Succ(Zero))(Zero) === False, "isEqual(Succ(Zero))(Zero) evaluates to False");

assert(greaterThan(Zero)(Succ(Zero)) === False, "greaterThan(Zero)(Succ(Zero)) evaluates to False");
assert(greaterThan(Zero)(Zero) === False, "greaterThan(Zero)(Zero) evaluates to False");
assert(greaterThan(Succ(Zero))(Zero) === True, "greaterThan(Succ(Zero))(Zero) evaluates to True");
