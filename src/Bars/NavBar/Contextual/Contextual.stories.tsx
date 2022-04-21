import React from 'react';
import Contextual from '.';

export default {
    title: 'Bars/NavBar/Contextual',
    component: Contextual,
};

export const WithButton = (args: {
    title: string;
    onBackButtonPress: Function;
    rightButtonText?: string;
    disabledRightButton?: boolean;
    onClickRightButton?: Function;
    tabIndex?: number;
    role?: string;
    onkeyPress?: React.KeyboardEventHandler;
}) => (
    <Contextual
        onBackButtonPress={args.onBackButtonPress}
        title={args.title}
        rightButtonText={args.rightButtonText}
        disabledRightButton={args.disabledRightButton}
        onClickRightButton={args.onClickRightButton}
        tabIndex={args.tabIndex}
        role={args.role}
        onkeyPress={args.onkeyPress}
    />
);

WithButton.argTypes = {
    title: {control: 'text'},
    rightButtonText: {control: 'text'},
    disabledRightButton: {control: 'boolean'},
};

WithButton.args = {
    title: 'My Super Test',
    onBackButtonPress: () => alert('Hello There'),
    rightButtonText: 'Listo',
    disabledRightButton: false,
    onClickRightButton: () => alert('Hello Right Button'),
    tabIndex: 0,
    role: 'string',
    onkeyPress: () => alert('Hello keypress'),
};

export const WithoutButton = (args: {title: string; onBackButtonPress: Function}) => (
    <Contextual onBackButtonPress={args.onBackButtonPress} title={args.title} />
);

WithoutButton.argTypes = {
    title: {control: 'text'},
};

WithoutButton.args = {
    title: 'My Super Test',
    onBackButtonPress: () => alert('Hello There'),
};

export const IsCloseButton = (args: {title: string; onBackButtonPress: Function; isCloseButton: boolean}) => (
    <Contextual onBackButtonPress={args.onBackButtonPress} title={args.title} isCloseButton={args.isCloseButton} />
);

IsCloseButton.argTypes = {
    title: {control: 'text'},
};

IsCloseButton.args = {
    title: 'My Super Test',
    isCloseButton: true,
    onBackButtonPress: () => alert('Hello There'),
};

export const hideBackButton = (args: {title: string; onBackButtonPress: Function; hideBackButton: boolean}) => (
    <Contextual onBackButtonPress={args.onBackButtonPress} title={args.title} hideBackButton={args.hideBackButton} />
);

hideBackButton.argTypes = {
    title: {control: 'text'},
};

hideBackButton.args = {
    title: 'My Super Test',
    hideBackButton: true,
    onBackButtonPress: () => alert('Hello There'),
};

export const withRightButton = (args: {
    title: string;
    onBackButtonPress: Function;
    hideBackButton: boolean;
    isAlertButton?: boolean;
    onClickRightButton?: Function;
}) => (
    <Contextual
        onBackButtonPress={args.onBackButtonPress}
        title={args.title}
        hideBackButton={args.hideBackButton}
        isAlertButton={args.isAlertButton}
        onClickRightButton={args.onClickRightButton}
    />
);

withRightButton.argTypes = {
    title: {control: 'text'},
    isAlertButton: {control: 'boolean'},
};

withRightButton.args = {
    title: 'My Super Test',
    hideBackButton: false,
    isAlertButton: true,
    onBackButtonPress: () => alert('Hello There'),
    onClickRightButton: () => alert('Hello Right Button'),
};

export const withRightButtonDownload = (args: {
    title: string;
    onBackButtonPress: Function;
    hideBackButton: boolean;
    isDownloaded?: boolean;
    onClickRightButton?: Function;
}) => (
    <Contextual
        onBackButtonPress={args.onBackButtonPress}
        title={args.title}
        hideBackButton={args.hideBackButton}
        isDownloaded={args.isDownloaded}
        onClickRightButton={args.onClickRightButton}
    />
);

withRightButtonDownload.argTypes = {
    title: {control: 'text'},
    isDownloaded: {control: 'boolean'},
};

withRightButtonDownload.args = {
    title: 'My Test Button Download',
    hideBackButton: false,
    isDownloaded: true,
    onBackButtonPress: () => alert('Hello There'),
    onClickRightButton: () => alert('Download Button'),
};

export const withRightButtonDownloadAndShared = (args: {
    title: string;
    onBackButtonPress: Function;
    hideBackButton: boolean;
    isDownloaded?: boolean;
    isShared?: boolean;
    onClickRightButton?: Function;
    onClickSecondaryRightbutton?: Function;
}) => (
    <Contextual
        onBackButtonPress={args.onBackButtonPress}
        title={args.title}
        hideBackButton={args.hideBackButton}
        isDownloaded={args.isDownloaded}
        isShared={args.isShared}
        onClickRightButton={args.onClickRightButton}
        onClickSecondaryRightbutton={args.onClickSecondaryRightbutton}
    />
);

withRightButtonDownloadAndShared.argTypes = {
    title: {control: 'text'},
    isDownloaded: {control: 'boolean'},
    isShared: {control: 'boolean'},
};

withRightButtonDownloadAndShared.args = {
    title: 'Double Button Right',
    hideBackButton: false,
    isDownloaded: true,
    isShared: true,
    onBackButtonPress: () => alert('Hello There'),
    onClickRightButton: () => alert('Hello Download Button'),
    onClickSecondaryRightbutton: () => alert('Hello Shared Button'),
};
