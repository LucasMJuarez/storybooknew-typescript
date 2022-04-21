import React from 'react';
import {shallow} from 'enzyme';
import TwoLPrice from './TwoLPrice';
import SlimLineCentered from '../../../../Dividers/SlimLineCentered';
import Sub from '../../../../TextCatalog/SUB';
import Body from '../../../../TextCatalog/BODY';

it('Have Primary16R', () => {
    const wrapper = shallow(<TwoLPrice title='Nombre' information='Distancia' hideLine={true} secondary='Direccion' />);
    expect(wrapper.find(Body).length).toEqual(1);
    expect(wrapper.find(Body).prop('text')).toEqual('Nombre');
});

it('Have Secondary14R', () => {
    const wrapper = shallow(<TwoLPrice title='Nombre' information='Distancia' hideLine={true} secondary='Direccion' />);
    expect(wrapper.find(Sub).length).toEqual(1);
    expect(wrapper.find(Sub).prop('text')).toEqual('Direccion');
});

it('Have SlimLineCentered', () => {
    const wrapper = shallow(
        <TwoLPrice title='Nombre' information='Distancia' hideLine={false} secondary='Direccion' />
    );
    expect(wrapper.find(SlimLineCentered).length).toEqual(1);
});
