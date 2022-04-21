import React from 'react';
import {shallow} from 'enzyme';
import Title16 from './Title16';

it('is truthy', () => {
    expect(Title16).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Title16 text='Yeaah' />);
    expect(wrapper.children().prop('text')).toContain('Yeaah');
});
