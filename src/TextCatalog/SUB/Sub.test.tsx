import React from 'react';
import {render, shallow} from 'enzyme';
import Sub from './Sub';
import styles from './Sub.styles';

it("Have text 'Yeaah'", () => {
    const wrapper = render(<Sub level={1} align='Left' type='text_secondary' text='Yeaah' />);
    expect(wrapper.text()).toContain('Yeaah');
});

it('Have each style', () => {
    for (const level in styles.sub) {
        for (const align in styles.sub[level]) {
            for (const type in styles.sub[level][align]) {
                const wrapper = render(
                    <Sub level={Number(level)} align={align} type={type} text={`Im ${level} / ${align} / ${type}`} />
                );

                expect(wrapper.prop('class')).toEqual(styles.sub[level][align][type]);
                expect(wrapper.text()).toContain(`Im ${level} / ${align} / ${type}`);
            }
        }
    }
});

//@ts-ignore
global.document = {head: {appendChild: e => {}}};
it('Passing wrong prop throws', () => {
    expect(() => shallow(<Sub level={64} align='hehee' type='yyaaaah' text='Foo' />)).toThrow();
});
