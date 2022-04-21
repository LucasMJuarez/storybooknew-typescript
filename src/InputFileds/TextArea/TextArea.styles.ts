import { style } from 'typestyle';
import { colors } from '../../styles';

const styles = {
  
    
    backgroundInput: style({
        width: 'auto',
        minWidth: '250px',
        height: '152px',
        margin: '0 0 4px',
        padding: '16px 5px 5px 12px',
        borderRadius: '4px',
        border: `solid 1px ${colors.grey_3}`,
        backgroundColor: `${colors.white}`,
        position: 'relative',
    }),
    refreshIcon: style ({
        position: 'absolute',
        right: '0',
        bottom: '0',
        padding: '0 5px 5px 0',
    }),
};

export default styles;
