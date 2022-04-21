import React from 'react';
import {shallow} from 'enzyme';
import NormalPrice from './NormalPrice';

it('is truthy', () => {
    expect(NormalPrice).toBeTruthy();
});
it("Have text '$10.000'", () => {
    const wrapper = shallow(<NormalPrice precio='$10.000' />);
    expect(wrapper.text()).toContain('$10.000');
});
