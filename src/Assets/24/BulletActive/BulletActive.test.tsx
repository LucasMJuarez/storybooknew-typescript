import React from 'react';
import { shallow } from 'enzyme';
import BulletActive from './BulletActive';
import { colors } from '../../../styles';

describe('BulletActive test', () => {
    it('is an svg', () => {
        const wrapper = shallow(<BulletActive />);
        expect(wrapper.type()).toEqual('svg');
    });

    it('is 24x24', () => {
        const wrapper = shallow(<BulletActive />);
        expect(wrapper.prop('width')).toEqual('24');
        expect(wrapper.prop('height')).toEqual('25');
    });

    it('color default is movistar_blue', () => {
        const wrapper = shallow(<BulletActive />);
        expect(wrapper.find('path').prop('fill')).toEqual(colors.movistar_blue);
    });

    it('color default is movistar_green', () => {
        const wrapper = shallow(<BulletActive isGreen={true} />);
        expect(wrapper.find('path').prop('fill')).toEqual(colors.movistar_green);
    });
});