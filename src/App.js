import React, { useEffect } from "react";
import Cookies from "js-cookie";
import AuthContainer from "./components/Auth/AuthContainer";
import MainContainer from "./components/Main/MainContainer";

const App = props => {

    useEffect(() => {
        const token = Cookies.get('Token')
        if (token !== '' && token !== undefined) {
            props.setSuccess()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.status])

    return (
        <>
            {
                props.status === "SIGNIN_SUCCESS" ?
                    <MainContainer />
                    :
                    <AuthContainer />
            }
        </>
    );
}

export default App;
