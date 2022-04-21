import {style} from 'typestyle';
import {colors} from '../../../../../../styles';

const styles = {
    container: style({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.android_icons_icon_navigation_bar,
        padding: '0px 8px 0px 16px',
        height: '64px',
        cursor: 'pointer',
        $nest: {
            '@media only screen and (max-width: 768px)': {
                outline: 'none',
            },
        },
    }),

    content: style({
        display: 'flex',
        alignItems: 'center',
    }),

    assetContainer: style({
        paddingRight: '16px',
        height: '24px',
    }),
};

export default styles;
