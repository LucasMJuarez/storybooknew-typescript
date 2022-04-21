import React from 'react';
import Image from '.';

export default {
    title: 'Cards/Image',
    component: Image,
};

export const ImageStory = (args: {
    url: string;
    alt: string;
    onClick?: Function;
    tabIndex?: number;
    onKeyPress?: React.KeyboardEventHandler;
}) => (
    <div style={{width: 'calc(329px + 40px)'}}>
        <Image {...args} />
    </div>
);

ImageStory.args = {
    url: 'https://via.placeholder.com/329x160.png',
    alt: 'Hehee',
    onClick: () => alert('click me!'),
    tabIndex: 0,
    onKeyPress: () => alert('click me!'),
};
