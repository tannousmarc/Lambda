// I := λx.x
export const I = x => x;
// K := λxy.x
export const K = x => y => x;
// ω := λx.xx
export const w = x => x(x);