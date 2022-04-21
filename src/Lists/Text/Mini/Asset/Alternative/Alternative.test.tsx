import React from 'react';
import {shallow} from 'enzyme';
import Alternative from './Alternative';

it('is truthy', () => {
    expect(Alternative).toBeTruthy();
});
it("Have primaryText 'Yeaah'", () => {
    const wrapper = shallow(<Alternative primaryText='Yeaah' />);
    expect(wrapper.children().last().children().prop('text')).toContain('Yeaah');
});
