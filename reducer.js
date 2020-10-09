const initialState = {
    value: 0,
    color: "#000000"
}

const reducer = (state = initialState, action) => {
    let { type, value, color } = action;

    if (type === "CHANGEVALUE") {
        return {
            ...state,
            value: state.value + value
        };

    } else if (type === "CHANGECOLOR") {
        return {
            ...state,
            color: color
        }
        
    } else if (type === "RESETVALUE") {

    }
    return state
}



