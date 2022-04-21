import { shallow } from "enzyme";
import React from "react";
import BulletListScreen from '.';
import Checkbox from "../../../Controls/Checkbox";
import Paragraph14 from "../../../Texts/Basics/Left/Paragraph14";
import SectionTitle from "../../../Texts/Basics/Left/SectionTitle";

const defaultProps = {
  title: 'Test title',
  description: 'Test description',
  items: ['Test item1', 'Test item2'],
}

it('renders every component', () => {
  const wrapper = shallow(<BulletListScreen {...defaultProps} />);
  expect(wrapper.find(SectionTitle)).toHaveLength(1);
  expect(wrapper.find(Paragraph14)).toHaveLength(1);
  expect(wrapper.find(Checkbox)).toHaveLength(2);
});

it('renders without title or description and one item', () => {
  const wrapper = shallow(<BulletListScreen items={['Test item1']}/>);
  expect(wrapper.find(SectionTitle)).toHaveLength(0);
  expect(wrapper.find(Paragraph14)).toHaveLength(0);
  expect(wrapper.find(Checkbox)).toHaveLength(1);
});