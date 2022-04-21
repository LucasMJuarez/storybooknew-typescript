import React from 'react';
import {shallow} from 'enzyme';
import Headline from './Headline';
import styles from './Headline.styles';

it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Headline level={3} align='Left' type='text_primary' text='Yeaah' />);
    expect(wrapper.text()).toContain('Yeaah');
});

it('Have each style', () => {
    for (const level in styles.headline) {
        for (const align in styles.headline[level]) {
            for (const type in styles.headline[level][align]) {
                const wrapper = shallow(
                    <Headline
                        level={Number(level)}
                        align={align}
                        type={type}
                        text={`Im ${level} / ${align} / ${type}`}
                    />
                );

                expect(wrapper.prop('className')).toEqual(styles.headline[level][align][type]);
                expect(wrapper.text()).toContain(`Im ${level} / ${align} / ${type}`);
            }
        }
    }
});

//@ts-ignore
global.document = {head: {appendChild: e => {}}};
it('Passing wrong prop throws', () => {
    expect(() => shallow(<Headline level={64} align='hehee' type='yyaaaah' text='Foo' />)).toThrow();
});
