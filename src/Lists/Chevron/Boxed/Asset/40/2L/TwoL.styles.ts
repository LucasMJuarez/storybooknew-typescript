import { style } from 'typestyle';
import { colors } from '../../../../../../styles';

const styles = {
    background: style({
        display: 'flex',
        justifyContent: 'center',
        padding: '8px 16px 8px 16px',
        backgroundColor: 'transparent',
    }),
    container: style({
        width: '100%',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 0 16px 16px',
        backgroundColor: colors.android_icons_icon_navigation_bar,
        border: `solid 1px ${colors.android_backgrounds_background_cha_2}`,
        borderRadius: '4px',
    }),
    containerActive: style({
        width: '100%',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 0 16px 16px',
        backgroundColor: colors.android_icons_icon_navigation_bar, 
        borderRadius: '4px',
        border: `solid 1px ${colors.android_charts_progress_chart_prog_2}`,
    }),

    textAssetContainer: style({
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    }),

    chevronContainer: style({
        $nest: {
            '& div': {
                width: '25px',
            },
        },
    }),

    trashContainer: style({
        width: '32px',  
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
