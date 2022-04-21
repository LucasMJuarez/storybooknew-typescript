import React from 'react';
import Spinner72 from './Spinner72';

export default {
    title: 'Resources/Spinners/72',
    component: Spinner72,
};

export const Inverse = () => (
    <div style={{backgroundColor: 'grey'}}>
        <Spinner72 inverse />
    </div>
);

export const Color = () => <Spinner72 />;
