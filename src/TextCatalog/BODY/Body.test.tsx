import React from 'react';
import { shallow } from 'enzyme';
import Body from './Body';
import styles from './Body.styles';

it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Body level={1} align='Left' type='text_primary' text='Yeaah' />);
    expect(wrapper.html()).toContain('Yeaah');
});

it('Have each style', () => {
    for (const level in styles.body) {
        for (const align in styles.body[level]) {
            for (const type in styles.body[level][align]) {
                const wrapper = shallow(
                    <Body level={Number(level)} align={align} type={type} text={`Im ${level} / ${align} / ${type}`} />
                );

                expect(wrapper.prop('className')).toEqual(styles.body[level][align][type]);
                expect(wrapper.html()).toContain(`Im ${level} / ${align} / ${type}`);
            }
        }
    }
});

//@ts-ignore
global.document = { head: { appendChild: e => { } } };
it('Passing wrong prop throws', () => {
    expect(() => shallow(<Body level={64} align='hehee' type='yyaaaah' text='Foo' />)).toThrow();
});