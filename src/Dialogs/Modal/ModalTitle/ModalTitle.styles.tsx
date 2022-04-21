import { style } from 'typestyle';
import { colors } from '../../../styles';

const styles = {
    text: style({
        fontFamily: 'Roboto',
        fontSize: '24px',
        fontWeight: 300,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
        color: colors.android_icons_icon_primary,
        paddingLeft: 16,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        $nest: {
            '@media only screen and (max-width: 435px)': {
                fontSize: 20,
                fontWeight: 500,
                color: '#2a2a3c',
            },
        },
    }),

    container: style({
        paddingBottom: '1px',
        $nest: {
            '@media only screen and (max-width: 435px)': {
                paddingBottom: 0
            },
        },
    })

}
export default styles;