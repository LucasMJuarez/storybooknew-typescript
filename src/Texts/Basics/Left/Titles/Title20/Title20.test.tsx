import React from 'react';
import {shallow} from 'enzyme';
import Title20 from './Title20';

it('is truthy', () => {
    expect(Title20).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Title20 text='Yeaah' />);
    expect(wrapper.children().prop('text')).toContain('Yeaah');
});
