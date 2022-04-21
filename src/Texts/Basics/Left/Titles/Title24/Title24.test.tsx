import React from 'react';
import { shallow } from 'enzyme';
import Title24 from './Title24';

it('is truthy', () => {
    expect(Title24).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Title24 text='Yeaah' />);
    expect(wrapper.children().prop('text')).toContain('Yeaah');
});
