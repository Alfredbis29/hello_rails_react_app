import axios from 'axios';

const GET_GREETING = 'hello_rails_react/greetings/GET_GREETING';

export const fetchGreetings = (payload) => ({
    type: GET_GREETING,
    payload,
});

// export const getGreetingFromAPI = async (dispatch) => storeGreeting => {
//  const { data } = await axios.get('http://127.0.0.1:3000/api/v1/greetings');
//     try {
//         dispatch(storeGreeting(data));
//     } catch (error) {
//         console.log(error);
//     }
// }

const initialState = {};

export const fetchGreetingsApi = () => async (dispatch) => {
    const response = await fetch('http://127.0.0.1:3000/api/v1/greetings');
    const data = await response.json();
    console.log(data);
    dispatch(fetchGreetings(data));
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_GREETING:
            console.log(action);
            return action.payload.greeting;
        default:
            return state;
    }
};

export default reducer;