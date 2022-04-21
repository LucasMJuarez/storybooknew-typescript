import React from 'react';
import {shallow} from 'enzyme';
import Active from './Active';

it('is truthy', () => {
    expect(Active).toBeTruthy();
});

it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Active asset={'BulletActive'} text='Yehh' />);
    expect(wrapper.children().first().children().last().children().first().prop('text')).toContain('Yehh');
});
