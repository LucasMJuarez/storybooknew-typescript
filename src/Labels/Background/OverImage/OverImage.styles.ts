import { style } from 'typestyle';
import { colors } from '../../../styles';
const styles = {
    container: style({
        padding: "8px 15px",
        borderRadius: "16px",
        backgroundColor: colors.android_charts_progress_chart_prog_2,
        width: "max-content"
    }),
    text: style({
        height: "16px",
        fontFamily: "Roboto",
        fontSize: "12px",
        fontWeight: "bold",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.4,
        letterSpacing: "normal",
        textAlign: "center",
        color: colors.android_icons_icon_navigation_bar
    })
};

export default styles;
