import React, { useState, useEffect, FocusEvent } from 'react';
import Caption from '../../TextCatalog/CAPTION';
import styles from './Password.styles';
import Explore_Active from '../../Assets/24/Explore_Active';
import Explore from '../../Assets/24/Explore';

function Password(props: {
    title: string;
    placeholder: string;
    type?: string;
    value?: string;
    help?: string;
    error?: boolean;
    onChange?: Function;
    onKeyDown?: Function;
    autoFocus?: boolean;
    inputMode?: 'none' | 'text';
    maxLength?: number;
    pattern?: string;
    ariaLabel?: string;
    tabIndex?: number;
    adornment?: string;
    autoComplete?: string;
    required?: boolean;
    capsLockWarning?: boolean
}) {
    const [inputText, setInputText] = useState(props.value ? props.value : '');
    const [labelStyle, setLabelStyle] = useState('');
    const [activeInput, setActiveInput] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [startAdornment, setStartAdornment] = useState(false);
    const [displayPassword, setDisplayPassword] = useState(false);
    const [isCapsLockKeyActivated, setIsCapsLockKeyActivated] = useState(false);

    let helpClassName = 'text_secondary';
    let labelClassName = styles.label;

    if (props.error) {
        helpClassName = 'text_input_label_error';
        labelClassName = `${styles.label} ${styles.error}`;
    }
    const onFocus = () => {
        setActiveInput(` ${styles.activeInput}`);
        setLabelStyle(` ${styles.activeLabel}`);
        setPlaceholder(props.placeholder);
    };

    const handleFocus = () => {
        if (props.adornment !== '') {
            setStartAdornment(true)
        }
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        if (props.adornment !== '' && e.target.value === '') {
            setStartAdornment(false)
        }
    }
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

    const switchDisplayPassword = () => displayPassword ? setDisplayPassword(false) : setDisplayPassword(true);

    useEffect(() => {
        setInputText(props.value || '');
    }, [props.value]);

    return (
        <div className={styles.wrapper}>
            <form className={styles.container} onFocus={onFocus} onBlur={onBlur}>
                {
                    (startAdornment) ?
                        <div className={`${styles.adornmentPositionStart} ${styles.adornmentContent}`}>
                            <p className={`${styles.adornmentText}`}>{props.adornment}</p>
                        </div> : null
                }

                <input
                    onKeyDown={e => {
                        if (props.onKeyDown) {
                            props.onKeyDown(e);
                        }
                        setIsCapsLockKeyActivated(e.getModifierState('CapsLock'));
                    }}
                    onChange={e => {
                        if (props.onChange) props.onChange(e);
                        setInputText(e.target.value);
                    }}
                    type={displayPassword ? 'text' : 'password'}
                    className={
                        (props.adornment) ?
                            `${styles.input} ${styles.adornmentactiveInput}` :
                            styles.input + activeInput
                    }
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
                    aria-label={props.ariaLabel}
                    tabIndex={props.tabIndex}
                >
                </input>
                <div
                    tabIndex={0}
                    aria-label={displayPassword ? "Botón: Ocultar contraseña" : "Botón: Mostrar contraseña"}
                    className={styles.containerExplore}
                    onClick={switchDisplayPassword}
                    onKeyDown={event => {
                        if (event.key === 'Enter' || event.key === " ") {
                            switchDisplayPassword();
                        }
                    }}>
                    {displayPassword ? <Explore_Active /> : <Explore />}
                </div>
                <label className={labelClassName + labelStyle}>{props.title}</label>
            </form>
            {
                props.capsLockWarning && isCapsLockKeyActivated ? (
                    <div className={styles.helpContainer}>
                        <Caption level={1} align='Left' type={'text_secondary'} text={'Bloq Mayús activado.'} />
                    </div>
                ) : null
            }
            {
                props.help ? (
                    <div className={styles.helpContainer}>
                        <Caption level={1} align='Left' type={helpClassName} text={props.help} />
                    </div>
                ) : null
            }
        </div >
    );
}

export default Password;
