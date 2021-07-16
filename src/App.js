import React from "react";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";

function App() {
    return (
        <>
            {
                true ?
                    <Main />
                    :
                    <Auth />
            }
        </>
    );
}

export default App;
