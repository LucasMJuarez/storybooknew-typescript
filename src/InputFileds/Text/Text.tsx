import React, {useState, useEffect, FocusEvent, useRef} from 'react';
import Caption from '../../TextCatalog/CAPTION';
import styles from './Text.styles';

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
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    maxLength?: number;
    pattern?: string;
    ariaLabel?: string;
    tabIndex?: number;
    adornment?: string;
    autoComplete?: string;
    required?: boolean;
    ariaInvalid?: boolean;
    lengthAdornment?: number;
    onPaste?: React.ClipboardEventHandler;
    zIndex?: boolean;
}) {
    const ref = useRef<HTMLInputElement>(null);
    const [inputText, setInputText] = useState(props.value ? props.value : '');
    const [labelStyle, setLabelStyle] = useState('');
    const [activeInput, setActiveInput] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [startAdornment, setStartAdornment] = useState(false);

    let helpClassName = 'text_secondary';
    let labelClassName = !props.zIndex ? `${styles.label} ${styles.labelIndex}` : styles.label;

    if (props.error) {
        helpClassName = 'text_input_label_error';
        labelClassName = !props.zIndex
            ? `${styles.label} ${styles.labelIndex} ${styles.error}`
            : `${styles.label} ${styles.error}`;
    }
    const onFocus = () => {
        ref.current?.focus();
        setActiveInput(` ${styles.activeInput}`);
        setLabelStyle(` ${styles.activeLabel}`);
        setPlaceholder(props.placeholder);
    };

    const handleFocus = () => {
        if (props.adornment !== '') {
            setStartAdornment(true);
        }
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        if (props.adornment !== '' && e.target.value === '') {
            setStartAdornment(false);
        }
    };
    const onBlur = () => {
        if (!inputText) {
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

    useEffect(() => {
        setInputText(props.value || '');
    }, [props.value]);

    let adornmentClassName = `${styles.adornmentx1}`;
    if (props.lengthAdornment) {
        switch (props.lengthAdornment) {
            case 1:
                adornmentClassName = `${styles.adornmentx1}`;
                break;
            case 2:
                adornmentClassName = `${styles.adornmentx2}`;
                break;
            case 3:
                adornmentClassName = `${styles.adornmentx3}`;
                break;
            default:
                adornmentClassName = `${styles.adornmentx1}`;
                break;
        }
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.container} onFocus={onFocus} onBlur={onBlur}>
                {startAdornment ? (
                    <div className={`${styles.adornmentPositionStart} ${styles.adornmentContent}`}>
                        <p className={`${styles.adornmentText}`}>{props.adornment}</p>
                    </div>
                ) : null}
                <input
                    ref={ref}
                    onKeyDown={e => {
                        if (props.onKeyDown) {
                            props.onKeyDown(e);
                        }
                    }}
                    onChange={e => {
                        if (props.onChange) props.onChange(e);
                        setInputText(e.target.value);
                    }}
                    type={props.type ? props.type : 'text'}
                    className={props.adornment ? ` ${adornmentClassName}` : styles.input + activeInput}
                    name={props.title}
                    autoComplete={props.autoComplete}
                    onFocus={handleFocus}
                    onBlur={e => handleBlur(e)}
                    maxLength={props.maxLength}
                    pattern={props.pattern}
                    placeholder={placeholder}
                    value={inputText}
                    required={props.required}
                    autoFocus={props.autoFocus}
                    inputMode={props.inputMode}
                    onPaste={props.onPaste}
                    aria-label={props.ariaLabel}
                    tabIndex={props.tabIndex}
                    aria-invalid={props.ariaInvalid}
                />
                <label
                    className={labelClassName + labelStyle}
                    onClick={() => {
                        handleFocus();
                        onFocus();
                    }}
                >
                    {props.title}
                </label>
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
