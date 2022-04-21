import React from 'react';
import styles from './Green.styles';
import Caption from '../../../../TextCatalog/CAPTION';

const GreenBadge = (props: {text?: any}) => {
    return (
        <div>
            <svg width='24' height='25' viewBox='0 0 24 25' xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M12.238 2.8c3.738 0 6.75 3.179 6.75 7.083l-.003 2.826c0 .38.076.754.224 1.1l1.336 3.121c.42.768-.11 1.742-1.002 1.742h-2.805c-.64 1.98-2.428 3.376-4.5 3.376-2.07 0-3.86-1.393-4.5-3.375H4.921c-.893 0-1.426-.975-1.035-1.681l1.371-3.189c.148-.341.225-.715.225-1.093l.006-2.828C5.488 5.98 8.5 2.8 12.238 2.8zm2.887 15.873H9.351c.547 1.128 1.65 1.875 2.887 1.875 1.238 0 2.34-.748 2.887-1.875zM12.238 4.299c-2.891 0-5.25 2.49-5.25 5.585l-.006 2.829a4.277 4.277 0 0 1-.347 1.684l-1.197 2.775H19.02L17.831 14.4a4.269 4.269 0 0 1-.346-1.693l.003-2.825c0-3.093-2.36-5.583-5.25-5.583z'
                    fill='#757575'
                    fillRule='nonzero'
                />
            </svg>
            {props.text && (
                <div className={styles.badge}>
                    <div className={styles.fontContainer}>
                        <Caption
                            level={2}
                            align='Center'
                            type={props.text.length >= 2 ? 'text_primary_inverse_2_minSize' : 'text_primary_inverse_2'}
                            text={props.text}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
export default GreenBadge;
