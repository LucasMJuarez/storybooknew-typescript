import React from 'react';
import {shallow} from 'enzyme';
import GreenBadge from './Green';

it('Green is 24x24', () => {
    const wrapper = shallow(<GreenBadge text={'2'} />);
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('Caption').prop('text')).toEqual('2');
});
