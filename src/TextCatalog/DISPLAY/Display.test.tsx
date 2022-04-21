import React from 'react';
import {shallow} from 'enzyme';
import Display from './Display';
import styles from './Display.styles';

it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Display level={4} align='Center' type='text_primary_inverse' text='Yeaah' />);
    expect(wrapper.text()).toContain('Yeaah');
});

it('Have each style', () => {
    for (const level in styles.display) {
        for (const align in styles.display[level]) {
            for (const type in styles.display[level][align]) {
                const wrapper = shallow(
                    <Display
                        level={Number(level)}
                        align={align}
                        type={type}
                        text={`Im ${level} / ${align} / ${type}`}
                    />
                );

                expect(wrapper.prop('className')).toEqual(styles.display[level][align][type]);
                expect(wrapper.text()).toContain(`Im ${level} / ${align} / ${type}`);
            }
        }
    }
});

//@ts-ignore
global.document = {head: {appendChild: e => {}}};
it('Passing wrong prop throws', () => {
    expect(() => shallow(<Display level={64} align='hehee' type='yyaaaah' text='Foo' />)).toThrow();
});
