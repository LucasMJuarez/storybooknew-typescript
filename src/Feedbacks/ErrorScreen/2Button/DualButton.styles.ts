import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                height: 'calc(100vh - 56px)',
            },
        },
    }),
    buttonContainer: style({
        width: '60%',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                width: '100%',
            },
            '@media only screen and (min-width: 768px)': {
                paddingLeft: '8px',
            },
        },
    }),
    wrapper: style({
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 24px 24px 24px',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                width: '75%',
            },
        },
    }),
    title: style({
        paddingTop: '24px',
        paddingBottom: '16px',
        marginBlockStart: 0,
        marginBlockEnd: 0,
        fontWeight: 'unset',
    }),
};

export default styles;
