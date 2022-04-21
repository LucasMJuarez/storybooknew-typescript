/**
 * @jest-environment jsdom
 */
import React from 'react';
import {mount} from 'enzyme';
import ListAssetBase from '.';
import Icon from '../../../../Assets/40/AssetOrchester';
import Title from '../../../../Resources/ListsAmount/Left/Primary16R';
import Description from '../../../../Resources/ListsAmount/Left/Secondary14R';
import Amount from '../../../../Resources/ListsAmount/Right/Amount';
import Divider from '../../../../Dividers/SlimLineCentered';
import Info from '../../../../Resources/ListsAmount/Right/Info';
import Label from '../../../../Labels/Background/Label';
it('is truthy', () => {
    expect(ListAssetBase).toBeTruthy();
});
const mock = jest.fn();
it("renders correct child components'", () => {
    const wrapper = mount(
        <ListAssetBase asset='AskTopupBalance' title='My Title' description='My Description' amount={-33} />
    );
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Description)).toHaveLength(1);
    expect(wrapper.find(Amount)).toHaveLength(1);
    expect(wrapper.find(Label)).toHaveLength(0);
    expect(wrapper.find(Divider)).toHaveLength(1);
    expect(wrapper.find(Info)).toHaveLength(0);
    wrapper.simulate('click');
    expect(mock).toHaveBeenCalledTimes(0);
});

it("renders correct child components on touchable state'", () => {
    const wrapper = mount(
        <ListAssetBase
            touchable={true}
            onClick={mock}
            asset='AskTopupBalance'
            title='My Title'
            description='My Description'
            amount={-33}
        />
    );
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Description)).toHaveLength(1);
    expect(wrapper.find(Amount)).toHaveLength(1);
    expect(wrapper.find(Divider)).toHaveLength(1);
    expect(wrapper.find(Label)).toHaveLength(0);
    expect(wrapper.find(Info)).toHaveLength(1);
    wrapper.simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
});

it("renders correct child components on label and description'", () => {
    const wrapper = mount(
        <ListAssetBase
            touchable={true}
            onClick={mock}
            asset='AskTopupBalance'
            title='My Title'
            description='My Description'
            labelText='My Label'
            labelCategory='Fifth'
            amount={-33}
        />
    );
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Description)).toHaveLength(1);
    expect(wrapper.find(Amount)).toHaveLength(1);
    expect(wrapper.find(Divider)).toHaveLength(1);
    expect(wrapper.find(Info)).toHaveLength(1);
    expect(wrapper.find(Label)).toHaveLength(1);
    expect(wrapper.find(Label).prop('text')).toEqual('My Label');
    expect(wrapper.find(Label).prop('category')).toEqual('Fifth');
    wrapper.simulate('click');
    expect(mock).toHaveBeenCalledTimes(2);
});

it('renders correct child components on label and description and no touchable', () => {
    const wrapper = mount(
        <ListAssetBase
            asset='AskTopupBalance'
            title='My Title'
            description='My Description'
            labelText='My Label'
            amount={-33}
        />
    );
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Description)).toHaveLength(1);
    expect(wrapper.find(Amount)).toHaveLength(1);
    expect(wrapper.find(Divider)).toHaveLength(1);
    expect(wrapper.find(Label)).toHaveLength(1);
    expect(wrapper.find(Info)).toHaveLength(0);
    expect(wrapper.find(Label).prop('category')).toEqual('First');
    wrapper.simulate('click');
    expect(mock).toHaveBeenCalledTimes(2);
});

it('renders correct child components with no label or description', () => {
    const wrapper = mount(<ListAssetBase asset='AskTopupBalance' title='My Title' amount={-33} />);
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Description)).toHaveLength(0);
    expect(wrapper.find(Amount)).toHaveLength(1);
    expect(wrapper.find(Divider)).toHaveLength(1);
    expect(wrapper.find(Label)).toHaveLength(0);
    expect(wrapper.find(Info)).toHaveLength(0);
    wrapper.simulate('click');
    expect(mock).toHaveBeenCalledTimes(2);
});
