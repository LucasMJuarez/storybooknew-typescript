import React from 'react';
import {shallow} from 'enzyme';
import Title14M from './Title14M';

it('is truthy', () => {
    expect(Title14M).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Title14M text='Yeaah' />);
    expect(wrapper.children().prop('text')).toContain('Yeaah');
});
