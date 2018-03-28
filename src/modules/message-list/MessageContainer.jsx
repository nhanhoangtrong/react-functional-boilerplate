import React from 'react';
import { connect } from 'react-redux';
import Message from '../../components/message/Message';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRemoveMessage() {
        dispatch.messageList.removeMessage(ownProps.id);
    },
});

export default connect(null, mapDispatchToProps)(Message);
