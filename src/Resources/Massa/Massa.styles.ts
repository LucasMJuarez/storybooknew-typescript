import { style } from 'typestyle';
import { colors } from '../../styles';
const styles = {
    container: style({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '192px',
        backgroundColor: colors.android_bars_primary_primary,
    }),
    containerLeft: style({
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        height: '192px',
        backgroundColor: colors.android_bars_primary_primary,
        $nest: {
            '@media only screen and (min-width: 768px)': {
                backgroundColor: colors.white,
                height: '104px',
            },
        },
    })
};

export default styles;