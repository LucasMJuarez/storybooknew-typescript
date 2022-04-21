import React from 'react';
import {shallow} from 'enzyme';
import Highlight from './Highlight';

it('is truthy', () => {
    expect(Highlight).toBeTruthy();
});
it("Have text 'Example Component'", () => {
    const wrapper = shallow(<Highlight text='Yeaah' />);
    expect(wrapper.text()).toContain('Yeaah');
});
