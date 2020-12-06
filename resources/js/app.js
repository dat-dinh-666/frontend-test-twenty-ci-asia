import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store/store";
import Main from "./components/Main";
import {Slide, ToastContainer} from "react-toastify";
import bootstrap from "./bootstrap";

function App(){
    return (
        <Provider store={store}>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Slide}
                limit={3}
            />
            <Main/>
        </Provider>
    )
}

bootstrap().finally(() => {
    if(document.getElementById('root')) {
        ReactDOM.render(<App/>, document.getElementById('root'));
    }
});


