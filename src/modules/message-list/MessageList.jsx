import React from 'react';
import PropTypes from 'prop-types';
import MessageContainer from './MessageContainer';

const MessageList = ({ messages, onAddMessage }) => (
    <>
        <h1>Msg</h1>
        {messages.map((msg, i) => <MessageContainer key={i} {...msg} />)}
        <button onClick={onAddMessage}>Add Message</button>
    </>
);

MessageList.propTypes = {
    messageList: PropTypes.any,
};

export default MessageList;
