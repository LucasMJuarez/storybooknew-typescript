import React from 'react';
import { shallow } from 'enzyme';
import Hada from './Hada';
import Lottie from 'react-lottie-player'

it('Hada is an svg', () => {
    const wrapper = shallow(<Hada />);
    expect(wrapper.type()).toEqual(Lottie);
});
