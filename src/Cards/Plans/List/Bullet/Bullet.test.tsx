import React from 'react';
import { shallow } from 'enzyme';
import Bullet from './Bullet';
import Sub from '../../../../TextCatalog/SUB';
import AssetOrchester from '../../../../Assets/24/AssetOrchester';
import styles from './Bullet.styles';

it('Have all the components', () => {
    const wrapper = shallow(<Bullet text='Yeaah' asset='AlertInfo' isActive={false} />);
    expect(wrapper.find(AssetOrchester).prop('asset')).toEqual('AlertInfo');
    expect(wrapper.find(Sub).exists()).toBeTruthy();
});

it('Sub render type text text_primary', () => {
    const wrapper = shallow(<Bullet text='Yeaah' asset='AlertInfo' isActive={true} />);
    expect(wrapper.find(Sub).prop('type')).toEqual('text_primary');
});

it("Sub render type text text_secondary_2", () => {
    const wrapper = shallow(<Bullet text='Yeaah' asset='AlertInfo' isActive={false} />);
    expect(wrapper.find(Sub).prop('type')).toEqual('text_secondary_2');
});