
const initialState = {
    status: 'PENDING_FLIGHTS',
    outboundPartialDate: ''
}

export const PENDING = 'PENDING_FLIGHTS'
export const FETCH_FLIGHTS = 'FETCH_FLIGHTS'
export const SET_FLIGHTS = 'SET_FLIGHTS'
export const FETCH_FLIGHTS_FAILED = 'FETCH_FLIGHTS_FAILED'
export const SET_OUTBOUND_PARTIAL_DATE = 'SET_OUTBOUND_PARTIAL_DATE'

export default function MainPageReducer(state = initialState, action) {
    switch (action.type) {
        case PENDING:
            return { ...state , status: PENDING }
        case SET_OUTBOUND_PARTIAL_DATE:
            return { ...state, outboundPartialDate: action.payload }
        case SET_FLIGHTS:
            return { ...state, status: 'FETCH_FLIGHTS_SUCCESS', flights: action.payload }
        case FETCH_FLIGHTS_FAILED:
            return { ...state, status: FETCH_FLIGHTS_FAILED, errorMessage: action.payload }
        default:
            return state
    }
}


export const fetchFlightsCreator = payload => ({ type: FETCH_FLIGHTS, payload })
export const setFlightsCreator = payload => ({ type: SET_FLIGHTS, payload })
export const requestFlightsFailedCreator = payload => ({ type: FETCH_FLIGHTS_FAILED, payload })
export const setOutboundPartialDateCreator = payload => ({ type: SET_OUTBOUND_PARTIAL_DATE, payload })