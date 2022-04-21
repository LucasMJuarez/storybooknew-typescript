import React from 'react';
import {shallow} from 'enzyme';
import InternetTelevision from './InternetTelevision';

it('InternetTelevision is an svg', () => {
    const wrapper = shallow(<InternetTelevision />);
    expect(wrapper.type()).toEqual('svg');
});
