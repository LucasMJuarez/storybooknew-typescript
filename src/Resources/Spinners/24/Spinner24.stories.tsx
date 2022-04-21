import React from 'react';
import Spinner24 from './Spinner24';

export default {
    title: 'Resources/Spinners/24',
    component: Spinner24,
};

export const Inverse = () => (
    <div style={{backgroundColor: 'grey'}}>
        <Spinner24 inverse />
    </div>
);

export const Color = () => <Spinner24 />;

export const SpinnerBlue = (args: {inverse: boolean; blue?: boolean}) => (
    <div style={args.inverse ? {backgroundColor: 'grey'} : {}}>
        <Spinner24 inverse={args.inverse} blue={args.blue} />
    </div>
);
