import React from 'react';
import NavBarTitle from '.';

export default {
    title: 'Resources/NavBar/Left/Title',
    component: NavBarTitle,
};

export const NavBarTitleStorie = (args: {text: string}) => (
    <div style={{backgroundColor: '#000'}}>
        <NavBarTitle text={args.text} />
    </div>
);

NavBarTitleStorie.argTypes = {
    text: {control: 'text'},
};

NavBarTitleStorie.args = {
    text: 'My Super Test',
};
