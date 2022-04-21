import React from 'react';
import {shallow, render} from 'enzyme';
import OneButtonCenter from './OneButtonCenter';
import Body from '../../../../../TextCatalog/BODY';

const mockFn = jest.fn();

describe('button integration works ok', () => {
    it('renders inner text ok', () => {
        const buttonText = 'Pagar';
        const wrapper = render(<OneButtonCenter text='Pagar' onClick={mockFn} />);
        expect(wrapper.text()).toContain(buttonText);
    });

    it('triggers each function ok', () => {
        const wrapper = shallow(<OneButtonCenter text='Pagar' onClick={mockFn} />);
        wrapper.find('BaseButton').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('renders disabled state ok', () => {
        const wrapper = shallow(<OneButtonCenter disabled onClick={mockFn} text='Pagar' />);
        expect(wrapper.find(Body).prop('type')).toEqual('text_button_primary_disabled');
    });
});
