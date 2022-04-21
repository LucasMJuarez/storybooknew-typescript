import React from 'react';
import ChipMenu from './ChipMenu';
import Chips from '../../Resources/Chips/Chips'


export default {
    title: 'Menu/ChipMenu',
    component: ChipMenu,
};

export const ChipMenuDefault = (args) => (
    <ChipMenu {...args}>
        <Chips
            title='PLAN IDEAL'
            showIcon={true}
            isSelected={true}
            onClick={() => { 'Is pressed' }}
        />
        <Chips
            title='5GB'
            showIcon={true}
            isSelected={false}
            onClick={() => { 'Is pressed' }}
        />
        <Chips
            title='8GB'
            showIcon={true}
            isSelected={false}
            onClick={() => { 'Is pressed ' }}
        />
    </ChipMenu>
)