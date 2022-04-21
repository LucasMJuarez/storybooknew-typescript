import React from 'react';
import {shallow} from 'enzyme';
import Dashboard14R from './14R_Dashboard';

it('is truthy', () => {
    expect(Dashboard14R).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Dashboard14R text='Yeaah' />);
    expect(wrapper.children().prop('text')).toContain('Yeaah');
});
