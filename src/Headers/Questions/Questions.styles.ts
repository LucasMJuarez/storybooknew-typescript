import { style } from 'typestyle';

const styles = {
    container: style({

    }),
    massa: style({
        alignItems: 'flex-start',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft: '16px',
        marginRight: '16px',
    }),
    body: style({
        marginBottom: '8px'
    }),
    questionHeader: style({
        marginBottom: '16px',
    }),
    button: style({
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                position: 'relative',
                width: '360px',
            },
        },
    }),
    mobileMode: style({
        display: 'block',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                display: 'none'
            },
        },
    }),
    desktopMode: style({
        display: 'block',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                display: 'none'
            },
        },
    }),
};

export default styles;
