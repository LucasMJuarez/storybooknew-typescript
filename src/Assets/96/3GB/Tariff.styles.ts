import {style} from 'typestyle'; 
import { colors } from '../../../styles';

const styles = {
    wrapper : style({
        display: 'flex',
        position: 'relative',
        width: '96px',
        justifyContent: 'center',
        height: '96px',
        alignItems: 'center',
    }),
    childContainer : style({
        position: 'absolute',
        fontSize: '24px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        color: '#ffffff',
        lineHeight: 'normal',
        letterSpacing: 'normal',
    }),
    svgContainer: style({
        position: 'absolute', 
    })
};

export default styles;
