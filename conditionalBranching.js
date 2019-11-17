export const True  = x => y => x;
export const False = x => y => y;

export const And = x => y => x(y)(False);
export const Or  = x => y => x(True)(y);

export const If = Condition => Then => Else => Condition(Then)(Else);