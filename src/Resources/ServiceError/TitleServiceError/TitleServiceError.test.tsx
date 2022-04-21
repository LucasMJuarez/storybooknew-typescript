import React from 'react';
import {shallow} from 'enzyme';
import TitleServiceError from './TitleServiceError';

it('is truthy', () => {
    expect(TitleServiceError).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<TitleServiceError text='Yeaah' />);
    expect(wrapper.text()).toEqual('Yeaah');
});
