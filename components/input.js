import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default function Input({ id, className, label, ...attrs }) {
    const classes = classNames(className)

    return (
        <input
            {...attrs}
            name={id}
            id={id}
            className={classes}>
        </input>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
};

Input.defaultProps = {
    className: '',
};