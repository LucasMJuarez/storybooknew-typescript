import {transformNumberToStringWithThousands} from './number';

it('Number parse to string', () => {
    const amount = 50;
    expect(transformNumberToStringWithThousands(amount)).toEqual('50');
});

it('Negative number parse to string with - in the front', () => {
    const amount = -50;
    expect(transformNumberToStringWithThousands(amount)).toEqual('-50');
});

it('Thousands have dot separator and comma separator', () => {
    const amount = 5050.3;
    expect(transformNumberToStringWithThousands(amount)).toEqual('5.050,30');
});

it('Negative thousands have dot separator and comma separator', () => {
    const amount = -5050.3;
    expect(transformNumberToStringWithThousands(amount)).toEqual('-5.050,30');
});
