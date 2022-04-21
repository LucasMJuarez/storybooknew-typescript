import React from 'react';
import {shallow} from 'enzyme';
import SectionTitle_Header from './SectionTitle_Header';

it('is truthy', () => {
    expect(SectionTitle_Header).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<SectionTitle_Header text='Yeaah' />);
    expect(wrapper.children().prop('text')).toContain('Yeaah');
});
