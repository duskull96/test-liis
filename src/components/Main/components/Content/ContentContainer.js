import { connect } from 'react-redux'
import { fetchFlightsCreator, setFavoritFlightsCreator, setOutboundPartialDateCreator, setPendingFlightsCreator } from '../../../../redux/reducers/FlightsPageReducer'
import { setImagesCreator } from '../../../../redux/reducers/SliderPageReducer'
import Content from './Content'


const mapStateToProps = state => {
    return {
        state: {
            flightsPage: state.FlightsPageReducer,
            sliderPage: state.SliderPageReducer
        }
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchBrowseQuotes: (outboundPartialDate) => {
            dispatch(fetchFlightsCreator(outboundPartialDate))
        },
        setOutboundPartialDate: (outboundPartialDate) => {
            dispatch(setOutboundPartialDateCreator(outboundPartialDate))
        },
        setImages: (images) => {
            dispatch(setImagesCreator(images))
        },
        setFavorit: (id, boolean) => {
            dispatch(setFavoritFlightsCreator(id, boolean))
        },
        setPendingFlights: () => {
            dispatch(setPendingFlightsCreator())
        }
    }
}


const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)

export default ContentContainer;