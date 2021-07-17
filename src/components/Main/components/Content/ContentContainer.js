import { connect } from 'react-redux'
import { fetchFlightsCreator, setOutboundPartialDateCreator } from '../../../../redux/reducers/MainPageReducer'
import Content from './Content'


const mapStateToProps = state => {
    return {
        state: state.MainPageReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchBrowseQuotes: (outboundPartialDate) => {
            dispatch(fetchFlightsCreator(outboundPartialDate))
        },
        setOutboundPartialDate: (outboundPartialDate) => {
            dispatch(setOutboundPartialDateCreator(outboundPartialDate))
        }
    }
}


const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)

export default ContentContainer;