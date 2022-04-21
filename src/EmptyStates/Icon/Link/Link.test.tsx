import React from 'react';
import {shallow} from 'enzyme';
import Link from './Link';
import Title from '../../../TextCatalog/TITLE';
import Sub from '../../../TextCatalog/SUB';
import EmptyData from '../../../Illustrations/104/EmptyData';

const defaultProps = {
    title: 'My title',
    description: 'My Description',
};

it('renders every component', () => {
    const wrapper = shallow(<Link {...defaultProps} />);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Sub)).toHaveLength(1);
    expect(wrapper.find(EmptyData)).toHaveLength(1);
});
it('Have defaults', () => {
    const wrapper = shallow(<Link />);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Sub)).toHaveLength(1);
    expect(wrapper.find(EmptyData)).toHaveLength(1);
});
