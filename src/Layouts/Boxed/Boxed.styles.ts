import {style} from 'typestyle';
import {colors} from '../../styles';

const styles = {
    background: style({
        backgroundColor: colors.android_backgrounds_background_alter,
        padding: '16px',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                backgroundColor: colors.android_icons_icon_navigation_bar,
            },
        },
    }),
    container: style({
        height: '225px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px',
        backgroundColor: colors.android_icons_icon_navigation_bar,
        borderRadius: '4px',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                backgroundColor: colors.android_backgrounds_background_alter,
            },
        },
    }),
};

export default styles;
