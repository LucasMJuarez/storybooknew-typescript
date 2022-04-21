import React from 'react';
import {shallow} from 'enzyme';
import WomanDesk from '../../../Illustrations/WomanDesk';
import Title from '../../../TextCatalog/TITLE';
import Sub from '../../../TextCatalog/SUB';
import ButtonDesk from '.';

const mockData = {
    title: 'Muy pronto vas a poder acceder a este <br>servicio desde nuestra APP',
    description:
        'Si sos quien administra todos los servicios de tu CUIT, podés gestionarlos desde nuestra Web Mi Cuenta Empresas. Si aún no accediste, contactá a tu asesor por WhatsApp.',
};

it('is truthy', () => {
    expect(ButtonDesk).toBeTruthy();
});
it('Have all the components', () => {
    const wrapper = shallow(
        <ButtonDesk title={mockData.title} description={mockData.description} image={'WomanDesk'} />
    );
    expect(wrapper.children().first().type()).toEqual(WomanDesk);
    expect(wrapper.find(Title).length).toEqual(1);
    expect(wrapper.find(Sub).length).toEqual(1);
});

it('Have all the components right', () => {
    const wrapper = shallow(
        <ButtonDesk title={mockData.title} description={mockData.description} image={'WomanDesk'} />
    );
    expect(wrapper.children().first().text()).toEqual('<WomanDesk />');
    expect(wrapper.find(Title).prop('text')).toEqual(mockData.title);
    expect(wrapper.find(Sub).prop('text')).toEqual(mockData.description);
});
