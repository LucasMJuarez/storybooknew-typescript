import {style} from 'typestyle';
import {colors} from '../../../styles';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                backgroundColor: colors.android_bars_primary_primary,
                minHeight: '100%',
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
                width: '360px',
            },
        },
    }),
    wrapper: style({
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 24px 16px 24px',
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
