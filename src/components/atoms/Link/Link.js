import React from 'react'
import './Link.scss'
import classnames from 'classnames'


export const Link = (props) => {
    const btnClass = classnames('c-btn');
    return (
        <a
            className={btnClass}
            href={props.href}
            target={props.target}
            {...props}>
            {props.children}
        </a>
    );

};