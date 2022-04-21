import {style} from 'typestyle';
import {colors} from '../../../../../styles';
import * as dividerStyles from '../../../../../Dividers/SlimLineCentered/SlimLineCentered.styles';

const styles = {
    container: style({
        position: 'relative',
        padding: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
        boxSizing: 'border-box',
        backgroundColor: colors.android_icons_icon_navigation_bar,
        $nest: {
            ['& .' + dividerStyles.default.SlimLineCentered]: {
                position: 'absolute',
                bottom: '1px',
                right: 0,
                left: 0,
            },
            '& div' : {
                color: colors.grey_1,
                lineHeight: '1.33'
            }
        },
    }),
    amount_container: style({
        display: 'flex',
    }),
};

export default styles;
