import {style} from 'typestyle';
import {colors} from '../../../../../styles';

const styles = {
    container: style({
        paddingTop: "20px",
        backgroundColor: colors.android_icons_icon_navigation_bar,
        cursor: 'pointer',
    }),
    content: style({
        display: 'flex',
        alignItems: 'center',
        paddingRight: '13px',
        paddingBottom: '16px',
        marginLeft: '16px'
    }),
    subContent: style({
        display: 'flex',
        alignItems: 'center',
    }),
    textContainer: style({
        marginLeft: '8px',
        display: 'flex',
        flexDirection: 'column',
    }),
};

export default styles;
