import React from 'react';
import {shallow} from 'enzyme';
import Info from './Info';

it('is truthy', () => {
    expect(Info).toBeTruthy();
});
it("'has correct size'", () => {
    const wrapper = shallow(<Info />);
    expect(wrapper.props().height).toEqual('16');
    expect(wrapper.props().width).toEqual('16');
});
