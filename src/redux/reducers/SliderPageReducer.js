
const initialState = {
    status: 'PENDING_IMAGES',
    images: []
}

export const SET_LOADING = 'SET_PENDING'
export const SET_IMAGES = 'SET_IMAGES'

export default function SliderPageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, status: 'PENDING_IMAGES' }
        case SET_IMAGES:
            return { ...state, status: 'SUCCESS', images: action.payload }

        default:
            return state
    }
}

export const setImagesCreator = payload => ({ type: SET_IMAGES, payload })