import React from 'react';
import {shallow} from 'enzyme';
import Image from './Image';
it('is truthy', () => {
    expect(Image).toBeTruthy();
});

it('Image dont throw', () => {
    expect(() => shallow(<Image url='' alt='' />)).not.toThrow();
});

it('Image passes url and alt to img', () => {
    const wrapper = shallow(<Image url='My Url' alt='My Alt' />);
    expect(wrapper.find('img').prop('src')).toEqual('My Url');
    expect(wrapper.find('img').prop('alt')).toEqual('My Alt');
});
