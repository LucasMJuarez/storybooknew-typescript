import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';
import styles from './Title.styles';

it('renders passed text', () => {
    const wrapper = shallow(<Title level={0} align='Left' type='text_navigation_bar_primary' text='Mi titulo!' />);
    expect(wrapper.html()).toContain('Mi titulo!');
});

it('has each style', () => {
    for (const level in styles.title) {
        for (const align in styles.title[level]) {
            for (const type in styles.title[level][align]) {
                const wrapper = shallow(
                    <Title level={Number(level)} align={align} type={type} text={`Im ${level} / ${align} / ${type}`} />
                );

                expect(wrapper.prop('className')).toEqual(styles.title[level][align][type]);
                expect(wrapper.html()).toContain(`Im ${level} / ${align} / ${type}`);
            }
        }
    }
});
