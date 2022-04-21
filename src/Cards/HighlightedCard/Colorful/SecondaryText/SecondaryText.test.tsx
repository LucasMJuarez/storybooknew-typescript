import React from 'react';
import {shallow} from 'enzyme';
import SecondaryText, {MovistarImg} from './SecondaryText';
import Sub from '../../../../TextCatalog/SUB';
import Title from '../../../../TextCatalog/TITLE';
import Small from '../../../../Buttons/Secondary/Small/Small';

let mockBtn = jest.fn();
const defaultProps = {
    title: '¿Querés cambiar de plan?',
    description: 'Te proponemos el mejor plan adaptado a tu consumo',
    btnText: 'cambiá de plan',
    onClick: mockBtn,
};

it('is truthy', () => {
    expect(SecondaryText).toBeTruthy();
});
it('renders every component', () => {
    const wrapper = shallow(<SecondaryText {...defaultProps} />);
    expect(wrapper.find(Sub)).toHaveLength(1);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Small)).toHaveLength(1);
    expect(wrapper.find(MovistarImg)).toHaveLength(1);
    expect(defaultProps.onClick.mock.calls.length).toEqual(0);
    wrapper.find(Small).simulate('click');
    expect(defaultProps.onClick.mock.calls.length).toEqual(1);
});
it('renders every MovistarImg', () => {
    const wrapper = shallow(<MovistarImg  />);
    expect(wrapper.find('svg')).toHaveLength(1);
    expect(wrapper.find('path')).toHaveLength(1);
});
