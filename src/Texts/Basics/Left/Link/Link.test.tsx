import React from 'react';
import {shallow} from 'enzyme';
import Link from './Link';
import Sub from '../../../../TextCatalog/SUB';

const clickMock = jest.fn();

const defaultProps = {
    text: 'Ver planes más bajos',
    type: 'text_link_2',
};
it('is truthy', () => {
    expect(Link).toBeTruthy();
});
it('renders every component', () => {
    const wrapper = shallow(<Link onClick={clickMock} {...defaultProps} />);
    expect(wrapper.find(Sub)).toHaveLength(1);
    expect(wrapper.find(Sub).prop('text')).toEqual(defaultProps.text);
    expect(wrapper.find(Sub).prop('type')).toContain(defaultProps.type);
});
