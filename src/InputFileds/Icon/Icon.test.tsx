import React from 'react';
import { mount, shallow } from 'enzyme';
import Icon from './Icon';
import styles from './Icon.styles';
import Caption from '../../TextCatalog/CAPTION';
import AssetOrchester from '../../Assets/24/AssetOrchester';

it('is truthy', () => {
    expect(Icon).toBeTruthy();
});

it('children is type form', () => {
    const wrapper = shallow(<Icon placeholder='Placeholder' asset='Mobile' title='Yeaah' />);
    expect(wrapper.children().type()).toEqual('form');
});

it('input name is equal to title prop', () => {
    const wrapper = shallow(<Icon placeholder='Placeholder' asset='Mobile' title='Yeaah' />);
    expect(wrapper.find('input').first().prop('name')).toEqual('Yeaah');
});

it('input onChange executes onChange prop', () => {
    const mockOnChange = jest.fn();
    const wrapper = shallow(<Icon onChange={() => mockOnChange()} placeholder='Placeholder' asset='Mobile' title='Yeaah' />);
    wrapper
        .find('input')
        .first()
        .simulate('change', { target: { value: 'a' } });
    expect(mockOnChange.mock.calls.length).toEqual(1);
    wrapper
        .find('input')
        .first()
        .simulate('change', { target: { value: 'e' } });
    wrapper
        .find('input')
        .first()
        .simulate('change', { target: { value: 'i' } });
    expect(mockOnChange.mock.calls.length).toEqual(3);
});

it('input onKeyDown executes onKeyDown prop', () => {
    const mockOnKeyDown = jest.fn();
    const wrapper = shallow(<Icon onKeyDown={() => mockOnKeyDown()} asset='Mobile' placeholder='Placeholder' title='Yeaah' />);
    wrapper.find('input').first().simulate('keydown', { keyCode: 13 });
    expect(mockOnKeyDown.mock.calls.length).toEqual(1);
    wrapper.find('input').first().simulate('keydown', { keyCode: 13 });
    wrapper.find('input').first().simulate('keydown', { keyCode: 13 });
    expect(mockOnKeyDown.mock.calls.length).toEqual(3);
});

it('input placeholder is equal to "" default', () => {
    const wrapper = shallow(<Icon placeholder='My Super Placeholder' asset='Mobile' title='Yeaah' />);
    expect(wrapper.find('input').prop('placeholder')).toEqual('');
});

it('input placeholder is equal to placeholder prop on focus', () => {
    const wrapper = shallow(<Icon placeholder='My Super Placeholder' asset='Mobile' title='Yeaah' />);
    wrapper.find('form').simulate('focus');
    expect(wrapper.find('input').prop('placeholder')).toEqual('My Super Placeholder');
});

it('input placeholder is equal to placeholder prop on blur and input value', () => {
    const wrapper = shallow(<Icon placeholder='My Super Placeholder' asset='Mobile' title='Yeaah' />);
    wrapper.find('form').simulate('focus');
    expect(wrapper.find('input').prop('placeholder')).toEqual('My Super Placeholder');
    wrapper.find('input').simulate('change', { target: { value: 'i' } });
    wrapper.find('form').simulate('blur');
    expect(wrapper.find('input').prop('placeholder')).toEqual('My Super Placeholder');
});

it('label is equal to title prop', () => {
    const wrapper = shallow(<Icon placeholder='My Super Placeholder' asset='Mobile' title='Yeaah' />);
    expect(wrapper.children().children().last().prop('children')).toEqual('Yeaah');
});

it('label is red on error prop', () => {
    const wrapper = shallow(<Icon error={true} asset='Mobile' placeholder='My Super Placeholder' title='Yeaah' />);
    expect(wrapper.children().children().last().prop('className')).toContain(styles.error);
});

