import React from 'react';
import {shallow} from 'enzyme';
import TitleSixteen from '.';
import styles from './TitleSixteen.styles';

it('is truthy', () => {
    expect(TitleSixteen).toBeTruthy();
});

it("Sould have text", () => {
    const texto = 'Un Texto';
    const {title} = styles;

    const wrapper = shallow(<TitleSixteen text={texto}/>);

    expect(wrapper.childAt(0).props().className).toContain(title);
    expect(wrapper.children().props().children).toContain(texto);
});