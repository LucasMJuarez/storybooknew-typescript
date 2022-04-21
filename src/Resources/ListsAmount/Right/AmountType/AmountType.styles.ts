import {style} from 'typestyle';
import { colors } from '../../../../styles';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingLeft: '11px',
    }),
    captioncontainer: style({
        marginLeft: '5px',
        marginBottom: '2px',
    }),
    lineThrough: style({
        textDecoration: `line-through`,
    }),
};

export default styles;