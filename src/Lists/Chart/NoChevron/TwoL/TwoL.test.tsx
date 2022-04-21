import React from 'react';
import { shallow } from 'enzyme';
import TwoL from './TwoL';
import Data from '../../../../Assets/36/Data';

it('Correct props', () => {
    const wrapper = shallow(
        <TwoL
            text= 'Ilimitado'
            sub_secondary = 'Vence el 8 Nov'
            icon = {'Data'}
            value = {60}
        />
    );
    expect(wrapper.prop('text')).toEqual('Ilimitado');
    expect(wrapper.find(Data))
});