import React from 'react';
import BulletActive, { BulletActiveProps } from './BulletActive';

export default {
    title: 'Assets/24/BulletActive',
    component: BulletActive,
};

export const BulletActiveIcon = (args: BulletActiveProps) => (
    <BulletActive {...args}/>
);

BulletActiveIcon.args = {
    isGreen: false
}