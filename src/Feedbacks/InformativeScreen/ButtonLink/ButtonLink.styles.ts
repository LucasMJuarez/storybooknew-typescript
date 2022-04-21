import { style } from 'typestyle';
import { colors } from '../../../styles';

const styles = {
     link: style({
        width: 'fit-content',
        cursor: 'pointer',
    }),
    container: style({
        backgroundColor: colors.android_icons_icon_navigation_bar,
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
        padding: '6px 0px 6px 0px',
        width: '60%',
        textAlign: 'center',
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
        backgroundColor: colors.android_icons_icon_navigation_bar,
        $nest: {
            '@media only screen and (min-width: 768px)': {
                padding: '64px 24px 15px 18px',
                width: '75%',
            },
        },
    }),
    title: style({
        paddingTop: '24px', 
        marginBlockEnd: 0,
        paddingBottom: '16px',
        marginBlockStart: 0,
        fontWeight: 'unset',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                marginBlockEnd: 0,
            },
        },
    }),
    terminosText: style({
         justifyContent: 'center',
        marginTop: '20@vs',
        paddingTop: 2,

        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '24px',
        letterSpacing: 0,
        textAlign: 'center',
        paddingBottom: '16px',
        color: colors.android_icons_icon_primary,
    }),
    marked: style({
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '24px',
        letterSpacing: 0,
        textAlign: 'center',
        color: colors.android_bars_primary_primary,
        width: 'fit-content',
        cursor: 'pointer',
    }),
};

export default styles;
