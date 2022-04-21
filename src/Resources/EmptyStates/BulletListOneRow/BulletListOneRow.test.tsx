import { shallow } from "enzyme";
import React from "react";
import BulletListOneRow, { BulletListOneRowProps } from './BulletListOneRow';
import Checkbox from "../../../Controls/Checkbox";
import Sub from "../../../TextCatalog/SUB/Sub";
import { colors } from '../../../styles';

const text = 'Test title';
const color = 'red';
const defaultProps: BulletListOneRowProps = {
    text: text,
    checkboxColor: color,
}

describe('BulletListOneRow tests', () => {

    const wrapper = shallow(<BulletListOneRow {...defaultProps} />);

    it('renders every component', () => {
        expect(wrapper.find(Sub)).toHaveLength(1);
        expect(wrapper.find(Checkbox)).toHaveLength(1);
    });

    it('Sub hast props text', () => {
        expect(wrapper.find('Sub').prop('text')).toEqual(text);
    })

    it('Checkbox hast a specific color', () => {
        expect(wrapper.find('Checkbox').prop('checkboxColor')).toEqual(color);
    })

})