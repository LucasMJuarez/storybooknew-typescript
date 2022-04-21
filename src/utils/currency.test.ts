import transformNumberToCurrency from './currency';

it('Number parse to currency', () => {
    const amount = 50;
    expect(transformNumberToCurrency(amount)).toEqual('$50,00');
});

it('Negative number parse to currency with - in the front', () => {
    const amount = -50;
    expect(transformNumberToCurrency(amount)).toEqual('-$50,00');
});

it('Thousands have dot separator and comma separator', () => {
    const amount = 5050.3;
    expect(transformNumberToCurrency(amount)).toEqual('$5.050,30');
});

it('Negative thousands have dot separator and comma separator', () => {
    const amount = -5050.3;
    expect(transformNumberToCurrency(amount)).toEqual('-$5.050,30');
});
