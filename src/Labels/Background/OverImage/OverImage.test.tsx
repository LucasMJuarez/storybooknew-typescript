import React from 'react';
import {shallow} from 'enzyme';
import OverImage from './OverImage';

it('is truthy', () => {
    expect(OverImage).toBeTruthy();
});
it("Have text 'ULTIMOS DÍAS'", () => {
    const wrapper = shallow(<OverImage text='ULTIMOS DÍAS' />);
    expect(wrapper.children().text()).toContain('ULTIMOS DÍAS');
});
