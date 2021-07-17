import { connect } from "react-redux";
import { fetchTokenCreator, pendingTokenCreator, setReadyCreator } from "../../redux/reducers/AuthPageReducer";
import Auth from "./Auth";

const mapStateToProps = state => {
    return state.AuthPageReducer
}

const mapDispatchToProps = dispatch => {
    return {
        SignIn: ({username, password}) => {
            dispatch(fetchTokenCreator({username, password}))
        },
        setPending: () => {
            dispatch(pendingTokenCreator())
        },
        setReady: () => {
            dispatch(setReadyCreator())
        }
    }
}

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth)

export default AuthContainer;