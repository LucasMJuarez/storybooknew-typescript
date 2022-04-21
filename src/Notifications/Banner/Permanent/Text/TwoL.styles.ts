import {style} from 'typestyle';
import {colors} from '../../../../styles';

const styles = {
    container: style({
        backgroundColor: 'white',
        paddingBottom: '0 !important',
        paddingRight: '8px',
        paddingTop: '8px',
        paddingLeft: '8px',
        borderRadius: '4px',
        display: 'flex',
        cursor: 'pointer',

        flexDirection: 'row',
        justifyContent: 'space-between',
    }),
    contentContainer: style({
        display: 'flex',
        flexDirection: 'row',
    }),
    badge: style({
        width: '10px !important',
        height: '8px !important',
        margin: '10px 3px 0 0',
        borderRadius: '10px',
        backgroundColor: colors.android_controls_tab_selected,
    }),
    textContainer: style({
        display: 'flex',
        flexDirection: 'column',
        margin: '6px',
        width: '100%',
    }),
    closeButton: style({
        borderWidth: 0,
        backgroundColor: 'transparent',
        padding: 0,
        width: 'min-content',
        height: 'min-content',
        cursor: 'pointer',
    }),
    displayNoti: style({
        width: '11px',
        height: '8px',
        margin: '10px 3px 0 0',
        borderRadius: '10px',
        backgroundColor: 'transparent',
    }),
    imgStyles: style({
        maxHeight: '50px',
        maxWidth: '50px',
        margin: '25px 35px 10px 10px',
        borderRadius: '4px',
    }),
    slimLineCentered: style({
        width: '90%',
        margin: '0 16px',
        height: 1,
        backgroundColor: colors.android_dividers_divider,
    }),
};

export default styles;
