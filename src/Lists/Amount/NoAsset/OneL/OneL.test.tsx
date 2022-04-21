import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import OneL from './OneL';
import Amount from '../../../../Resources/ListsAmount/Right/Amount';
import Primary16R from '../../../../Resources/ListsAmount/Left/Primary16R';
import Right from '../../../../Assets/24/Chevron/Right'
import SlimLineCentered from '../../../../Dividers/SlimLineCentered';

const wrapper: ShallowWrapper = shallow(<OneL title='Yeaah' amount={33} />);
describe('OneL tests', () => {

    it('Have Amount', () => {
        expect(wrapper.find(Amount).length).toEqual(1);
        expect(wrapper.find(Amount).prop('amount')).toEqual(33);
    });

    it('Have Primary16R', () => {
        expect(wrapper.find(Primary16R).length).toEqual(1);
        expect(wrapper.find(Primary16R).prop('text')).toEqual('Yeaah');
    });

    it('Have Right Arrow', () => {
        const props =  {
            showArrow: true,
        };
        wrapper.setProps(props);
        expect(wrapper.find(Right).length).toEqual(1);
        props.showArrow = false;
        wrapper.setProps(props);
    })

    it('Hide Right Arrow', () => {
        expect(wrapper.find(Right).length).toEqual(0);
    })

    it('Have SlimLineCentered', () => {
        expect(wrapper.find(SlimLineCentered).length).toEqual(1);
    });

    it('Hide SlimLineCentered', () => {
        const props =  {
            hideLine: true,
        };
        wrapper.setProps(props);
        expect(wrapper.find(SlimLineCentered).length).toEqual(0);
        props.hideLine = false;
        wrapper.setProps(props);
    });

    it('Have AmountType', () => {
        const props =  {
            isAmountType: true,
        };
        wrapper.setProps(props);
        expect(wrapper.find('AmountType')).toHaveLength(1);
    });

});