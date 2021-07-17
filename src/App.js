import React, { useEffect } from "react";
import Cookies from "js-cookie";
import AuthContainer from "./components/Auth/AuthContainer";
import Main from "./components/Main/Main";

const App = props => {

    useEffect(() => {
        const token = Cookies.get('Token')
        if (token !== '' && token !== undefined) {
            props.setSuccess()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.status])
    console.log(props.status)
    return (
        <>
            {
                props.status === "SIGNIN_SUCCESS" ?
                    <Main />
                    :
                    <AuthContainer />
            }
        </>
    );
}

export default App;
