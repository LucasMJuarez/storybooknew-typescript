import { style } from 'typestyle';
import { colors } from '../../../styles';

const styles = {
    container: style({
        backgroundColor: colors.android_icons_icon_navigation_bar,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0 30px',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                height: '100%',
                padding: 0,
            },
        },
    }),
    buttonContainer: style({
        width: '60%',
        padding: '6px 0px',
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
                padding: '64px 24px 16px 18px',
                width: '78%',
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
