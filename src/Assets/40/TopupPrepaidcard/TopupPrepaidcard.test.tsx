import React from 'react';
import {shallow} from 'enzyme';
import TopupPrepaidcard from './TopupPrepaidcard';

it('TopupPrepaidcard is an svg', () => {
    const wrapper = shallow(<TopupPrepaidcard />);
    expect(wrapper.type()).toEqual('svg');
});
