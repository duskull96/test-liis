import { connect } from 'react-redux'
import { removeTokenCreator } from '../../redux/reducers/AuthPageReducer'
import { fetchFlightsCreator, setOutboundPartialDateCreator } from '../../redux/reducers/MainPageReducer'
import Main from './Main'


const mapStateToProps = state => {
    return {
        state: state.MainPageReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logOut: () => {
            dispatch(removeTokenCreator())
        },
        fetchBrowseQuotes: (outboundPartialDate) => {
            dispatch(fetchFlightsCreator(outboundPartialDate))
        },
        setOutboundPartialDate: (outboundPartialDate) => {
            dispatch(setOutboundPartialDateCreator(outboundPartialDate))
        }
    }
}


const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer;