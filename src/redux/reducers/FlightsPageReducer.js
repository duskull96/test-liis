
const initialState = {
    status: 'PENDING_FLIGHTS',
    outboundPartialDate: '',
    flights: {},
    favoritFlights: 0
}

export const PENDING_FLIGHTS = 'PENDING_FLIGHTS'
export const FETCH_FLIGHTS = 'FETCH_FLIGHTS'
export const SET_FLIGHTS = 'SET_FLIGHTS'
export const FETCH_FLIGHTS_FAILED = 'FETCH_FLIGHTS_FAILED'
export const SET_OUTBOUND_PARTIAL_DATE = 'SET_OUTBOUND_PARTIAL_DATE'
export const SET_FAVORIT_FLIGHTS = 'SET_FAVORIT_FLIGHTS'
export const COUNT_FAVORITE_FLIGHTS = 'COUNT_FAVORITE_FLIGHTS'

export default function MainPageReducer(state = initialState, action) {
    switch (action.type) {
        case PENDING_FLIGHTS:
            return { ...state, status: PENDING_FLIGHTS }
        case SET_OUTBOUND_PARTIAL_DATE:
            return { ...state, outboundPartialDate: action.payload }
        case SET_FLIGHTS:
            return { ...state, status: 'FETCH_FLIGHTS_SUCCESS', flights: action.payload, favoritFlights: 0 }
        case FETCH_FLIGHTS_FAILED:
            return { ...state, status: FETCH_FLIGHTS_FAILED, errorMessage: action.payload }
        case SET_FAVORIT_FLIGHTS:
            let favoritFlights = state.favoritFlights
            if (action.payload.boolean) {
                let Quotes = state.flights.Quotes.map((quote) => {
                    if (quote.QuoteId === action.payload.id) {
                        favoritFlights += 1
                        return { ...quote, isFavorit: true }
                    } else {
                        return quote
                    }
                })
                return { ...state, flights: { ...state.flights, Quotes }, favoritFlights }
            } else {
                let Quotes = state.flights.Quotes.map((quote) => {
                    if (quote.QuoteId === action.payload.id) {
                        favoritFlights -= 1
                        return { ...quote, isFavorit: false }
                    } else {
                        return quote
                    }
                })
                return { ...state, flights: { ...state.flights, Quotes }, favoritFlights }
            }
        default:
            return state
    }
}

export const setPendingFlightsCreator = () => ({ type: PENDING_FLIGHTS })
export const fetchFlightsCreator = payload => ({ type: FETCH_FLIGHTS, payload })
export const setFlightsCreator = payload => ({ type: SET_FLIGHTS, payload })
export const requestFlightsFailedCreator = payload => ({ type: FETCH_FLIGHTS_FAILED, payload })
export const setOutboundPartialDateCreator = payload => ({ type: SET_OUTBOUND_PARTIAL_DATE, payload })
export const setFavoritFlightsCreator = (id, boolean) => ({ type: SET_FAVORIT_FLIGHTS, payload: { id, boolean } })
export const countFavoritFlightsCreator = () => ({ type: COUNT_FAVORITE_FLIGHTS })