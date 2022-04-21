import React from 'react';
import CircularText from '.';

export default {
    title: 'Chart/CircularText',
    component: CircularText,
};

export const CircularTextStory = args => (
    <div style={{width: 'min-content'}}>
        <CircularText {...args} />
    </div>
);
CircularTextStory.args = {
    inverseAnimation: false,
    primaryProgress: 0.3,
    secondaryProgress: 0.7,
    status: 'OK',
    disableAnimation: false,
    size: 160,
    onClick: () => alert('HEHEE'),
    centerText: 'ITEM 28L',
    headerText: 'Item 12R',
    bottomText: 'Item 12R',
    tabIndex: 0,
    onKeyPress: () => alert('HEHEE'),
};
