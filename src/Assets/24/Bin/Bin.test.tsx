import React from 'react';
import {shallow} from 'enzyme';
import Bin from './Bin';
import {colors} from '../../../styles';

describe('Bin test', () => {
    it('is an svg', () => {
        const wrapper = shallow(<Bin />);
        expect(wrapper.type()).toEqual('svg');
    });

    it('is 24x24', () => {
        const wrapper = shallow(<Bin />);
        expect(wrapper.prop('width')).toEqual('24');
        expect(wrapper.prop('height')).toEqual('24');
    });
});
