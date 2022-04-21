import React from 'react';
import {shallow} from 'enzyme';
import Massa from '.';

it('Renders passed children', () => {
    const Children = <div>Hi</div>;
    const wrapper = shallow(<Massa children={Children} />);
    expect(wrapper.children.length).toBe(1);
    expect(wrapper.text()).toBe('Hi');
});
