import React, { useState } from 'react'
import ClassNames from 'classnames'
import closeImg from './img/close.png'
export enum AlertType {
    Success = 'success',
    Default = 'default',
    Danger = 'danger',
    Warning = 'warning',
    Info = 'info',
}

interface IAlertBase {
    type?: string;
    title?: string;
    description?: string;
    close?: boolean;
}

const Alert: React.FC<IAlertBase> = (props) => {
    const {
        type,
        title,
        description,
        close
    } = props
    const [showAlert, onShowAlert] = useState(true)
    const classes = ClassNames('alert', {
        [`alert-${type}`]: type,
    })

    return (
        <>
            {
                showAlert && (<div role='alert' className={classes}>
                    {(title && <div className="title">{title}</div>)}
                    {(description && <span className="description">{description}</span>)}
                    {(close && <div onClick={() => { onShowAlert(false) }} role='alert-close' className="close">
                        <img src={closeImg} alt="" />
                    </div>)}
                </div>)
            }
        </>

    )
}

export default Alert