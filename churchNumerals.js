// λfx.x
export const Zero = f => x => x;

export const Succ = n => f => z => f(n(f)(z));
export const Pred = z => f => x => z(g => h => h(g(f)))(u => x)(u => u);

export const Sub  = a => b => b(Pred)(a);
export const Add  = a => b => a(Succ)(b);