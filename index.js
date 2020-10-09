const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Increment by 1
document.getElementById('increment').addEventListener('click', () => {
    dispatch({ type: 'CHANGEVALUE', value: 1, });
})

// Decrement by 1
document.getElementById('decrement').addEventListener('click', () => {
    dispatch({ type: 'CHANGEVALUE', value: -1, });
})

// Decrement by -5
document.getElementById('decrement5').addEventListener('click', () => {
    dispatch({ type: 'CHANGEVALUE', value: -5, });
})

// Increment by 5
document.getElementById('increment5').addEventListener('click', () => {
    dispatch({ type: 'CHANGEVALUE', value: 5, });
})

// Change color of counter on select
document.getElementById('colors').addEventListener('change', (e) => {
    dispatch({ type: 'CHANGECOLOR', color: e.target.value });
})

document.getElementById('whateverIWant').addEventListener('change', (e) => {
    e.preventDefault();
    if(e.target.value == NaN || e.target.value == '') {
        alert('Please a enter valid number')
    } else {
        dispatch({ type: 'CHANGEVALUE', value: parseInt(e.target.value, 10) });
    }
})