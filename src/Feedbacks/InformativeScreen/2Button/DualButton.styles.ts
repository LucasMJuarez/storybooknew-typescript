import { style } from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0 30px',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                height: '100%',
                padding: 0
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
                paddingLeft: '2px',
                width: '360px'
            },
        },
    }),
    wrapper: style({
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 24px 24px 24px',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                padding: '64px 24px 24px 18px',
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
