import React from 'react';
import {shallow} from 'enzyme';
import Paragraph16 from './Paragraph16';
import Body from '../../../../TextCatalog/BODY';

const defaultProps = {
    text: 'Yeaah',
    type: 'text_secondary',
};
it('is truthy', () => {
    expect(Paragraph16).toBeTruthy();
});
it('renders every component', () => {
    const wrapper = shallow(<Paragraph16 {...defaultProps} />);
    expect(wrapper.find(Body)).toHaveLength(1);
    expect(wrapper.find(Body).prop('text')).toEqual(defaultProps.text);
    expect(wrapper.find(Body).prop('type')).toContain(defaultProps.type);
});
