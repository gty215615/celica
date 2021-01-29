import React from 'react';
import classnames from 'classnames'
/**
 * 
 * 按钮组件
 * 
 * 1.按钮类型
 *  primary  
 * link
 * 2. 按钮大小尺寸
 * lg sm
 * 3 按钮禁用
 *  disable
 * 4 超链接
 * link
 */


export enum ButtonType {
    Primary = 'primary',
    Link = 'link'
}

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}
interface IBaseButton {
    buttonType?: string;
    size?: string;
    disable?: boolean;
    link?: string
}

type IButtonPropsType = IBaseButton & React.ButtonHTMLAttributes<HTMLElement>
type IAnchorPropsType =  IBaseButton & React.AnchorHTMLAttributes<HTMLElement>
type IButtonType = Partial<IButtonPropsType & IAnchorPropsType>

const Button: React.FC<IButtonType> = (props) => {
    const {
        buttonType,
        size,
        disable,
        link,
        children,
        ...restProps
    } = props;
    const classes = classnames('btn', {
        [`btn-${buttonType}`]: buttonType,
        [`btn-${size}`]: size,
        "disable": (buttonType === ButtonType.Link) && disable
    });
    if (buttonType === ButtonType.Link) {
        return (
            <a role='link' className={classes} {...restProps} href={link}>{children}</a>
        )
    } else {
        return (
            <button role='button' className={classes} {...restProps} disabled={disable}>{children}</button>
        )
    }



}



export default Button


