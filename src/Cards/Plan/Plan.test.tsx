import React from 'react';
import {shallow} from 'enzyme';
import Plan, {MovistarImg} from './Plan';
import Tag from '../../Labels/Background/Tag';
import Headline from '../../TextCatalog/HEADLINE/Headline';
import Body from '../../TextCatalog/BODY/Body';

const mockFn = jest.fn();
const defaultProps = {
    title: 'Title information',
    description: 'Description information',
    tags: ['Plan'],
    maxTags: 2
};

describe('Testing component <Plan />', () => {
    it('is truthy', () => {
        expect(Plan).toBeTruthy();
    });
    it('renders every component', () => {
        const wrapper = shallow(<Plan {...defaultProps} />);
        expect(wrapper.find(Headline)).toHaveLength(1);
        expect(wrapper.find(Body)).toHaveLength(1);
        expect(wrapper.find(Tag)).toHaveLength(1);
        expect(wrapper.find(MovistarImg)).toHaveLength(1);
    });
    it('Check onClick props', () => {
        const wrapper = shallow(<Plan title={''} tags={[]} onClick={mockFn} />);
        wrapper.find('[data-testid="card-wrapper"]').simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
    it('check default maxTags', () => {
        const wrapper = shallow(<Plan title='Hola!' tags={['Plan', 'Plan', 'Plan']} />);
        expect(wrapper.find(Tag)).toHaveLength(2);
    });
    it('renders every inside MovistarImg', () => {
        const wrapper = shallow(<MovistarImg />);
        expect(wrapper.find('svg')).toHaveLength(1);
        expect(wrapper.find('path')).toHaveLength(1);
    });
});
