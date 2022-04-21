import {style} from 'typestyle';
import {colors} from '../../../styles';

const styles = {
    container: style({
        backgroundColor: colors.android_icons_icon_navigation_bar,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                height: '100%',
            },
        },
    }),
    wrapper: style({
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 80px 24px 80px',
        alignItems: 'center',
        backgroundColor: colors.android_icons_icon_navigation_bar,
        $nest: {
            '@media only screen and (max-width: 767px)': {
                padding: '48px 24px 24px 24px',
            }
        }
    }),
    title: style({
        paddingTop: '16px',
        paddingBottom: '8px',
    }),
    title_container: style({
        paddingTop: '16px',
        paddingBottom: '8px',
    }),
};

export default styles;
