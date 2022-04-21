import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';
import WithoutRecomendations from '../../../Illustrations/WithoutRecomendations';
import Title from '../../../TextCatalog/TITLE';
import Sub from '../../../TextCatalog/SUB';

const mockData = {
    title: 'Consulta tu servicio en la web ',
    description:
        'Muy pronto vas a poder gestionar tu línea fija en esta App. Mientras tanto, hacé tu consulta sobre tu línea fija o servicio de Internet en Mi Cuenta Empresas.',
};

it('is truthy', () => {
    expect(Button).toBeTruthy();
});
it('Have all the components', () => {
    const wrapper = shallow(
        <Button title={mockData.title} description={mockData.description} image={'WithoutRecomendations'} />
    );
    expect(wrapper.children().first().type()).toEqual(WithoutRecomendations);
    expect(wrapper.find(Title).length).toEqual(1);
    expect(wrapper.find(Sub).length).toEqual(1);
});

it('Have all the components right', () => {
    const wrapper = shallow(
        <Button title={mockData.title} description={mockData.description} image={'WithoutRecomendations'} />
    );
    expect(wrapper.children().first().text()).toEqual('<WithoutRecomendations />');
    expect(wrapper.find(Title).prop('text')).toEqual(mockData.title);
    expect(wrapper.find(Sub).prop('text')).toEqual(mockData.description);
});
