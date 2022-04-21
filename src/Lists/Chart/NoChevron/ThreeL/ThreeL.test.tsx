import React from 'react';
import { shallow } from 'enzyme';
import ThreeL from './ThreeL';
import Data from '../../../../Assets/36/Data'

it('Correct props', () => {
    const wrapper = shallow(
        <ThreeL
            text= 'Ilimitado'
            sub_primary = 'Autorenovable Min Multidestino'
            sub_secondary = 'Vence el 8 Nov'
            icon = {'Data'}
            value = {60}
        />
    );
    expect(wrapper.prop('text')).toEqual('Ilimitado');
    expect(wrapper.prop('sub_primary')).not.toBeUndefined()
    expect(wrapper.find(Data));
});