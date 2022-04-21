import React from 'react';
import {shallow} from 'enzyme';
import Gift from './Gift';

describe ('Gift test', () => {

    it('is an svg', () => {
        const wrapper = shallow(<Gift />);
        expect(wrapper.type()).toEqual('svg');
    });

    it('is 24x24', () => {
        const wrapper = shallow(<Gift />);
        expect(wrapper.prop('width')).toEqual('24');
        expect(wrapper.prop('height')).toEqual('24');
    });

})