import React from 'react';
import {shallow} from 'enzyme';
import Inactive from './Inactive';

it('is truthy', () => {
    expect(Inactive).toBeTruthy();
});
it('children is type form', () => {
    let options = ['Option 1', 'Option 2'];
    const wrapper = shallow(<Inactive placeholder='Placeholder' title='Yeaah' items={options} />);
    expect(wrapper.children().type()).toEqual('form');
});
