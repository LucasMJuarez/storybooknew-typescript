import {style} from 'typestyle';
import {colors} from '../../styles';
import * as dividerStyles from '../../Dividers/SlimLineCentered/SlimLineCentered.styles';

const styles = {
    container: style({
        cursor: 'pointer',
        position: 'relative',
        padding: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        boxSizing: 'border-box',
        backgroundColor: colors.android_icons_icon_navigation_bar,
        $nest: {
            ['& .' + dividerStyles.default.SlimLineCentered]: {
                position: 'absolute',
                bottom: '1px',
                right: 0,
                left: 0,
            },
            '@media only screen and (max-width: 768px)': {
                outline: 'none'
            },
        },
    }),
    sub_text: style({
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 500,
        letterSpacing: 0,
        textAlign: 'center',
        color: colors.android_bars_primary_primary,
    }),
};

export default styles;
