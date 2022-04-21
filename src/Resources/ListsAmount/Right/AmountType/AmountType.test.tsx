import * as React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import AmountType from './AmountType';

const wrapper: ShallowWrapper = shallow(<AmountType amount={1234}/>);
describe('Testing AmountType:', () => {
    it('Have $ and , on number', () => {
        expect(wrapper.find('Body').prop('text')).toContain('$');
        expect(wrapper.find('Body').prop('text')).toContain(',');
    });
    it('Have the text setted in props', () => {
        const props = {
            text: '/mes',
        };
        wrapper.setProps(props);
        expect(wrapper.find('Caption').prop('text')).toEqual(props.text);
    });
    it('Have two decimals on number', () => {
        const props = {
            amount: 0,
        };
        wrapper.setProps(props);
        expect(wrapper.find('Body').prop('text')).toContain(',00');
    });
    it('Parse to amount on number', () => {
        const props = {
            amount: 30,
        };
        wrapper.setProps(props);
        expect(wrapper.find('Body').prop('text')).toEqual('$30,00');
        props.amount = -50;
        wrapper.setProps(props);
        expect(wrapper.find('Body').prop('text')).toEqual('$50,00');
        expect(wrapper.find('Body').prop('type')).toEqual('text_warning');
    });
    it('have negative symbol if is passed', () => {
        const props = {
            amount: -50,
            showNegativeSymbol: true,
        };
        wrapper.setProps(props);
        expect(wrapper.find('Body').prop('text')).toEqual('-$50,00');
        expect(wrapper.find('Body').prop('type')).toEqual('text_warning');
    });
    it('Do not parse on string', () => {
        const props = {
            amount: 'My super string',
        };
        wrapper.setProps(props);
        expect(wrapper.find('Body').prop('text')).toEqual('My super string');
    });
    it('Have text with text_primary_2 if prop isPrimaryType is passed', () => {
        const props = {
            amount: -50,
            showNegativeSymbol: true,
            isPrimaryType: true,
        };
        wrapper.setProps(props);        
        expect(wrapper.find('Body').prop('type')).toEqual('text_primary_2');
    });
});