import React, {useState, useEffect, FocusEvent} from 'react';
import Caption from '../../TextCatalog/CAPTION';
import styles from './Inactive.styles';
import GreyDown from '../../Assets/24/Dropdown/GreyDown';
import DarkDown from '../../Assets/24/Dropdown/DarkDown';

function Text(props: {
    role?: string;
    title: string;
    placeholder: string;
    type?: string;
    value?: string;
    help?: string;
    error?: boolean;
    onChange?: Function;
    onKeyDown?: Function;
    autoFocus?: boolean;
    maxLength?: number;
    ariaLabel?: string;
    tabIndex?: number;
    required?: boolean;
    ariaInvalid?: boolean;
    items: Array<string>;
}) {
    const [labelStyle, setLabelStyle] = useState('');
    const [activeInput, setActiveInput] = useState('');
    const [placeholder, setPlaceholder] = useState('');

    const myArray = props.items || [];
    const [listOpen, setListOpen] = useState(false);
    const [userSelect, setUserSelect] = useState('');
    const handleClick = () => {
        setActiveInput(` ${styles.activeInput}`);
        setLabelStyle(` ${styles.activeLabel}`);
        setPlaceholder(props.placeholder);
        setListOpen(!listOpen);
    };
    const handleUserSeleccion = (e: any) => {
        setUserSelect(e.target.innerText);
        setListOpen(false);
    };

    useEffect(() => {
        if (userSelect.length != 0) {
            setActiveInput(` ${styles.activeInput}`);
            setLabelStyle(` ${styles.inactiveLabel}`);
            setPlaceholder(props.placeholder);
        } else {
            setActiveInput('');
            setLabelStyle('');
            setPlaceholder('');
        }
    }, [userSelect]);

    let helpClassName = 'text_secondary';
    let labelClassName = styles.label;

    if (props.error) {
        helpClassName = 'text_input_label_error';
        labelClassName = `${styles.label} ${styles.error}`;
    }
    const onFocus = () => {};

    const handleFocus = () => {};

    const onBlur = () => {
        setListOpen(!listOpen);
        if (!userSelect) {
            setActiveInput('');
            setLabelStyle('');
            setPlaceholder('');
        } else {
            setActiveInput(` ${styles.activeInput}`);
            setLabelStyle(` ${styles.inactiveLabel}`);
            setPlaceholder(props.placeholder);
        }
    };

    useEffect(() => {
        props.value && onBlur();
    }, []);

    return (
        <div className={styles.wrapper}>
            <form className={styles.container} onFocus={onFocus} onBlur={onBlur}>
                <input
                    onKeyDown={e => {
                        if (props.onKeyDown) {
                            props.onKeyDown(e);
                        }
                    }}
                    onChange={e => {
                        if (props.onChange) props.onChange(e);
                    }}
                    type={props.type ? props.type : 'text'}
                    className={styles.input + activeInput}
                    name={props.title}
                    onFocus={handleFocus}
                    maxLength={props.maxLength}
                    placeholder={placeholder}
                    value={userSelect != '' ? userSelect : ''}
                    required={props.required}
                    autoFocus={props.autoFocus}
                    aria-label={props.ariaLabel}
                    tabIndex={props.tabIndex}
                    aria-invalid={props.ariaInvalid}
                    readOnly
                ></input>
                <div onClick={() => handleClick()} className={styles.containerDrop}>
                    <div className={styles.containerIcon}>
                        {listOpen ? <DarkDown /> : <GreyDown />}
                        {listOpen && (
                            <div onFocus={onFocus} className={styles.list}>
                                {myArray.map((item, index) => (
                                    <div onClick={handleUserSeleccion} className={styles.listItem} key={index}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <label className={labelClassName + labelStyle}>{props.title}</label>
            </form>
            {props.help ? (
                <div className={styles.helpContainer}>
                    <Caption level={1} align='Left' type={helpClassName} text={props.help} />
                </div>
            ) : null}
        </div>
    );
}

export default Text;
