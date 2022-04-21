import { style } from 'typestyle';
import { colors } from '../../../../styles';

const styles = {
     container: style({
         display: 'flex',
         backgroundColor: colors.grey_5,
         height: '48px',
     }),
     placeHolder: style({
         padding: '12px 8px 12px 16px',
     }),
     description: style({
         padding: '14px 11px 14px 0px',
     }),
};

export default styles;
