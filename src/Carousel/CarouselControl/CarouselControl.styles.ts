import {style} from 'typestyle';
import { colors } from '../../styles';

const styles = {
    bulletsContainer: style({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "24px",
        boxSizing: "border-box",
        $nest: {
            "&>*": {
                transitionProperty: "all",
                transitionDuration: "100ms",
                transitionTimingFunction: "linear",
            }
        }
    }),
    bulletDisable: style({
        width: '6px',
        height: '6px',
        margin: '4px',
        borderRadius: '50%',
        boxSizing: 'border-box',
        backgroundColor: colors.android_dividers_divider,
    }),
    bulletActive: style({
        width: '6px',
        height: '6px',
        margin: '4px',
        borderRadius: '50%',
        boxSizing: 'border-box',
        backgroundColor: colors.android_bars_primary_primary,
    }),
};

export default styles;
