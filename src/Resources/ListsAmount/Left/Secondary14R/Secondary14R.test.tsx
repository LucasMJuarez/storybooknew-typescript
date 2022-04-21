import React from 'react';
import {shallow} from 'enzyme';
import Secondary14R from './Secondary14R';
import Sub from '../../../../TextCatalog/SUB';

it('is truthy', () => {
    expect(Secondary14R).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Secondary14R text='Yeaah' />);
    expect(wrapper.prop('text')).toEqual('Yeaah');
});
it('Text is SUB (14)/Sub 1 (14R)/∙ Left/text_secondary', () => {
    const wrapper = shallow(<Secondary14R text='Yeaah' />);
    expect(wrapper.type()).toEqual(Sub);
    expect(wrapper.prop('level')).toEqual(1);
    expect(wrapper.prop('align')).toEqual('Left');
    expect(wrapper.prop('type')).toEqual('text_secondary');
});
