import React from 'react';
import PropTypes from 'prop-types';

const getMessageBgColor = (type) => {
    switch (type) {
        case 'info':
            return '#17a2b8';
        case 'success':
            return '#28a745';
        case 'warning':
            return '#ffc107';
        case 'error':
            return '#dc3545';
        default:
            return '#007bff';
    }
};

const Message = ({ id, title, type, onRemoveMessage }) => {
    const bgColor = getMessageBgColor(type);

    return (
        <div
            style={{
                color: '#fff',
                backgroundColor: bgColor,
                padding: '1rem',
                margin: '0.5rem',
                borderRadius: 4,
                position: 'relative',
            }}>
            Message: {title}
            <button
                style={{
                    position: 'absolute',
                    display: 'block',
                    right: '5%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}
                onClick={onRemoveMessage}>
                Remove
            </button>
        </div>
    );
};

Message.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    onRemoveMessage: PropTypes.func,
};

export default Message;
