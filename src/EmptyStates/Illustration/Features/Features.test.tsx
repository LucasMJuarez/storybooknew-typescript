import React from 'react';
import { shallow } from 'enzyme';
import Title from '../../../TextCatalog/TITLE';
import Bullet from '../../../Cards/Plans/List/Bullet';
import Features from '.';
import TwoButton from '../../../Buttons/ButtonLayouts/ButtonFullwidthLayout/2Buttons/TwoButton';
import PlanPospago from '../../../Illustrations/PlanPospago';

const mockData = {
    title: '¡Con tu nuevo plan estás más conectado!',
    children: (
        <Bullet
            text='Mira películas y series gratis con Movistar Play'
            asset='IdealChip'
            isActive={true}
        />
    ),
    textPrimaryButton: 'Ingresar email para factura digital',
    textSecondaryButton: 'Volver a mi linea',
    onClickPrimaryButton: () => alert('Click me!'),
    onClickSecondaryButton: () => alert('Click me!')
};

it('is truthy', () => {
    expect(Features).toBeTruthy();
});
it('Have all the components', () => {
    const wrapper = shallow(
        <Features
            title={mockData.title}
            children={mockData.children}
            textPrimaryButton={mockData.textPrimaryButton}
            textSecondaryButton={mockData.textSecondaryButton}
            onClickPrimaryButton={mockData.onClickPrimaryButton}
            onClickSecondaryButton={mockData.onClickSecondaryButton}
        />
    );
    expect(wrapper.find(PlanPospago).length).toEqual(1);
    expect(wrapper.find(Title).length).toEqual(1);
    expect(wrapper.find(TwoButton).length).toEqual(1);
});