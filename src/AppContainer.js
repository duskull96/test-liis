import { connect } from "react-redux";
import { setSuccessCreator } from "./redux/reducers/AuthPageReducer";
import App from "./App";


const mapStateToProps = state => {
    return state.AuthPageReducer
}
const mapDispatchToProps = dispatch => {
    return {
        setSuccess: () => {
            dispatch(setSuccessCreator())
        }
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;