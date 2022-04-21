import { style, cssRaw } from 'typestyle';
import { colors } from '../../../styles';
const styles = {
    container: style({
        display: 'flex',
        alignItems: 'center',
        padding: '0px 12px',
        height: 'auto',
        fontSize: '12px',
        fontFamily: 'Roboto',
        fontWeight: 500,
        color: colors.android_icons_icon_navigation_bar,
        borderRadius: '0px 3px 3px 3px',
        letterSpacing: 0,
    }),
    First: style({ backgroundColor: colors.android_charts_progress_chart_prog_2 }),
    Second: style({ backgroundColor: colors.android_backgrounds_background_cha_2 }),
    Third: style({ backgroundColor: colors.android_bars_primary_primary }),
    Fourth: style({ backgroundColor: colors.android_tags_tag_background_fourth }),
    Fifth: style({ backgroundColor: colors.android_bars_primary_primary_dark }),
    Sixth: style({ backgroundColor: colors.android_tags_tag_background_sixth }),
    Seventh: style({ color: colors.movistar_blue, backgroundColor: colors.white }),
};

cssRaw(`
.crossbrowser-width {
    width: fit-content;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: -o-fit-content;
}
`);

export default styles;
