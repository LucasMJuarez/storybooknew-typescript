import React from 'react';
import {shallow} from 'enzyme';
import CenterMessage18L from './18L_Center_Message';

it('is truthy', () => {
    expect(CenterMessage18L).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<CenterMessage18L text='Yeaah' />);
    expect(wrapper.children().prop('text')).toContain('Yeaah');
});
