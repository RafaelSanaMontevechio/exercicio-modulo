const juros = require('./juros');


test('jurosSimples', () => {
    const c = 100;
    const i = 0.10;
    const t = 1
    const jurosEsperado = 10;
    const j = juros.jurosSimples(c, i, t);
    expect(j).toBe(jurosEsperado);
});

test('jurosSimples', () => {
    const c = 100;
    const i = 0.10;
    const t = 0
    const jurosEsperado = 0;
    const j = juros.jurosSimples(c, i, t);
    expect(j).toBe(jurosEsperado);
});

test('montanteSimples', () => {
    const c = 100;
    const i = 0.10;
    const t = 1
    const montanteEsperado = 110;
    const jurosSimples = jest.fn();
    jurosSimples.mockImplementation(() => 10);
    const montanteSimples = juros.pure.montanteSimples({ jurosSimples });
    const montante = montanteSimples(c, i, t);
    expect(jurosSimples.mock.calls[0]).toEqual([c, i, t]);
    expect(montante).toBe(montanteEsperado);
});

test('montanteJuroscompostos', () => {
    const c = 1000;
    const i = 0.10;
    const t = 1
    const jurosEsperado = 1100;
    const j = juros.montanteJurosCompostos(c, i, t);
    expect(j).toBe(jurosEsperado);
});

test('jurosCompostos', () => {
    const c = 1000;
    const i = 0.10;
    const t = 1
    const jurosEsperado = 100;
    const montanteJurosCompostos = jest.fn();
    montanteJurosCompostos.mockImplementation(() => 1100);

    const jurosCompostos = juros.pure.jurosCompostos({ montanteJurosCompostos });
    const j = jurosCompostos(c, i, t);

    expect(montanteJurosCompostos.mock.calls[0]).toEqual([c, i, t]);
    expect(j).toBe(jurosEsperado);
});