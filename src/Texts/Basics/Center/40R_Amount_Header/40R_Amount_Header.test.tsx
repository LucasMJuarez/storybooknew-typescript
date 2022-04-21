import React from 'react';
import {shallow} from 'enzyme';
import AmountHeader40R from './40R_Amount_Header';

it('is truthy', () => {
    expect(AmountHeader40R).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<AmountHeader40R text='Yeaah' />);
    expect(wrapper.children().prop('text')).toContain('Yeaah');
});
