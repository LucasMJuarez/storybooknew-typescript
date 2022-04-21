import React from 'react';
import {shallow} from 'enzyme';
import Title16Dashboard from './Title16_Dashboard';

it('is truthy', () => {
    expect(Title16Dashboard).toBeTruthy();
});

it('Have correct text', () => {
    const wrapper = shallow(<Title16Dashboard text='Yeaah' />);
    expect(wrapper.children().prop('text')).toContain('Yeaah');
});
