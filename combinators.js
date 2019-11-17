// I := λx.x
export const I = x => x;
// K := λxy.x
export const K = x => y => x;
// S := λxyz.xz(yz)
export const S = x => y => z => x(z(y(z)));
// ω := λx.xx
export const w = x => x(x);