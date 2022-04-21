import React from 'react';
import {shallow} from 'enzyme';
import SubList from './SubList';

it('is truthy', () => {
    expect(SubList).toBeTruthy();
});

it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<SubList text='Yehh' />);
    expect(wrapper.children().last().prop('text')).toContain('Yehh');
});
