
const initialState = {number: 0};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT': {
            return {...state, number: state.number + action.payload};
        }
        case 'DECREMENT': {
            return  {...state, number: state.number - action.payload};
        }
        default: {
            return state;
        }
    }
};