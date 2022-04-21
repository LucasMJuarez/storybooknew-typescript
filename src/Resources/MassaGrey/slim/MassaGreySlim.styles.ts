import {style} from 'typestyle';
import {colors} from '../../../styles';
const styles = {
    container: style({
        display: 'flex',
        justifyContent: 'center',
        height: 'auto',
        paddingTop: '10px',
        backgroundColor: colors.android_backgrounds_background_alter,
        $nest: {
            '@media only screen and (max-height: 669px)': {
                height: '13.6vh',
            },
            '@media only screen and (max-height: 1024px)': {
                height: '40.6vh',
            },
            '@media (max-height: 1366px) and (min-width: 768px)': {
                height: '57.8vh',
            },
        },
    }),
};

export default styles;
