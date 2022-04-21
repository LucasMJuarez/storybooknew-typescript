import React from 'react';
import BulletListOneRow, { BulletListOneRowProps } from './BulletListOneRow';

export default {
  title: 'Resources/EmptyStates/BulletListOneRow',
  component: BulletListOneRow,
};

export const BulletListOneRowScreen = (args: BulletListOneRowProps) => bulletListOneRow(args);

BulletListOneRowScreen.args = {
  text: 'Example of Bullet List One Row',
  checkboxColor: '#5BC500'
};

const bulletListOneRow = (args: BulletListOneRowProps) => {
  return(
    <BulletListOneRow {...args} />
  );
};