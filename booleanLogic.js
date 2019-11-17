export const True  = x => y => x;
export const False = x => y => y;

export const Not = x => x(False)(True);

export const And = x => y => x(y)(False);
export const Or  = x => y => x(True)(y);