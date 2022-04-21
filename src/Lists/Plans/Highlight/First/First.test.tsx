import React from 'react';
import {shallow} from 'enzyme';
import First from './First';

it('is truthy', () => {
    expect(First).toBeTruthy();
});

it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<First asset={'TestDrive'} text='Nooo' />);
    expect(wrapper.children().first().children().last().children().first().prop('text')).toContain('Nooo');
});
