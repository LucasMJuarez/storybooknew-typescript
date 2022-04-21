import React from 'react';
import { shallow } from 'enzyme';
import Highlight from './Highlight';
import Sub from '../../../../../TextCatalog/SUB';
import AssetOrchester from '../../../../../Assets/24/AssetOrchester';
import styles from './Highlight.styles';

it('Have all the components', () => {
    const wrapper = shallow(<Highlight text='Yeaah' asset='AlertInfo' />);
    expect(wrapper.find(AssetOrchester).prop('asset')).toEqual('AlertInfo');
    expect(wrapper.find(Sub).exists()).toBeTruthy();
});

it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Highlight text='Yeaah' asset='AlertInfo' />);
    expect(wrapper.find(Sub).prop('text')).toEqual('Yeaah');
});

it("Have style with background", () => {
    const wrapper = shallow(<Highlight text='Yeaah' asset='AlertInfo' isBackground={true} />);
    expect(wrapper.prop('className')).toEqual(styles.containerWithBackground);
});

it("Have style without background", () => {
    const wrapper = shallow(<Highlight text='Yeaah' asset='AlertInfo' />);
    expect(wrapper.prop('className')).toEqual(styles.containerWithoutBackground);
});
