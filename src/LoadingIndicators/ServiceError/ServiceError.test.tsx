import React from 'react';
import { shallow } from 'enzyme';
import ServiceError from './ServiceError';

const mockFn = jest.fn();
it('is truthy', () => {
    expect(ServiceError).toBeTruthy();
});
it("Have Title 'Title'", () => {
    const wrapper = shallow(<ServiceError description='Yeaah' onClick={mockFn} title='Title' buttonText='Button' />);
    expect(wrapper.children().first().prop('text')).toEqual('Title');
});
it("Have Description 'Yeaah'", () => {
    const wrapper = shallow(<ServiceError description='Yeaah' onClick={mockFn} title='Title' buttonText='Button' />);
    expect(wrapper.children().children().first().text()).toEqual('Yeaah');
});
it("Have ButtonText 'Button'", () => {
    const wrapper = shallow(<ServiceError description='Yeaah' onClick={mockFn} title='Title' buttonText='Button' />);
    expect(wrapper.children().children().last().prop('text')).toEqual('Button');
});

