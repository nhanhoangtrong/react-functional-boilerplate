import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessageList from './MessageList';

const mapStateToProps = (state) => ({
    messages: state.messageList.messages,
});

const mapDispatchToProps = (dispatch) => ({
    onAddMessage() {
        dispatch.messageList.addMessage({
            title: Math.random().toString(),
            type: Math.random() > 0.5 ? 'error' : 'info',
        });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
