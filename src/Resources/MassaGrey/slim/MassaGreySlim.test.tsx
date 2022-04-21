import React from 'react';
import {shallow} from 'enzyme';
import MassaGreySlim from '.';

it('Renders passed children', () => {
    const Children = <div>Hi</div>;
    const wrapper = shallow(<MassaGreySlim children={Children} />);
    expect(wrapper.children.length).toBe(1);
    expect(wrapper.text()).toBe('Hi');
});
