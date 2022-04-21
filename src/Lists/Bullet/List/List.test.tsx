import React from 'react';
import {shallow} from 'enzyme';
import List from './List';

it('is truthy', () => {
    expect(List).toBeTruthy();
});

it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<List text='Yehh' />);
    expect(wrapper.children().last().prop('text')).toContain('Yehh');
});
