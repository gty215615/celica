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
interface Iprops {
    type: string;
    size: string;
    disable?: boolean;
    link?: string
}
const Button: React.FC<Iprops> = (props) => {
    const {
        type,
        size,
        disable,
        link,
        children
    } = props;
    const classes = classnames('btn', {
        [`btn-${type}`]: type,
        [`btn-${size}`]: size,
        "disable": (type == ButtonType.Link) && disable
    });
    if (type === ButtonType.Link) {
        return (
            <a className={classes} href={link}>{children}</a>
        )
    } else {
        return (
            <button className={classes} disabled={disable}>{children}</button>
        )
    }



}



export default Button


