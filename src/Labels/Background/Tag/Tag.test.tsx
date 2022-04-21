import React from 'react';
import {shallow} from 'enzyme';
import Tag from './Tag';
import Caption from '../../../TextCatalog/CAPTION';

it('is truthy', () => {
    expect(Tag).toBeTruthy();
});
it("Have text 'ULTIMOS DÍAS'", () => {
    const wrapper = shallow(<Tag text='5 GB' />);
    expect(wrapper.find(Caption).prop('text')).toEqual('5 GB');
});
