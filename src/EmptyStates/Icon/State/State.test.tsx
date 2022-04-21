import React from 'react';
import {shallow} from 'enzyme';
import State from './State';
import Label from '../../../Labels/Background/Label/Label';
import Title from '../../../TextCatalog/TITLE';
import Sub from '../../../TextCatalog/SUB';
import NotificationInfo from '../../../Illustrations/104/NotificationInfo';

const mockData = {
    title: 'Crédito de recargas',
    description:
        'Podés usar tu saldo de Recarga para llamar, navegar y mensajear a donde quieras: comprar packs, servicios y contenidos y pasarle saldo a otro Movistar. También podes Multiplicar el día que quieras.',
    labelText: 'VENCIDO',
};

it('is truthy', () => {
    expect(State).toBeTruthy();
});
it('Have all the components', () => {
    const wrapper = shallow(
        <State
            labelText={mockData.labelText}
            labelCategory={'First'}
            icon={'NotificationInfo'}
            description={mockData.description}
            title={mockData.title}
        />
    );
    expect(wrapper.children().first().children().type()).toEqual(NotificationInfo);
    expect(wrapper.find(Label).length).toEqual(1);
    expect(wrapper.find(Title).length).toEqual(1);
    expect(wrapper.find(Sub).length).toEqual(1);
});

it('Have all the components right', () => {
    const wrapper = shallow(
        <State
            labelText={mockData.labelText}
            labelCategory={'First'}
            icon={'NotificationInfo'}
            description={mockData.description}
            title={mockData.title}
        />
    );
    expect(wrapper.children().first().children().text()).toEqual('<NotificationInfo />');
    expect(wrapper.find(Label).prop('text')).toEqual(mockData.labelText);
    expect(wrapper.find(Label).prop('category')).toEqual('First');
    expect(wrapper.find(Title).prop('text')).toEqual(mockData.title);
    expect(wrapper.find(Sub).prop('text')).toEqual(mockData.description);
});
