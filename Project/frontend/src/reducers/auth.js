const initialState = {
    toen: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}