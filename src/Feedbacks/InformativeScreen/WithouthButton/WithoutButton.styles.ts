import {style} from 'typestyle';
import {colors} from '../../../styles';

const styles = {
    containerWeb: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '75px 30px',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                backgroundColor: colors.android_bars_primary_primary,
                height: '100%',
                padding: 0
            },
        },
    }),
    containerApp: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                backgroundColor: colors.android_bars_primary_primary,
                height: '100%',
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
    spinnerContainer: style({
        marginTop: '32px',
        marginBottom: '32px',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                width: '100%',
                height: '70%',
            },
            '@media only screen and (min-width: 768px)': {
                paddingLeft: '8px',
            },
        },
    }),
    title: style({
        paddingTop: '24px',
        paddingBottom: '16px',
        margin: 'unset'
    }),
    description: style({
        marginBottom: '32px',
    }),
};

export default styles;
