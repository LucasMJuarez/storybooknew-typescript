import React from 'react';
import ButtonLinkFeedback from './ButtonLink';

export default {
    title: 'Feedbacks/SuccessScreen/ButtonLink',
    component: ButtonLinkFeedback,
};

export const SuccessFeedback = (args: {
    title: string;
    description: string;
    buttonLabel: string;
    onClick: Function;
    onClickLink: Function;
    terminosText: string;
    assetId: boolean;
}) => (
    <ButtonLinkFeedback
        title={args.title}
        description={args.description}
        buttonLabel={args.buttonLabel}
        onClick={() => alert('My Super Success')}
        onClickLink={() => alert('My Super Success')}
        terminosText={args.terminosText}
        assetId={args.assetId}
    />
);

SuccessFeedback.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
    buttonLabel: {control: 'text'},
    terminosText: {control: 'text'},
    assetId: {control: 'boolean'},
};

SuccessFeedback.args = {
    title: 'My Success Message',
    description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, non nobis nesciunt ipsum dolores, eligendi ',
    buttonLabel: 'Click me!',
    terminosText: 'By clicking on the button, you agree to the ',
    assetId: false,
};
