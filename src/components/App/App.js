import Main from "../Main";
import Header from "../Header";
import React, {Component} from 'react';

class App extends Component {
    render() {
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
    }
}

export default App;