it('render help text on help prop', () => {
    const wrapper = shallow(<Icon help='My Super Help' asset='Mobile' placeholder='My Super Placeholder' title='Yeaah' />);
    expect(wrapper.children().length).toEqual(2);
    expect(wrapper.children().last().children().type()).toEqual(Caption);
    expect(wrapper.children().last().children().prop('text')).toEqual('My Super Help');
    expect(wrapper.children().last().children().prop('type')).toEqual('text_secondary');
});

it('render red help text on help prop and error prop', () => {
    const wrapper = shallow(<Icon error help='My Super Help' asset='Mobile' placeholder='My Super Placeholder' title='Yeaah' />);
    expect(wrapper.children().last().children().prop('type')).toEqual('text_input_label_error');
});

it('add activeInput and activeLabel to input an label on focus, and remove them on blur', () => {
    const wrapper = shallow(<Icon placeholder='My Super Placeholder' asset='Mobile' title='Yeaah' />);
    wrapper.find('form').simulate('focus');
    expect(wrapper.find('input').prop('className')).toContain(styles.activeInput);
    expect(wrapper.find('form').children().last().prop('className')).toContain(styles.activeLabel);
    wrapper.find('form').simulate('blur');
    expect(wrapper.find('input').prop('className')).not.toContain(styles.activeInput);
    expect(wrapper.find('form').children().last().prop('className')).not.toContain(styles.activeLabel);
});

it('input onKeyDown passes event arg', () => {
    const mockOnKeyDown = jest.fn();
    const wrapper = shallow(<Icon onKeyDown={(e: any) => mockOnKeyDown(e)} asset='Mobile' placeholder='Placeholder' title='Yeaah' />);
    wrapper.find('input').first().simulate('keydown', { keyCode: 13 });
    expect(mockOnKeyDown.mock.calls.length).toEqual(1);
    expect(mockOnKeyDown.mock.calls[0][0].keyCode).toEqual(13);
});

it('input onKeyDown dont throw on prop onKeyDown = null', () => {
    const wrapper = shallow(<Icon placeholder='Placeholder' asset='Mobile' title='Yeaah' />);
    expect(() => wrapper.find('input').first().simulate('keydown', { keyCode: 13 })).not.toThrow();
});

it('value is My Value', () => {
    const wrapper = shallow(<Icon placeholder='Placeholder' asset='Mobile' title='Yeaah' value='My Value' />);
    expect(wrapper.find('input').first().prop('value')).toEqual('My Value');
});

it('value is empty', () => {
    const wrapper = shallow(<Icon placeholder='Placeholder' asset='Mobile' title='Yeaah' />);
    expect(wrapper.find('input').first().prop('value')).toEqual('');
});

it('pattern is passed to input', () => {
    const wrapper = shallow(<Icon placeholder='Placeholder' asset='Mobile' title='Yeaah' pattern='[0-9]*' />);
    expect(wrapper.find('input').first().prop('pattern')).toEqual('[0-9]*');
});

it('maxLength is passed to input', () => {
    const wrapper = shallow(<Icon placeholder='Placeholder' asset='Mobile' title='Yeaah' maxLength={16} />);
    expect(wrapper.find('input').first().prop('maxLength')).toEqual(16);
});

it('value fire useEffect', () => {
    const mock = jest.spyOn(React, 'useEffect');
    const wrapper = shallow(<Icon placeholder='Placeholder' asset='Mobile' title='Yeaah' value='My Value' />);
    mock.mock.calls[0][0]();
    expect(wrapper.find('input').first().prop('className')).toContain(styles.activeInput);
    expect(wrapper.find('form').children().last().prop('className')).toContain(styles.inactiveLabel);
});

it('Icon contains a AssetOrchester with asset prop Mobile', () => {
    const wrapper = shallow(<Icon placeholder='Placeholder' asset='Mobile' title='Yeaah' value='My Value' />);
    expect(wrapper.find(AssetOrchester)).toHaveLength(1);
    expect(wrapper.find(AssetOrchester).prop('asset')).toBe('Mobile');
});
