import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import Title from '../../../TextCatalog/TITLE';
import Sub from '../../../TextCatalog/SUB';
import NotificationInfo from '../../../Illustrations/104/NotificationInfo';
import BulletList from '../../../Resources/EmptyStates/BulletList';
import EmptyError from '../../../Illustrations/EmptyError';
import EmptyData from '../../../Illustrations/104/EmptyData';
import Primary from '../../../Buttons/Primary/Primary';

const mockOnClick = jest.fn();

const mockData = {
    title: 'Crédito de recargas',
    description:
        'Podés usar tu saldo de Recarga para llamar, navegar y mensajear a donde quieras: comprar packs, servicios y contenidos y pasarle saldo a otro Movistar. También podes Multiplicar el día que quieras.',
    bulletList: ['element1', 'element2s'],
    typeDescription: 'text_primary',
    labelButton: 'Primary Button',
    onClick: mockOnClick
};

it('is truthy', () => {
    expect(Button).toBeTruthy();
});

it('Have all the components', () => {
    const wrapper = shallow(
        <Button
            icon={'NotificationInfo'}
            description={mockData.description}
            title={mockData.title}
            labelButton={mockData.labelButton}
            onClick={mockData.onClick}
        />
    );
    expect(wrapper.children().first().children().type()).toEqual(NotificationInfo);
    expect(wrapper.find(Title).length).toEqual(1);
    expect(wrapper.find(Sub).length).toEqual(1);
});

it('Have all the components right', () => {
    const wrapper = shallow(
        <Button
            icon={'NotificationInfo'}
            description={mockData.description}
            title={mockData.title}
            labelButton={mockData.labelButton}
            onClick={mockData.onClick}
        />
    );
    expect(wrapper.children().first().children().text()).toEqual('<NotificationInfo />');
    expect(wrapper.find(Title).prop('text')).toEqual(mockData.title);
    expect(wrapper.find(Sub).prop('text')).toEqual(mockData.description);
});

it('Button with BulletList', () => {
    const wrapper = shallow(
        <Button
            icon={'NotificationInfo'}
            description={mockData.description}
            title={mockData.title}
            bulletList={mockData.bulletList}
            labelButton={mockData.labelButton}
            onClick={mockData.onClick}
        />
    );
    expect(wrapper.find(BulletList)).toHaveLength(1);
    expect(wrapper.find(BulletList).prop('title')).toBe(undefined);
    expect(wrapper.find(BulletList).prop('description')).toBe(undefined);
    expect(wrapper.find(BulletList).prop('items')).toBe(mockData.bulletList);
});

it('Button without BulletList', () => {
    const wrapper = shallow(
        <Button
            icon={'NotificationInfo'}
            description={mockData.description}
            title={mockData.title}
            labelButton={mockData.labelButton}
            onClick={mockData.onClick}
        />
    );
    expect(wrapper.find(BulletList)).toHaveLength(1);
    expect(wrapper.find(BulletList).prop('title')).toBe(undefined);
    expect(wrapper.find(BulletList).prop('description')).toBe(undefined);
    expect(wrapper.find(BulletList).prop('items')).toStrictEqual([]);
});

it('Button with Icon EmptyError', () => {
    const wrapper = shallow(
        <Button
            icon={'EmptyError'}
            description={mockData.description}
            title={mockData.title}
            labelButton={mockData.labelButton}
            onClick={mockData.onClick}
        />
    );
    expect(wrapper.find(EmptyError)).toHaveLength(1);
});

it('Button with Icon EmptyData', () => {
    const wrapper = shallow(
        <Button
            icon={'EmptyData'}
            description={mockData.description}
            title={mockData.title}
            labelButton={mockData.labelButton}
            onClick={mockData.onClick}
        />
    );
    expect(wrapper.find(EmptyData)).toHaveLength(1);
});

it('Button with description type text_primary', () => {
    const wrapper = shallow(
        <Button
            icon={'EmptyData'}
            description={mockData.description}
            title={mockData.title}
            typeDescription={'text_primary'}
            labelButton={mockData.labelButton}
            onClick={mockData.onClick}
        />
    );
    expect(wrapper.find(Sub).prop('type')).toBe(mockData.typeDescription);
});

it('Button with description default type ', () => {
    const wrapper = shallow(
        <Button
            icon={'EmptyData'}
            description={mockData.description}
            title={mockData.title}
            labelButton={mockData.labelButton}
            onClick={mockData.onClick}
        />
    );
    expect(wrapper.find(Sub).prop('type')).toBe('text_secondary');
});

it('Button without title prop', () => {
    const wrapper = shallow(
        <Button
            icon={'EmptyData'}
            description={mockData.description}
            labelButton={mockData.labelButton}
            onClick={mockData.onClick}
        />
    );
    expect(wrapper.find(Title)).toHaveLength(0);
});

it('Button with primary button', () => {
    const wrapper = shallow(
        <Button
            icon={'EmptyData'}
            description={mockData.description}
            labelButton={mockData.labelButton}
            onClick={mockData.onClick}
        />
    );
    expect(wrapper.find(Primary)).toHaveLength(1);
    expect(wrapper.find(Primary).prop('text')).toBe(mockData.labelButton);
    expect(wrapper.find(Primary).prop('onClick')).toBe(mockData.onClick);
    wrapper.find(Primary).simulate('click');
    expect(mockOnClick).toBeCalled();
});
