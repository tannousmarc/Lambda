// λfx.x
export const Zero = f => x => x;
// λfx.fx
export const One  = f => x => f(x);

// Add := λyz.λfx.yf(zfx)
export const Add  =  y => z => f => x => y(f)(z(f)(x));