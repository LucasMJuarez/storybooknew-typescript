import React from 'react';
import {shallow} from 'enzyme';
import Primary16R from './Primary16R';
import Body from '../../../../TextCatalog/BODY';

it('is truthy', () => {
    expect(Primary16R).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Primary16R text='Yeaah' />);
    expect(wrapper.prop('text')).toEqual('Yeaah');
});
it('Text is BODY (16)/Body 1 (16R)/∙ Left/text_primary', () => {
    const wrapper = shallow(<Primary16R text='Yeaah' />);
    expect(wrapper.type()).toEqual(Body);
    expect(wrapper.prop('level')).toEqual(1);
    expect(wrapper.prop('align')).toEqual('Left');
    expect(wrapper.prop('type')).toEqual('text_primary');
});
