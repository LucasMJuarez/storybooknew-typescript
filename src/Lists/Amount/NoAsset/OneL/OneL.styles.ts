import {style} from 'typestyle';
import {colors} from '../../../../styles';
import * as dividerStyles from '../../../../Dividers/SlimLineCentered/SlimLineCentered.styles';

const styles = {
    container: style({
        position: 'relative',
        padding: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 64,
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
                outline: 'none',
            },
            '& > *:first-child': {
                width: '65%',
            },
        },
    }),
    amount_container: style({
        display: 'flex',
    }),
    no_wrap_amount_container: style({
        display: 'flex',
        whiteSpace: 'nowrap',
    }),
    link: style({
        position: 'relative',
        padding: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 64,
        boxSizing: 'border-box',
        backgroundColor: colors.android_icons_icon_navigation_bar,
        $nest: {
            ['& .' + dividerStyles.default.SlimLineCentered]: {
                position: 'absolute',
                bottom: '1px',
                right: 0,
                left: 0,
            },
            '&:hover': {
                cursor: 'pointer',
            },
            '@media only screen and (max-width: 768px)': {
                outline: 'none',
            },
            '& > *:first-child': {
                width: '65%',
            },
        },
    }),
};

export default styles;
