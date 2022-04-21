import { style } from 'typestyle';

const styles: {[className: string]: string } = {
    link: style({
        width: 'fit-content',
        cursor: 'pointer',
    }),
    link_disabled: style ({
        width: 'fit-content',
        cursor: 'auto',
    }),
};

export default styles;