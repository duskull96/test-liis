import Cookies from 'js-cookie'

const initialState = {
    status: 'READY'
}

export const READY = 'READY'
export const PENDING = 'PENDING'
export const SET_SIGNIN_SUCCESS = 'SET_SIGNIN_SUCCESS'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_FAILED = 'SIGNIN_FAILED'
export const LOGOUT = 'LOGOUT'
export const FETCH_TOKEN = 'FETCH_TOKEN'

export default function AuthPageReducer(state = initialState, action) {
    switch (action.type) {
        case READY:
            return { status: READY }
        case PENDING:
            return { status: PENDING }
        case LOGOUT:
            Cookies.remove('Token')
            return { status: READY }
        case SET_SIGNIN_SUCCESS:
            return { status: SIGNIN_SUCCESS }
        case SIGNIN_SUCCESS:
            Cookies.set('Token', action.payload.token)
            return { status: SIGNIN_SUCCESS }
        case SIGNIN_FAILED:
            switch (action.error.status) {
                case 500:
                    return (
                        {
                            status: SIGNIN_FAILED,
                            code: action.error.status,
                            message: action.error.message
                        }
                    )
                case 400:
                    return (
                        {
                            status: SIGNIN_FAILED,
                            code: action.error.status,
                            message: action.error.message
                        }
                    )
                default:
                    return
            }

        default:
            return state
    }
}

export const setReadyCreator = () => ({ type: READY })
export const setSuccessCreator = () => ({ type: SET_SIGNIN_SUCCESS })
export const removeTokenCreator = () => ({ type: LOGOUT })

export const setTokenCreator = payload => ({ type: SIGNIN_SUCCESS, payload })
export const requestTokenFailedCreator = error => ({ type: SIGNIN_FAILED, error })
export const pendingTokenCreator = () => ({ type: PENDING })
export const fetchTokenCreator = payload => ({ type: FETCH_TOKEN, payload })