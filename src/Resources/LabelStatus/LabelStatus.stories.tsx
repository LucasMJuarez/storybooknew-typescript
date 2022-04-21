import React from 'react';
import LabelStatus from '.';

export default {
    title: 'Resources/LabelStatus',
    component: LabelStatus,
};

export const LabelStatusStorie = (args: { title: string, labelText: string }) =>
    <LabelStatus title={args.title} category='First' labelText={args.labelText} />;

LabelStatusStorie.argTypes = {
    title: { control: 'text' },
    labelText: { control: 'text' },
};

LabelStatusStorie.args = {
    title: 'My Super Test',
    labelText: 'ACTIVO',
};
