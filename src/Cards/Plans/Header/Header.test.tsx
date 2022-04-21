import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Label from '../../../Labels/Background/Label';
import TITLE from '../../../TextCatalog/TITLE';
import DISPLAY from '../../../TextCatalog/DISPLAY';
import { labelCategoryEnum } from '../../../Labels/Background/Label/Label'
import styles from './Header.styles';

const categoryLabel: labelCategoryEnum = 'Seventh'
const propsWithLabel = {
    showLabel: true,
    textLabel: '30% OFF X 12 MESES',
    categoryLabel: categoryLabel,
    textTitle: 'Plan Control',
    textDisplay: '5GB'
};

const propsWithoutLabel = {
    showLabel: false,
    textLabel: '30% OFF X 12 MESES',
    categoryLabel: categoryLabel,
    textTitle: 'Plan Control',
    textDisplay: '5GB'
};


describe('Testing component <Header />', () => {
    it('is truthy', () => {
        expect(Header).toBeTruthy();
    });
    it('renders every component', () => {
        const wrapper = shallow(<Header {...propsWithLabel} />);
        expect(wrapper.find(Label).exists()).toBeTruthy();
        expect(wrapper.find(TITLE).exists()).toBeTruthy();
        expect(wrapper.find(DISPLAY).exists()).toBeTruthy();
    });

    it('renders without component Label', () => {
        const wrapper = shallow(<Header {...propsWithoutLabel} />);
        expect(wrapper.find(Label).exists()).toBeFalsy();
    });

    it('Text LABEL is correct', () => {
        const wrapper = shallow(<Header {...propsWithLabel} />);
        expect(wrapper.find(Label).prop('text')).toEqual('30% OFF X 12 MESES');
    });

    it('Text TITLE is correct', () => {
        const wrapper = shallow(<Header {...propsWithLabel} />);
        expect(wrapper.find(TITLE).prop('text')).toEqual('Plan Control');
    });


    it('Text DISPLAY is correct', () => {
        const wrapper = shallow(<Header {...propsWithLabel} />);
        expect(wrapper.find(DISPLAY).prop('text')).toEqual('5GB');
    });

    it('Wrapper Style with Label Visible', () => {
        const wrapper = shallow(<Header {...propsWithoutLabel} />);
        const wrapperWithoutLabel = styles.titleHideLabel;
        expect(wrapper.find('[data-testid="wrapper-title"]').props().className).toContain(wrapperWithoutLabel);
    });


    it('Wrapper Style with hiden Label', () => {
        const wrapper = shallow(<Header {...propsWithLabel} />);
        const wrapperWithLabel = styles.title;
        expect(wrapper.find('[data-testid="wrapper-title"]').props().className).toContain(wrapperWithLabel);
    });
});
