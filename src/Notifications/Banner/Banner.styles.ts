import {style} from 'typestyle';
import {colors} from '../../styles';

const styles = {
    outContainer: style({
        padding: '8px',
        backgroundColor: colors.android_backgrounds_background_alter,
    }),
    container: style({
        backgroundColor: 'white',
        padding: '8px',
        borderRadius: '4px',
    }),
    contentContainer: style({
        display: 'flex',
        flexDirection: 'row',
    }),
    assetContainer: style({
        margin: '4px 6px 0 4px',
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
};

export default styles;
