import React from 'react';
import {shallow} from 'enzyme';
import Caption from './Caption';
import styles from './Caption.styles';

it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Caption level={1} align='Left' type='text_input_label_error' text='Yeaah' />);
    expect(wrapper.text()).toContain('Yeaah');
});

it('Have each style', () => {
    for (const level in styles.caption) {
        for (const align in styles.caption[level]) {
            for (const type in styles.caption[level][align]) {
                const wrapper = shallow(
                    <Caption
                        level={Number(level)}
                        align={align}
                        type={type}
                        text={`Im ${level} / ${align} / ${type}`}
                    />
                );

                expect(wrapper.prop('className')).toEqual(styles.caption[level][align][type]);
                expect(wrapper.text()).toContain(`Im ${level} / ${align} / ${type}`);
            }
        }
    }
});

//@ts-ignore
global.document = {head: {appendChild: e => {}}};
it('Passing wrong prop throws', () => {
    expect(() => shallow(<Caption level={64} align='hehee' type='yyaaaah' text='Foo' />)).toThrow();
});
