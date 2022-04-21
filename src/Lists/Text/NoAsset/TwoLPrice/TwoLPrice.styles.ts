import {style} from 'typestyle';
import {colors} from '../../../../styles';
import * as dividerStyles from '../../../../Dividers/SlimLineCentered/SlimLineCentered.styles';

const styles = {
    mainContainer: style({
        padding: '16px 0 0 0',
    }),
    container: style({
        position: 'relative',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 25,
        backgroundColor: colors.android_icons_icon_navigation_bar,
        $nest: {
            ['& .' + dividerStyles.default.SlimLineCentered]: {
                position: 'absolute',
                bottom: '1px',
                right: 0,
                left: 0,
                margin: '20px 16px',
            },
        },
    }),
    lineContainer: style({
        marginTop: '16px',
    }),
};

export default styles;
