import React from 'react';
import {shallow} from 'enzyme';
import CurrentTariffs from './CurrentTariffs';

describe ('CurrentTariffs tests', () => {

    it('CurrentTariffs is an svg', () => {
        const wrapper = shallow(<CurrentTariffs />);
        expect(wrapper.type()).toEqual('svg');
    });
    
    it('CurrentTariffs is 24x24', () => {
        const wrapper = shallow(<CurrentTariffs />);
        expect(wrapper.prop('width')).toEqual('24');
        expect(wrapper.prop('height')).toEqual('24');
    });
    
})