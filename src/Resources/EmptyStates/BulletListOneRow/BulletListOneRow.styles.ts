import { style } from "typestyle";
import {colors} from '../../../styles';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '1px',
        paddingBottom: '3px',
    }),
    checkBox: style({
        height: '24px',
        width: '24px',
        marginRight: '12px',
    }),
    text: style({
        paddingTop: '3px',
        paddingBottom: '1px',
    }),
}

export default styles;