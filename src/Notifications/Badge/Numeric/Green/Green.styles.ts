import {style} from 'typestyle';
import {colors} from '../../../../styles';

const styles = {
    badge: style({
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        backgroundColor: colors.android_controls_tab_selected,
        margin: '-38px 11px',
        marginRight: '-10px',
        opacity: '.99',
    }),
    fontContainer: style({
        paddingTop: '1px',
    }),
};

export default styles;
