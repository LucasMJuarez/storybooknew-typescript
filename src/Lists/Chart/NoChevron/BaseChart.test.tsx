import React from 'react';
import {shallow} from 'enzyme';
import BaseChart from './BaseChart'
import Placeholder from '../../../Assets/Placeholder/36'

describe('Load correct Icons', () => {
    it ('Load Data Icon', () => {
        const wrapper = shallow(
            <BaseChart 
                text='Ilimitado'
                sub_primary ='Autorenovable Min Multidestino'
                sub_secondary ='Vence el 8 Nov'
                icon ='Data'
                value={60}
            />
        )

        expect(wrapper.find(Placeholder).prop('asset')).toEqual('Data')
    })

    it ('Load GSM Icon', () => {
        const wrapper = shallow(
            <BaseChart 
                text='Ilimitado'
                sub_primary ='Autorenovable Min Multidestino'
                sub_secondary ='Vence el 8 Nov'
                icon ='GSM_Green'
                value={60}
            />
        )

        expect(wrapper.find(Placeholder).prop('asset')).toEqual('GSM_Green')
    })

    it ('Load Sms Icon', () => {
        const wrapper = shallow(
            <BaseChart 
                text='Ilimitado'
                sub_primary ='Autorenovable Min Multidestino'
                sub_secondary ='Vence el 8 Nov'
                icon ='Sms'
                value={60}
            />
        )

        expect(wrapper.find(Placeholder).prop('asset')).toEqual('Sms')
    })
})