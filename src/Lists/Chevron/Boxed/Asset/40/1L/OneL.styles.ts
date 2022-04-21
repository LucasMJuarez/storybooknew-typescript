import {style} from 'typestyle';
import {colors} from '../../../../../../styles';

const styles = {
    background: style({
        display: 'flex',
        justifyContent: 'center',
        padding: '8px 0px',
        backgroundColor: 'transparent',
    }),
    container: style({
        width: '100%',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 0px 16px 16px',
        margin: '0px 16px',
        backgroundColor: colors.android_icons_icon_navigation_bar,
        border: `solid 1px ${colors.android_backgrounds_background_cha_2}`,
        borderRadius: '4px',
    }),

    containerActive: style({
        border: `solid 1px ${colors.android_charts_progress_chart_prog_2}`,
    }),

    textAssetContainer: style({
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    }),

    checkboxContainer: style({
        padding: '4px 8px',
        $nest: {
            '& div': {
                width: '25px',
            },
        },
    }),

    textContainer: style({
        marginLeft: '16px',
    }),
};

export default styles;
