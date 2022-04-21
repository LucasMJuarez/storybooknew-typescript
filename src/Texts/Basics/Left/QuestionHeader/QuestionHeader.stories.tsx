import React from 'react';
import QuestionHeader, { QuestionHeaderProps } from './QuestionHeader';

export default {
    title: 'Texts/Basics/Left/QuestionHeader',
    component: QuestionHeader,
};

export const QuestionHeaderStorie = (args: QuestionHeaderProps) => <QuestionHeader {...args} text={args.text} />;

QuestionHeaderStorie.argTypes = {
    text: {control: 'text'},
    type: {control: 'boolean'},
};

QuestionHeaderStorie.args = {
    text: '¿Lorem ipsum dolor sit amet consectetur adipisicing eli cum commodi doloremque?',
    type: 'text_primary_special_1',
};
