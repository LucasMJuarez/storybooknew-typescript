import React from 'react';
import { shallow } from 'enzyme';
import SlimLineSpaces from './SlimLineSpaces';
import styles from './SlimLineSpaces.styles';

describe('Test SlimLineSpaces', () => {
    it('is truthy ', () => {
        expect(SlimLineSpaces).toBeTruthy();
    });
    it('Dont throw', () => {
        expect(() => shallow(<SlimLineSpaces />)).not.toThrow();
    });
    it('Have class', () => {
        const wrapper = shallow(<SlimLineSpaces />);
        expect(wrapper.prop('className')).toEqual(styles.SlimLineSpaces);
    });
})
