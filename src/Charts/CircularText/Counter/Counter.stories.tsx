import React from 'react';
import Counter from '.';

const someContent = 'Some content';

export default {
    title: 'Chart/CircularText/Counter',
    component: Counter,
};

export const CounterStory = args => (
    <div style={{width: 'min-content'}}>
        <Counter {...args} />
    </div>
);
CounterStory.args = {
    inverseAnimation: false,
    primaryProgress: 0.3,
    secondaryProgress: 0.7,
    status: 'OK',
    disableAnimation: false,
    children: someContent,
    onClick: () => alert('click me!'),
    tabIndex: 0,
    onKeyPress: () => alert('click me!'),
};
