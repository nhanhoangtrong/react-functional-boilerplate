export default {
    state: {
        messages: [
            {
                id: Math.random().toString(),
                title: 'first msg again',
                type: 'success',
            },
        ],
    },
    reducers: {
        addMessage(state, { title, type }) {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: Math.random().toString(),
                        title,
                        type,
                    },
                ],
            };
        },
        removeMessage(state, id) {
            return {
                ...state,
                messages: state.messages.filter((msg) => msg.id !== id),
            };
        },
        editMessage(state, { id, title, type }) {
            return {
                ...state,
                messages: state.messages.map(
                    (msg) =>
                        msg.id === id
                            ? {
                                  id,
                                  title,
                                  type,
                              }
                            : msg
                ),
            };
        },
    },
};
