import React from 'react';
import {shallow} from 'enzyme';
import Header14R from './14R_Header';

it('is truthy', () => {
    expect(Header14R).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Header14R text='Yeaah' />);
    expect(wrapper.children().prop('text')).toContain('Yeaah');
});
