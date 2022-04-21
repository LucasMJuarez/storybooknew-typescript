import React from 'react';
import {shallow} from 'enzyme';
import Paragraph14 from './Paragraph14';
import Sub from '../../../../TextCatalog/SUB';

const defaultProps = {
    text: 'Yeaah',
    type: 'text_secondary',
};
it('is truthy', () => {
    expect(Paragraph14).toBeTruthy();
});
it('renders every component', () => {
    const wrapper = shallow(<Paragraph14 {...defaultProps} />);
    expect(wrapper.find(Sub)).toHaveLength(1);
    expect(wrapper.find(Sub).prop('text')).toEqual(defaultProps.text);
    expect(wrapper.find(Sub).prop('type')).toContain(defaultProps.type);
});
