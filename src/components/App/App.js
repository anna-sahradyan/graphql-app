import React from 'react';
import Main from "../Main";
import Header from "../Header";

const App = () => {
    return (
        <>
            <div className={'wrapper '}>
                <Header/>
                <div className={'main'}>
                    <Main/>
                </div>
            </div>
        </>

    );
};

export default App;