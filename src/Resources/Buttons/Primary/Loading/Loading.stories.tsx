import React from 'react';
import Loading from './Loading';
export default {
    title: 'Resources/Buttons/Primary/Loading',
    component: Loading,
};

export const LoadingStory = (args: {inverse?: boolean; blue?: boolean}) => (
    <Loading blue={args.blue} inverse={args.inverse} />
);
