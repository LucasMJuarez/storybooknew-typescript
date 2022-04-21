import {style} from 'typestyle';
import {colors} from '../../../../../../styles';

const styles = {
    containerWithCheckbox: style({
        marginTop: '10px',
        backgroundColor: colors.android_icons_icon_navigation_bar,
        cursor: 'pointer',
        border: 0,
        width: '100%',
    }),
    container: style({
        marginTop: '10px',
        backgroundColor: colors.android_icons_icon_navigation_bar,
        border: 0,
        width: '100%',
    }),
    content: style({
        display: 'grid',
        gridTemplateColumns: '90% 10%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: '13px',
        paddingBottom: '16px',
    }),
    subContent: style({
        display: 'flex',
        alignItems: 'center',
    }),
    assetContainer: style({
        paddingRight: '16px',
        marginLeft: '12px',
    }),
    textContainer: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        wordBreak: 'break-word',
    }),
};

export default styles;
