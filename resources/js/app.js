import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store/store";
import Auth from "./auth";

function App(){
    return (
        <Provider store={store}>
            <div>App</div>
        </Provider>
    )
}

Auth.bootstrap().finally(() => {
    if(document.getElementById('root')) {
        ReactDOM.render(<App/>, document.getElementById('root'));
    }
})

