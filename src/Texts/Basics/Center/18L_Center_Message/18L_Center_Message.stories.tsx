import React from 'react';
import CenterMessage18L from '.';

export default {
    title: 'Texts/Basics/Center/18L_Center_Message',
    component: CenterMessage18L,
};

export const CenterMessage18LStorie = (args: {text: string}) => <CenterMessage18L text={args.text} />;

CenterMessage18LStorie.argTypes = {
    text: {control: 'text'},
};

CenterMessage18LStorie.args = {
    text: 'Terminamos de trabajar en tu caso. El área técnica resolvió tu inconveniente y cerro tu reclamo',
};
