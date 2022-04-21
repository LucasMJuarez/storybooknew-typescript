import React from 'react';
import {shallow} from 'enzyme';
import Text14R from './Text14R';

it('is truthy', () => {
    expect(Text14R).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Text14R text='Yeaah' />);
    expect(wrapper.text()).toEqual('Yeaah');
});