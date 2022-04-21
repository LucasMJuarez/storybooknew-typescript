import React from 'react';
import {shallow} from 'enzyme';
import ModuleInformative from './ModuleInformative';
import Title from '../../TextCatalog/TITLE';
import Sub from '../../TextCatalog/SUB';
import Button from '../../Buttons/Primary';

const mockOnClick = jest.fn();

const wrapper = shallow(
    <ModuleInformative
        icon='Gift'
        onClick={mockOnClick}
        title={'Te regalamos $600 en tu plan móvil por 12 meses.'}
        description={'Conectate con un asesor y activá este beneficio'}
        labelButton={'Ir a WhastApp'}
    />
);
it('renders every component', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Sub)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
});
