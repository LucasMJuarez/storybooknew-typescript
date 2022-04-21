import React from 'react';
import IcnArrow from '../../../../Assets/24/IcnArrow';
import { shallow } from 'enzyme';


it('is truthy', () => {
    expect(IcnArrow).toBeTruthy();
});

it('renders children default component ok', () => {
    const wrapper = shallow(<IcnArrow />);
});

