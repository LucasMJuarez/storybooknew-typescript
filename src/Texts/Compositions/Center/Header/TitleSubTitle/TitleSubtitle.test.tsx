import React from 'react';
import { shallow } from 'enzyme';
import TitleSubtitle from './TitleSubtitle';

it("Have title 'My super title' and subtitle 'My super subtitle'", () => {
    const wrapper = shallow(<TitleSubtitle title='My super title' subtitle='My super subtitle' />);
    expect(wrapper.find('Body').prop('text')).toContain('My super title');
    expect(wrapper.find('Sub').prop('text')).toContain('My super subtitle');
});