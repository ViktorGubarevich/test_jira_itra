import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default function Button({ children, onClick, className, disabled, active, ...attrs }) {
    const classes = classNames(className, { active })

    return (
        <button
            {...attrs}
            className={classes}
            disabled={disabled}
            onClick={onClick}
        >   {children}</button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool
};

Button.defaultProps = {
    children: 'Default button',
    onClick: () => { },
    className: '',
    disabled: false,
    active: false,
};

