import React from 'react';
import {shallow} from 'enzyme';
import Label from './Label';
import styles from './Label.styles';

it('is truthy', () => {
    expect(Label).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Label category='First' text='Yeaah' />);
    expect(wrapper.children().text()).toContain('Yeaah');
});

type CategoriesEnum = 'First' | 'Second' | 'Third' | 'Fourth' | 'Fifth' | 'Sixth';

it('Label have right category style', () => {
    const categories: CategoriesEnum[] = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'];
    categories.map(category => {
        const wrapper = shallow(<Label category={category} text='Hello there' />);
        expect(wrapper.prop('className')).toContain(styles[category]);
    });
});
