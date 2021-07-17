import { connect } from 'react-redux';
import { removeTokenCreator } from '../../../../redux/reducers/AuthPageReducer'
import Header from './Header'


const mapStateToProps = state => {
    return {
        state: state.HeaderPageReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logOut: () => {
            dispatch(removeTokenCreator())
        },
    }
}


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer;