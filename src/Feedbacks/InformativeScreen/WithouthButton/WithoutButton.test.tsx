/**
 * @jest-environment jsdom
 */

import React from 'react';
import {shallow, mount} from 'enzyme';
import WithoutButtonScreen from '.';
import Title from '../../../TextCatalog/HEADLINE';
import Description from '../../../TextCatalog/TITLE';
import styles from './WithoutButton.styles';
import Loading from '../../../Resources/Buttons/Primary/Loading';

const defaultProps = {
    title: 'My title',
    description: 'My Description',
    loading: true,
};

it('renders every component', () => {
    const wrapper = shallow(<WithoutButtonScreen {...defaultProps} />);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Title).prop('text')).toEqual(defaultProps.title);
    expect(wrapper.find(Description)).toHaveLength(1);
    expect(wrapper.find(Description).prop('text')).toEqual(defaultProps.description);
    expect(wrapper.find(Loading)).toHaveLength(1);
});

it('renders every component', () => {
    const wrapper = shallow(<WithoutButtonScreen title='Hey!' description='Im a description' loading={false} />);
    expect(wrapper.find(Loading)).toHaveLength(0);
});

it('changes props for mobile screen size', () => {
    global.innerWidth = 400;
    const wrapperMobile = mount(<WithoutButtonScreen {...defaultProps} />);
    expect(wrapperMobile.children().prop('className')).toEqual(styles.containerWeb);
    expect(wrapperMobile.find(Title).prop('type')).toEqual('text_primary_special_1');
    expect(wrapperMobile.find(Description).prop('type')).toEqual('text_primary_special_1');
    expect(wrapperMobile.find(Loading).prop('inverse')).toBeTruthy();
});
it('changes props for desktop screen size', () => {
    global.innerWidth = 1000;
    const wrapperDesktop = mount(<WithoutButtonScreen {...defaultProps} />);
    expect(wrapperDesktop.children().prop('className')).toEqual(styles.containerWeb);
    expect(wrapperDesktop.find(Title).prop('type')).toEqual('text_primary');
    expect(wrapperDesktop.find(Description).prop('type')).toEqual('text_secondary');
    expect(wrapperDesktop.find(Loading).prop('inverse')).toBeFalsy();
});
